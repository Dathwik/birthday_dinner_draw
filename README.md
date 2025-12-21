🎉 Event Entry & Raffle System (React + Firebase)

A full-stack event entry and raffle web application built with React and Firebase, featuring secure data handling, admin-only winner selection, and a fully responsive UI.

This project focuses on real-world production concerns such as validation, authentication, security rules, deployment, and mobile compatibility.

🚀 Live Demo

🔗 Hosted App: (add your Firebase Hosting URL here)

🧩 Features
👤 User Side

Entry form with robust validation

First & last name rules

Email or Instagram handle validation

US phone number validation

Submission cutoff logic (entries stop after a fixed date)

Clean success state with auto-redirect

Fully mobile-responsive design

🔐 Admin Side

Secure admin-only dashboard

Randomly pick a winner from valid entries

Winner details displayed instantly

Option to re-pick a winner if needed

🔒 Security

Firestore database with custom security rules

Admin access restricted via Firestore admins collection

No public access to entries or admin data

Sensitive configuration handled safely

🛠 Tech Stack

Frontend: React (Vite)

Routing: React Router

Backend / Database: Firebase Firestore

Authentication: Firebase Auth

Hosting: Firebase Hosting

Styling: Custom CSS (desktop + mobile optimized)

📁 Project Structure
src/
├── components/
│   ├── Footer.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── EntryForm.jsx
│   ├── Admin.jsx
│
├── firebase.js
├── App.jsx
├── main.jsx

🔐 Admin Authorization (How It Works)

Admin users are authenticated via Firebase Auth

Admin access is granted by adding the user’s UID to:

/admins/{uid}


Firestore rules ensure:

Only admins can read entries

Only admins can pick winners

Regular users can only submit entries

🧪 Testing Locally
npm install
npm run dev


Then open:

http://localhost:5173

🚀 Deployment
npm run build
firebase deploy

📱 Mobile Responsiveness

Desktop layout preserved exactly

Mobile layout optimized using:

Safe viewport units (svh)

Media queries

Flexible card widths

Non-blocking footer behavior

Tested across:

Desktop browsers

Mobile Chrome & Safari

Responsive device simulators

📌 What I Learned

Firestore security rules & access control

Handling admin-only logic securely

Debugging production-only Firebase errors

Managing responsive layouts without breaking desktop UI

Hosting & deploying real-world applications

🧠 Future Improvements

Email notifications for winners

Rate limiting entries per user

Admin audit log

Countdown timer synced with server time

👋 About Me

Built by Dathwik Kollikonda
🎓 Master’s student in Computer & Information Sciences
💻 Interested in full-stack development, cloud, and scalable systems

🔗 LinkedIn: https://www.linkedin.com/in/dathwik-k-23823b227/
