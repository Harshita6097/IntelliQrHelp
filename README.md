# IntelliQrHelp – Smart Emergency Response System

IntelliQrHelp is a smart emergency response platform that enables quick access to critical medical information through a QR-based digital medical card and instant SOS alerts via Telegram Bot API.

Designed for elderly individuals, accident victims, and patients with chronic illnesses — ensuring that first responders and emergency contacts can act immediately.

---

## Features

- Secure email/password authentication
- Personalized digital emergency card with QR code
- One-click SOS alert button
- Telegram bot integration — emergency contacts receive instant alerts with full medical details
- Auto Chat ID bot — contacts message `@intelliqrhelp_sos_bot` to get their Telegram Chat ID
- User dashboard to manage medical profile and emergency contacts
- Public profile page accessible via QR scan (no login required)
- Cloud image uploads via Cloudinary
- Data stored securely in Firebase Firestore

---

## Tech Stack

| Component       | Technology                   |
|-----------------|------------------------------|
| Frontend        | React.js (Create React App)  |
| Database        | Firebase Firestore           |
| Authentication  | Firebase Authentication      |
| Image Storage   | Cloudinary                   |
| SOS Alerts      | Telegram Bot API             |
| Bot Webhook     | Vercel Serverless Function   |
| QR Code         | api.qrserver.com             |
| Hosting         | Vercel                       |

---

## Live Demo

**App:** [https://intelliqrhelp-lovat.vercel.app](https://intelliqrhelp-lovat.vercel.app)

**Telegram Bot:** [@intelliqrhelp_sos_bot](https://t.me/intelliqrhelp_sos_bot)
Message the bot with `/start` to receive your Telegram Chat ID for SOS alerts.

---

## Getting Started

### Prerequisites

- Node.js v18+
- A Firebase project (Spark free plan)
- A Cloudinary account (free tier)
- A Telegram bot token from [@BotFather](https://t.me/BotFather)

### Installation

```bash
git clone https://github.com/Harshita6097/IntelliQrHelp.git
cd IntelliQrHelp
npm install
```

### Firebase Setup

1. Go to [https://console.firebase.google.com](https://console.firebase.google.com) and create a project
2. Enable **Email/Password** under Authentication > Sign-in method
3. Create a **Firestore Database** in production mode
4. Register a Web App and copy the config values
5. Apply the following Firestore security rules:

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

### Cloudinary Setup

1. Create a free account at [https://cloudinary.com](https://cloudinary.com)
2. Go to Settings > Upload > Add an **Unsigned upload preset**
3. Note your **Cloud Name** and **Upload Preset** name

### Telegram Bot Setup

1. Message [@BotFather](https://t.me/BotFather) on Telegram and run `/newbot`
2. Copy the bot token
3. After deployment, register the webhook by visiting:

```
https://api.telegram.org/bot<TOKEN>/setWebhook?url=https://<your-vercel-url>/api/telegram-webhook
```

### Environment Variables

Create a `.env` file in the project root:

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

### Run Locally

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
IntelliQrHelp/
│
├── api/
│   └── telegram-webhook.js  # Vercel serverless function for Telegram bot
├── public/                  # Static assets
├── src/
│   ├── components/          # ProtectedRoute, Header, Footer
│   ├── pages/
│   │   ├── Dashboard/       # Main dashboard
│   │   ├── Home/            # Landing page
│   │   ├── Login/           # Login page
│   │   ├── Register/        # Registration page
│   │   ├── ForgotPassword/  # Password reset page
│   │   └── PublicProfile/   # Public QR scan landing page
│   ├── firebase.js          # Firebase initialization
│   └── App.js               # Route definitions
├── .env                     # Environment variables (not committed)
├── .env.example             # Example environment file
└── package.json
```

---

## How SOS Alerts Work

1. User adds emergency contacts along with their Telegram Chat ID
2. Contacts obtain their Chat ID by messaging [@intelliqrhelp_sos_bot](https://t.me/intelliqrhelp_sos_bot) with `/start`
3. When SOS is triggered, all contacts instantly receive a Telegram message containing the user's name, blood group, allergies, current medications, and mobile number

---

## Deployment

The project is deployed on Vercel. Any push to the `main` branch triggers an automatic redeployment.

To deploy your own instance:

1. Fork the repository
2. Import the project on [https://vercel.com](https://vercel.com)
3. Add all environment variables from `.env.example` in the Vercel dashboard
4. Deploy and register the Telegram webhook using the live URL

---

## Roadmap

- GPS location sharing during SOS
- Voice-activated SOS trigger
- Integration with hospital systems
- PWA support for mobile accessibility

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Author

Developed by [Harshita Sharma](https://www.linkedin.com/in/harshita-sharma-6097/).
If you find this project useful, consider starring the repository.
