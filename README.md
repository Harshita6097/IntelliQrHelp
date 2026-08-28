# IntelliQrHelp 🚨 – Smart Emergency Response System

**IntelliQrHelp** is a smart emergency response platform built to assist individuals in medical or life-threatening emergencies through a **QR-based digital medical card** and a **virtual SOS alert system** powered by **Telegram Bot API**.

The system is especially useful for elderly people, accident victims, and patients with chronic illnesses, enabling quick access to medical information and alerting emergency contacts instantly.

## 💡 Features

- 🔐 **Secure Login/Signup System**
- 📄 **Digital Emergency Card** (with QR code)
- 🚨 **One-Click SOS Alert Button**
- 📬 **Telegram Bot Integration** — contacts receive instant alerts
- 🤖 **Auto Chat ID Bot** — `@intelliqrhelp_sos_bot` replies with your Chat ID
- 📊 **User Dashboard** — manage medical profile & emergency contacts
- 🔗 **QR Code Redirection to Public Profile**
- 🖼️ **Cloud Image Uploads** via Cloudinary
- 🔒 **Secure Firebase Firestore Storage**

---

## 🛠️ Tech Stack

| Component      | Technology                        |
|----------------|-----------------------------------|
| Frontend       | React.js (Create React App)       |
| Database       | Firebase Firestore                |
| Auth           | Firebase Authentication           |
| Image Storage  | Cloudinary                        |
| Alerts         | Telegram Bot API                  |
| Bot Webhook    | Vercel Serverless Function        |
| QR Code        | api.qrserver.com                  |
| Hosting        | Vercel                            |

---

## 🚀 Live Demo

🌐 [https://intelliqrhelp-lovat.vercel.app](https://intelliqrhelp-lovat.vercel.app)

🤖 Telegram Bot: [@intelliqrhelp_sos_bot](https://t.me/intelliqrhelp_sos_bot)
_(Message the bot with /start to get your Telegram Chat ID for SOS alerts)_

---

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Harshita6097/IntelliQrHelp.git
cd IntelliQrHelp
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Firebase

- Go to [https://console.firebase.google.com](https://console.firebase.google.com)
- Create a project → Enable **Email/Password Authentication**
- Create a **Firestore Database** (production mode)
- Register a Web App → copy the config values
- Set Firestore rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### 4. Setup Cloudinary

- Create a free account at [https://cloudinary.com](https://cloudinary.com)
- Go to Settings → Upload → Add an **Unsigned upload preset**
- Note your **Cloud Name** and **Upload Preset** name

### 5. Setup Telegram Bot

- Message [@BotFather](https://t.me/BotFather) on Telegram → `/newbot`
- Copy the bot token
- After deployment, register the webhook:

```
https://api.telegram.org/bot<TOKEN>/setWebhook?url=https://<your-vercel-url>/api/telegram-webhook
```

### 6. Create `.env` File

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
REACT_APP_TELEGRAM_BOT_TOKEN=your_bot_token
REACT_APP_CLOUDINARY_CLOUD_NAME=your_cloud_name
REACT_APP_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
```

### 7. Run Locally

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🧪 Folder Structure

```
IntelliQrHelp/
│
├── api/
│   └── telegram-webhook.js  # Vercel serverless function for Telegram bot
├── public/                  # Static files
├── src/
│   ├── components/          # ProtectedRoute, Header, Footer
│   ├── pages/
│   │   ├── Dashboard/       # Main dashboard (medical profile, SOS, QR)
│   │   ├── Home/            # Landing page
│   │   ├── Login/           # Login page
│   │   ├── Register/        # Registration page
│   │   ├── ForgotPassword/  # Password reset page
│   │   └── PublicProfile/   # Public QR scan landing page
│   ├── firebase.js          # Firebase config
│   └── App.js               # Routes
├── .env                     # Environment variables (not committed)
├── .env.example             # Example env file
└── package.json
```

---

## 🔔 How SOS Alerts Work

1. User adds emergency contacts with their **Telegram Chat ID**
2. Contacts get their Chat ID by messaging [@intelliqrhelp_sos_bot](https://t.me/intelliqrhelp_sos_bot) with `/start`
3. When SOS is triggered, all contacts instantly receive a Telegram message with the user's name, blood group, allergies, medications, and mobile number

---

## ✨ Future Enhancements

- 📍 GPS Location Sharing during SOS
- 🎙️ Voice-Activated SOS Trigger
- 🏥 Integration with Hospital Systems
- 📱 PWA Support for Mobile Accessibility

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🤝 Support

If you find this project useful, consider starring ⭐ the repo and sharing it with others.
For queries, contact via [LinkedIn](https://www.linkedin.com/in/harshita-sharma-6097/).
