export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(200).json({ ok: true });

  const { message } = req.body;
  if (!message) return res.status(200).json({ ok: true });

  const chatId = message.chat.id;
  const text = message.text || "";

  let reply = null;

  if (text === "/start") {
    reply = `👋 Welcome to IntelliQrHelp Bot!\n\nYour Telegram Chat ID is:\n\`${chatId}\`\n\nShare this ID with the person who wants to add you as an emergency contact. They'll enter it in the dashboard when adding your contact details.\n\n🚨 Once added, you'll receive instant SOS alerts if they're in an emergency.`;
  } else if (text === "/id") {
    reply = `Your Chat ID is: \`${chatId}\``;
  }

  if (reply) {
    await fetch(
      `https://api.telegram.org/bot${process.env.REACT_APP_TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: reply, parse_mode: "Markdown" }),
      }
    );
  }

  res.status(200).json({ ok: true });
}
