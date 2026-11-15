# 🌾 AgriConnect – Farmer Assistance Platform

AgriConnect is a web platform that helps farmers register, sign in securely and access a simple, easy-to-use digital space built for them. It is built with **React.js** on the frontend and **Supabase** for authentication and database.

> 🔗 **Live Demo:** _Coming soon_
> 📸 **Screenshots:** see the [Screenshots](#-screenshot) section below
"C:\Users\hp\Pictures\Screenshot 2026-09-15 072944.png"


## 📌 Problem Statement

Many farmers still lack an easy digital way to register themselves and connect to online services. AgriConnect aims to give farmers a simple, mobile-friendly platform where they can create an account, register their details and get started in a few steps.

## ✨ Features

- 🔐 **User Authentication** – secure sign up and login powered by Supabase Auth
- 👨‍🌾 **Farmer Registration** – farmers can register and store their details in the database
- 📱 **Responsive UI** – works smoothly on mobile, tablet and desktop
- ⚡ **Fast frontend** – component-based React.js interface
- ☁️ **Cloud backend** – data stored and managed using Supabase (PostgreSQL)

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React.js, HTML5, CSS3 |
| Backend / Auth | Supabase (Authentication) |
| Database | Supabase (PostgreSQL) |
| Version Control | Git, GitHub |

## 📸 Screenshots

_Add 3–4 screenshots here (Home, Login, Registration, Dashboard). Example:_

```
![Home Page](./screenshots/home.png)
![Login Page](./screenshots/login.png)
![Farmer Registration](./screenshots/register.png)
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or above)
- npm
- A free [Supabase](https://supabase.com/) account and project

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Ansh280-droid/agriconnect.git

# 2. Go into the project folder
cd agriconnect

# 3. Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root folder and add your Supabase credentials
(use the variable names your project already uses; an example is shown below):

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> ⚠️ Never commit your `.env` file to GitHub.

### Run the app

```bash
npm start
```

(or `npm run dev` if the project uses Vite). Then open the local URL shown in the terminal.

## 🗂️ How It Works

1. A user signs up or logs in through Supabase Authentication.
2. After login, the farmer fills in the registration form.
3. The details are saved in the Supabase database.
4. The responsive React interface displays the information across devices.

## 🔮 Future Improvements

- Deploy the app and add a live demo link
- Weather updates and crop advisory for farmers
- Market (mandi) price information
- Hindi / regional language support
- Farmer dashboard with profile editing

## 🧠 What I Learned

- Building a full user authentication flow with Supabase
- Managing data with a cloud database from a React app
- Designing responsive interfaces and structuring React components
- Using Git and GitHub for version control

## 👤 Author

**Ansh Yadav**
BCA Student, PSIT College of Higher Education, Kanpur

- 💼 LinkedIn: [linkedin.com/in/ansh-yadav-515a86324](https://linkedin.com/in/ansh-yadav-515a86324)
- 🐙 GitHub: [github.com/Ansh280-droid](https://github.com/Ansh280-droid)
- 📧 Email: anshy2431253@gmail.com

---

⭐ If you like this project, consider giving it a star!
