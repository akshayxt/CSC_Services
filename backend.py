from flask import Flask, request, jsonify
from pyrogram import Client, filters
from pyrogram.types import Message
import asyncio
from threading import Thread

app = Flask(__name__)

# Replace with your actual values
API_ID = 24509589  # From my.telegram.org
API_HASH = "717cf21d94c4934bcbe1eaa1ad86ae75"  # From my.telegram.org
BOT_TOKEN = "8544073819:AAEfInj_b0mH-JpIVR1-kqyBBhPvDRSIJzs"  # From @BotFather
GROUP_ID = -1003571206466  # Note: If this is a group, it should typically be negative like -1007876454654; adjust accordingly

client = Client("bot", api_id=API_ID, api_hash=API_HASH, bot_token=BOT_TOKEN)

@client.on_message(filters.command("done") & filters.chat(GROUP_ID))
def handle_done(client: Client, message: Message):
    if len(message.command) > 1:
        try:
            app_id = int(message.command[1])
            # Fetch the message
            msg = client.get_messages(GROUP_ID, app_id)
            if msg.text:
                new_text = msg.text.replace("Status: pending", "Status: finished")
                client.edit_message_text(GROUP_ID, app_id, new_text)
                message.reply("Appointment marked as finished.")
        except Exception as e:
            message.reply(f"Error: {e}")

@app.route('/check', methods=['GET'])
def check_availability():
    date = request.args.get('date')
    time = request.args.get('time')
    if not date or not time:
        return jsonify({'available': False}), 400

    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    available = True
    with client:
        for message in client.get_chat_history(GROUP_ID, limit=200):  # Limit to recent 200 to avoid overload
            if message.text:
                lines = message.text.split('\n')
                status_line = next((l for l in lines if l.startswith('Status:')), None)
                date_line = next((l for l in lines if l.startswith('Date:')), None)
                time_line = next((l for l in lines if l.startswith('Time:')), None)
                if status_line and date_line and time_line:
                    status = status_line.split(':')[1].strip()
                    msg_date = date_line.split(':')[1].strip()
                    msg_time = time_line.split(':')[1].strip()
                    if status != 'finished' and msg_date == date and msg_time == time:
                        available = False
                        break
    return jsonify({'available': available})

@app.route('/book', methods=['POST'])
def book_appointment():
    data = request.json
    name = data.get('name')
    mob = data.get('mob')
    service = data.get('service')
    date = data.get('date')
    time = data.get('time')
    if not all([name, mob, service, date, time]):
        return jsonify({'success': False}), 400

    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    with client:
        # Send initial message
        sent_msg = client.send_message(GROUP_ID, "Placeholder")
        text = f"Appointment ID: {sent_msg.id}\nName: {name}\nMob: {mob}\nService: {service}\nDate: {date}\nTime: {time}\nStatus: pending"
        client.edit_message_text(GROUP_ID, sent_msg.id, text)
    return jsonify({'success': True, 'id': sent_msg.id})

if __name__ == '__main__':
    client.start()
    t = Thread(target=app.run, kwargs={'host': '0.0.0.0', 'port': 5000})
    t.start()
    client.idle()