# IntelliQrHelp 🚨 – Smart Emergency Response System

**IntelliQrHelp** is a smart emergency response platform built to assist individuals in medical or life-threatening emergencies through a **QR-based digital medical card** and a **virtual SOS alert system** powered by **Telegram Bot API**.  

The system is especially useful for elderly people, accident victims, and patients with chronic illnesses, enabling quick access to medical information and alerting emergency contacts instantly.

## 💡 Features

- 🔐 **Secure Login/Signup System**  
- 📄 **Digital Emergency Card** (with QR code)  
- 🚨 **One-Click SOS Alert Button**  
- 📬 **Telegram Bot Integration**  
- 📊 **User Dashboard**  
- 🔗 **QR Code Redirection to Public Profile**  
- 🔒 **Secure Firebase Firestore Storage**

---

## 🛠️ Tech Stack

| Component     | Technology            |
|---------------|------------------------|
| Frontend      | React.js, HTML, CSS    |
| Backend       | Firebase (Firestore)   |
| Auth & Storage| Firebase Auth & Firestore DB |
| Alerts        | Telegram Bot API       |
| QR Code       | QR Code Generator API  |
| Hosting       | Vercel                 |

---

## 🚀 Live Demo

🌐 [Click here to try IntelliQrHelp](https://intelliqrhelp.vercel.app)  
_(Note: Make sure to allow Telegram messages from bots for SOS alerts.)_

---

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/AkshatGarg2005/intelliqrhelp.git
cd intelliqrhelp
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Firebase

* Create a Firebase project.
* Enable Authentication (Email/Password).
* Setup Firestore Database.
* Enable Firebase Hosting (optional).
* Create a `.env` file with your credentials:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=xxxxxxx
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
REACT_APP_TELEGRAM_BOT_TOKEN=your_bot_token
REACT_APP_TELEGRAM_CHAT_ID=your_chat_id
```

### 4. Run the App Locally

```bash
npm run dev
```

Open your browser at `http://localhost:5173`

---

## 🧪 Folder Structure

```
intelliqrhelp/
│
├── public/                  # Static files
├── src/
│   ├── components/          # Reusable components
│   ├── pages/               # Main pages (Login, Register, Dashboard)
│   ├── firebase/            # Firebase config
│   └── App.jsx              # Main App
├── .env                     # Environment variables
├── package.json
└── README.md
```

---

## ✨ Future Enhancements

* 📍 GPS Location Sharing during SOS
* 🎙️ Voice-Activated SOS Trigger
* 🏥 Integration with Hospital Systems
* 📱 PWA Support for Mobile Accessibility

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🤝 Support

If you find this project useful, consider starring ⭐ the repo and sharing it with others.
For queries, contact via [LinkedIn](https://www.linkedin.com/in/akshat-garg-vitbhopal/).
