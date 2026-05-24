# 💊 Daily Dose – Medication Reminder App

An Android application built with **Expo** and **React Native** to help users track and manage their daily medications. Features biometric authentication, push notifications, and a clean animated UI.

---

## 📌 Features

- 💊 **Medication Tracking** – Add, view, and manage your daily medications
- 🔐 **Biometric Authentication** – Secure access via Face ID / Touch ID
- 🔔 **Push Notifications** – Timely medication reminders using Expo Notifications
- 🎨 **Animated UI** – Smooth splash screen and circular progress animations
- 📁 **File-based Routing** – Scalable navigation with Expo Router
- 💾 **Local Storage** – Persistent data with AsyncStorage

---

## 🛠️ Tech Stack

| Category   | Technology                        |
|------------|-----------------------------------|
| Language   | TypeScript                        |
| Framework  | React Native, Expo                |
| Navigation | Expo Router                       |
| Auth       | expo-local-authentication         |
| Storage    | @react-native-async-storage       |
| Notifications | expo-notifications             |
| Icons      | @expo/vector-icons                |
| Platform   | Android (iOS & Web via Expo)      |

---

## 📂 Project Structure

```
daily-dose/
│
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx
│   │   └── explore.tsx
│   ├── auth.tsx
│   └── index.tsx
│
├── components/
│   ├── SplashScreen.tsx
│   └── CircularProgress.tsx
│
├── assets/
├── app.json
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js
- Expo CLI
- Android device or emulator

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/rinshamol/daily-dose.git
cd daily-dose
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Start the App
```bash
npx expo start
```

Scan the QR code with the **Expo Go** app on your Android device, or press `a` to open in an Android emulator.

---

## 📱 Screenshots

> Coming soon

---

## ⚠️ Known Limitations

- Uses plain AsyncStorage (encryption planned via `expo-secure-store`)
- No unit/integration tests yet
- Some UI sections still in progress

---

## 🔮 Roadmap

- [ ] Encrypted storage for sensitive health data
- [ ] Complete tab navigation layout
- [ ] Unit & integration tests with Jest
- [ ] iOS testing and optimization
- [ ] Dark mode support

---

## 👩‍💻 Author

**Rinsha Mol K S** – Software Developer  
GitHub: [@rinshamol](https://github.com/rinshamol)

---

## 📝 License

This project is for educational purposes.
