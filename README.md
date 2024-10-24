# CineTracker 🎬

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)  
CineTracker is a movie and series tracking app built with Next.js and Firebase. It allows users to rate the movies or series they’ve watched, receive personalized recommendations based on their mood and watch history, and organize their favorites into custom lists.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Firebase Setup](#firebase-setup)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

---

## Features 📋

- **Rate Movies & Series**: Track and rate movies/series you've watched.
- **Mood-Based Recommendations**: Get movie suggestions tailored to your current mood.
- **Personalized Lists**: Organize films and series into custom lists (Favorites, To Watch, etc.).
- **Seamless Auth**: Authenticate via Google or other OAuth providers.
- **Real-time Updates**: View and manage your lists in real-time thanks to Firebase.
- **Notifications**: Get alerts for new movies that match your preferences.

---

## Tech Stack ⚙️

- **Frontend**: [Next.js](https://nextjs.org/) (React framework)
- **UI**: [TailwindCSS](https://tailwindcss.com/)
- **State Management**: React Context API and Zustand
- **Backend**: [Firebase](https://firebase.google.com/)
  - Authentication
  - Firestore Database
  - Hosting
  - Cloud Functions
  - Cloud Messaging (for notifications)
- **External API**: [The Movie Database (TMDB)](https://www.themoviedb.org/documentation/api)

---

## Installation 🛠️

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/CineTracker.git
   cd CineTracker
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:

   ```bash
   TMDB_API_KEY=your_tmdb_api_key
   FIREBASE_API_KEY=your_firebase_api_key
   FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   FIREBASE_PROJECT_ID=your_firebase_project_id
   FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   FIREBASE_APP_ID=your_firebase_app_id
   ```

---

## Usage 🚀

To start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

---

## Firebase Setup 🔧

1. Go to the [Firebase Console](https://console.firebase.google.com/), create a new project, and set up the following services:
   - **Authentication**: Enable Google Authentication (or any other providers you want).
   - **Firestore Database**: Create a Firestore database and set the rules to allow reading/writing only for authenticated users.
   - **Hosting**: Deploy your app via Firebase Hosting.
   - **Cloud Functions**: Write any necessary backend logic, such as handling movie recommendations.

2. Add your Firebase config to the `.env.local` file as shown above.

---

## API Integration 🎥

CineTracker uses the [TMDB API](https://developers.themoviedb.org/3/getting-started) to fetch movie and series data. To set it up:

1. Create an account at [TMDB](https://www.themoviedb.org/).
2. Go to the [API section](https://www.themoviedb.org/settings/api) and generate an API key.
3. Add the API key to your `.env.local` file:

   ```bash
   TMDB_API_KEY=your_tmdb_api_key
   ```

---

## Contributing 🤝

Contributions are welcome! If you’d like to contribute, please follow these steps:

1. Fork the repository.
2. Create your feature branch: `git checkout -b my-new-feature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin my-new-feature`.
5. Submit a pull request.

---

## License 📝

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
