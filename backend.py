# backend.py
# Core file: MongoDB + Pyrogram Bot + Flask API + Modular loading

import os
import datetime
import re
import asyncio
import threading
import queue
import importlib
from uuid import uuid4
from urllib.parse import quote_plus

from flask import Blueprint, request, jsonify
from pymongo import MongoClient  # Sync client (Flask thread ke liye better)
from pyrogram import Client, filters
from apscheduler.schedulers.asyncio import AsyncIOScheduler

# ==================== Configuration ====================

username = quote_plus(os.environ.get("MONGO_USER", "Autochat"))
password = quote_plus(os.environ.get("MONGO_PASS", "Raxx@123"))
MONGO_URL = f"mongodb+srv://{username}:{password}@cluster0.unruazx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

API_ID = int(os.environ.get('API_ID', 1234567))
API_HASH = os.environ.get('API_HASH', 'your_api_hash')
BOT_TOKEN = os.environ.get('BOT_TOKEN', 'your_bot_token')
GROUP_ID = int(os.environ.get('GROUP_ID', -1001234567890))

DB_NAME = "csc_center"
COLLECTION_NAME = "appointments"

# ==================== MongoDB (Sync for Flask, Async later if needed) ====================

mongo_client = MongoClient(MONGO_URL)
db = mongo_client[DB_NAME]
appointments = db[COLLECTION_NAME]

# Ensure unique index
appointments.create_index("message_id", unique=True)

# ==================== Flask Blueprint ====================

flask_app = Blueprint('backend', __name__)

tasks = queue.Queue()
results = queue.Queue()

@flask_app.route('/check', methods=['GET'])
def check_availability():
    date = request.args.get('date')
    time = request.args.get('time')
    if not date or not time:
        return jsonify({"available": False})

    try:
        dt = datetime.datetime.fromisoformat(f"{date} {time}")
        if not (10 <= dt.hour < 18):
            return jsonify({"available": False})
    except:
        return jsonify({"available": False})

    count = appointments.count_documents({
        "date": date, "time": time, "status": "pending"
    })
    return jsonify({"available": count == 0})

@flask_app.route('/book', methods=['POST'])
def book_appointment():
    data = request.json
    if not all(k in data for k in ['name','mob','service','date','time']):
        return jsonify({"success": False})

    name, mob, service, date, time = data['name'], data['mob'], data['service'], data['date'], data['time']

    try:
        dt = datetime.datetime.fromisoformat(f"{date} {time}")
        if not (10 <= dt.hour < 18):
            return jsonify({"success": False})
    except:
        return jsonify({"success": False})

    dup = appointments.count_documents({"mob": mob, "date": date, "status": "pending"}) > 0

    unique_id = str(uuid4())
    tasks.put(('book', {
        'unique': unique_id, 'name': name, 'mob': mob,
        'service': service, 'date': date, 'time': time, 'dup': dup
    }))

    # Wait for Telegram message ID
    for _ in range(100):
        try:
            res_unique, msg_id = results.get_nowait()
            if res_unique == unique_id:
                return jsonify({"success": True, "id": msg_id})
        except queue.Empty:
            asyncio.run(asyncio.sleep(0.1))
    return jsonify({"success": False, "message": "Booking timeout"})

# ==================== Pyrogram Bot ====================

app = Client("csc_bot", api_id=API_ID, api_hash=API_HASH, bot_token=BOT_TOKEN)

# ALL_MODULES list - jitne bhi modules add karoge, yahan naam daal do
ALL_MODULES = [
    ".appointments",
    ".reminders",
    # ".admin",       # Future mein uncomment kar dena
    # ".payments",    # Naya module add karne ke liye bas yahan naam likho
]

# Global variables jo modules use kar sakte hain
BOT_APP = app
APPOINTMENTS_COL = appointments
TASK_QUEUE = tasks
RESULT_QUEUE = results
GROUP_CHAT_ID = GROUP_ID

async def process_tasks():
    while True:
        try:
            task_type, data = tasks.get_nowait()
            if task_type == 'book':
                warn = "⚠️ Duplicate booking (same mobile, same day)" if data['dup'] else ""
                text = (
                    f"🆕 New Appointment\n"
                    f"ID: <ID>\n"
                    f"Name: {data['name']}\n"
                    f"Mobile: {data['mob']}\n"
                    f"Service: {data['service']}\n"
                    f"Date: {data['date']}\n"
                    f"Time: {data['time']}\n"
                    f"Status: pending\n"
                    f"Commands: /done <ID> | /cancel <ID>{'\n' + warn if warn else ''}"
                )
                msg = await app.send_message(GROUP_ID, text)
                final_text = text.replace("<ID>", str(msg.id))
                await msg.edit_text(final_text)

                # Save to MongoDB
                appointments.insert_one({
                    "message_id": msg.id,
                    "name": data['name'],
                    "mob": data['mob'],
                    "service": data['service'],
                    "date": data['date'],
                    "time": data['time'],
                    "status": "pending",
                    "created_at": datetime.datetime.utcnow()
                })

                results.put((data['unique'], msg.id))
        except queue.Empty:
            await asyncio.sleep(0.1)
        except Exception as e:
            print("Task processing error:", e)

async def main_bot():
    await app.start()
    print("🤖 Bot started!")

    # Load all modules dynamically
    print("📦 Loading modules...")
    for module_name in ALL_MODULES:
        try:
            importlib.import_module("modules" + module_name)
            print(f"✅ Loaded: modules{module_name}")
        except Exception as e:
            print(f"❌ Failed to load modules{module_name}: {e}")

    # Start task processor
    asyncio.create_task(process_tasks())

    # Daily reminder scheduler
    scheduler = AsyncIOScheduler()
    scheduler.add_job(lambda: asyncio.create_task(daily_reminder()), 'cron', hour=8, minute=0)
    scheduler.start()

    print("🚀 All modules loaded. Bot is running!")
    await app.idle()

async def daily_reminder():
    today = datetime.date.today().isoformat()
    pending = list(appointments.find({"date": today, "status": "pending"}).sort("time", 1))
    if not pending:
        return
    text = "🌅 Good Morning! Aaj ke Appointments:\n\n"
    for i, ap in enumerate(pending, 1):
        text += f"{i}. {ap['time']} - {ap['name']} ({ap['service']})\n"
    text += f"\nTotal: {len(pending)} bookings"
    await app.send_message(GROUP_ID, text)

# Start bot in background thread
threading.Thread(target=lambda: asyncio.run(main_bot()), daemon=True).start()