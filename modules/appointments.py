# modules/appointments.py

from pyrogram import filters
from backend import BOT_APP as app, APPOINTMENTS_COL as col, GROUP_CHAT_ID
import datetime

@app.on_message(filters.command(["today", "list", "stats", "tomorrow"]) & filters.group)
async def appointment_commands(client, message):
    if message.chat.id != GROUP_CHAT_ID:
        return

    cmd = message.command[0]

    today = datetime.date.today().isoformat()
    tomorrow = (datetime.date.today() + datetime.timedelta(1)).isoformat()
    current_month = datetime.date.today().strftime("%Y-%m")

    if cmd == "today":
        apps = list(col.find({"date": today}).sort("time", 1))
        if not apps:
            await message.reply("Aaj koi appointment nahi hai.")
            return
        text = "📅 Aaj ke Appointments:\n\n"
        for ap in apps:
            text += f"{ap['time']} - {ap['name']} ({ap['service']}) - {ap.get('status','pending')}\n"
        await message.reply(text)

    elif cmd == "tomorrow":
        apps = list(col.find({"date": tomorrow}).sort("time", 1))
        text = "📅 Kal ke Appointments:\n\n" if apps else "Kal koi appointment nahi hai."
        for ap in apps:
            text += f"{ap['time']} - {ap['name']} ({ap['service']})\n"
        await message.reply(text)

    elif cmd == "list":
        apps = list(col.find({"date": today, "status": "pending"}).sort("time", 1))
        if not apps:
            await message.reply("Aaj koi pending appointment nahi.")
            return
        text = "⏰ Quick List (Aaj):\n\n"
        for ap in apps:
            text += f"{ap['time']} → {ap['name']} ({ap['service']})\n"
        await message.reply(text)

    elif cmd == "stats":
        pipeline = [
            {"$match": {"date": {"$regex": f"^{current_month}"}}},
            {"$group": {"_id": "$service", "count": {"$sum": 1}}}
        ]
        results = list(col.aggregate(pipeline))
        total = sum(r['count'] for r in results)
        if total == 0:
            await message.reply("Is mahine koi booking nahi hui.")
            return
        text = "📊 Is Mahine ki Stats:\n\n"
        for r in sorted(results, key=lambda x: -x['count']):
            text += f"{r['_id']}: {r['count']}\n"
        text += f"\nTotal: {total}"
        await message.reply(text)