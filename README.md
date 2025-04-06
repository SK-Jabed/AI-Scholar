# 🎓 AI Scholar — AI-Powered Course Management System (Client)

> ✨ _Revolutionizing digital learning with the power of Artificial Intelligence, modern design, and seamless interactivity._

---

## 📚 Project Overview

**AI Scholar** is a full-stack, AI-powered Course Management System (CMS) engineered to elevate online education with personalized learning paths, smart content generation, dynamic analytics, and intuitive UI/UX. This **client-side** application serves as the user-facing interface for students, instructors, and admins to access, interact, and manage educational resources in an intelligent and engaging environment.

Developed using **Next.js**, styled with **Tailwind CSS** and enhanced with **Shadcn UI**, **Framer Motion**, and **Radix UI**, this frontend delivers a responsive, app-like experience. AI Scholar integrates advanced AI models (OpenAI, Gemini, HuggingFace) to provide **personalized course recommendations**, **automated quizzes**, and **interactive learning tools**.

---

## 🧭 Table of Contents

- [📚 Project Overview](#project-overview)
- [🎯 Purpose & Goals](#purpose--goals)
- [🚀 Live Site & Deployment](#live-site--deployment)
- [✨ Features](#features)
- [🧱 Tech Stack](#tech-stack)
- [🧩 Folder Structure](#folder-structure)
- [🔐 Authentication Guide](#authentication-guide)
- [🔧 Installation](#installation)
- [⚙️ Environment Variables](#environment-variables)
- [📡 API Endpoints Reference](#api-endpoints-reference)
- [🎨 Design Philosophy](#design-philosophy)
- [🧑‍💻 Contributors](#contributors)
- [🚧 Future Enhancements](#future-enhancements)
- [❓ FAQ](#faq)
- [🔑 Default Credentials](#default-credentials)
- [📄 License](#license)

---

## 🎯 Purpose & Goals

- 💡 Deliver a modern AI-powered learning platform.
- 🤖 Integrate intelligent learning features via AI APIs (OpenAI, Gemini, Hugging Face).
- 🧠 Empower personalized learning experiences and real-time analytics.
- 👩‍🏫 Provide robust course & user management for instructors/admins.
- 🎥 Offer video-based content consumption with engagement tracking.
- 💳 Integrate seamless payment flows for premium course access using Stripe.
- 🔒 Secure user authentication using OAuth and role-based access (NextAuth).

---

## 🚀 Live Site & Deployment

- **🔗 Live Demo:** [AI Scholar – Live Site](https://ai-scholar-xi.vercel.app/)
- **⚙️ Deployment:** Hosted on **Vercel**
- **🗂 Backend Repo:** [AI Scholar Server Repository](https://github.com/Sushanto171/ai-scholar-server.git)

---

## ✨ Features

> _Explore the intelligent and interactive feature set of **AI Scholar** — crafted to revolutionize digital learning._

---

### ➤ **AI-Powered Course Recommendations**

✔ Provides intelligent course suggestions tailored to each user  
✔ Learns from user interests, engagement, and progress history  
✔ Uses models like OpenAI, Gemini AI, and Hugging Face for personalization  
✔ Enhances learning outcomes with adaptive learning paths

---

### ➤ **Auto-generated Quizzes & Summaries**

✔ Automatically creates quizzes from uploaded content or lectures  
✔ Summarizes long texts or chapters using AI for quicker revision  
✔ Helps instructors save time creating assessments  
✔ Enhances retention with bite-sized review material

---

### ➤ **Video Player with Interactive Playback**

✔ Custom video player built using `react-player`  
✔ Supports interactive playback with bookmarks, notes, and analytics  
✔ Allows variable playback speed and transcript support  
✔ Tracks viewing progress and enables adaptive recommendations

---

### ➤ **Analytics Dashboard for Instructors/Admins**

✔ Real-time data visualization using Recharts  
✔ Displays student performance, course engagement, and completion rates  
✔ Helps instructors evaluate content effectiveness  
✔ Provides insights to admins for decision-making

---

### ➤ **Role-Based Access (Student, Instructor, Admin)**

✔ Role-specific dashboards and route access  
✔ Students can browse courses, track progress, and earn badges  
✔ Instructors manage content, student grading, and course insights  
✔ Admins handle user roles, reports, and system-level actions

---

### ➤ **Dark Mode & Smooth UI Transitions**

✔ Elegant toggle for light/dark theme  
✔ Built-in support for `next-themes` and `tailwindcss-animate`  
✔ Uses Framer Motion for smooth page and element transitions  
✔ Enhances user experience with aesthetic animations

---

### ➤ **Media Upload & Management with Cloudinary**

✔ Uploads and manages media via Cloudinary's secure API  
✔ Supports image, video, and bulk uploads  
✔ Automatically optimizes media for performance and size  
✔ Enables faster and more reliable content delivery

---

### ➤ **Secure OAuth & Credentials Login via NextAuth**

✔ Google and GitHub OAuth login support  
✔ Email/password-based credential login  
✔ Secure session management with JWT tokens  
✔ Role-based protection of sensitive routes

---

### ➤ **Real-time Data Synchronization with TanStack Query**

✔ Ensures real-time sync with the backend for all data  
✔ Caching, auto-refetching, and state management handled seamlessly  
✔ Reduces latency and provides instant UI feedback  
✔ Supports paginated, filtered, and dynamic data fetching

---

### ➤ **Interactive Chatbot Support (via AI APIs)**

✔ Built-in chatbot powered by OpenAI or Gemini AI  
✔ Offers 24/7 learning assistance for students  
✔ Answers content-specific queries instantly  
✔ Reduces instructor overhead while enhancing student support

---

### ➤ **Stripe Integration for Payments & Premium Courses**

✔ Secure payment gateway using Stripe  
✔ Supports one-time and subscription payments  
✔ Dynamic access control for premium course content  
✔ Transaction history and billing management support

---

## 🧱 Tech Stack

| Category      | Tools & Libraries                              |
| ------------- | ---------------------------------------------- |
| **Framework** | Next.js 15, React 19                           |
| **Styling**   | Tailwind CSS, Shadcn UI, DaisyUI               |
| **Auth**      | NextAuth (Google & GitHub OAuth, Credentials)  |
| **State/API** | TanStack Query (React Query), Axios            |
| **UI/UX**     | Framer Motion, AOS, Animate.css, Radix UI      |
| **AI Models** | Gemini AI, OpenAI, Hugging Face                |
| **Payments**  | Stripe                                         |
| **Database**  | MongoDB via Mongoose                           |
| **Media**     | Cloudinary                                     |
| **Charts**    | Recharts                                       |
| **Others**    | React Icons, Lucide, React Player, SweetAlert2 |

---

## 🧩 Folder Structure

```

ai-scholar-client/
├── public/ # Static assets (logos, icons, PDFs)
├── src/
│   ├── app/               # All Next.js App Router logic
│   ├── components/        # Reusable UI Components (e.g., Navbar, Footer, VideoPlayer)
│   ├── config/            # Project configurations
│   ├── context/           # Global context providers
│   ├── data/              # Static and mock data
│   ├── hooks/             # Custom React Hooks
│   ├── lib/               # Utility libraries (auth, db, analytics)
│   ├── middleware/        # Middleware for route protection
│   ├── services/          # API services using Axios
│   ├── utils/             # Utility functions & formatters
├── .env                   # Environment variables
├── .gitignore             # Ignored files for Git
├── components.json        # Project components JSON
├── eslint.config.mjs      # Eslint configurations
├── jsconfig.json          # Project's configuration JSON
├── next.config.mjs        # Next.js Configuration
├── package-lock.json      # Exact versions of installed dependencies
├── package.json           # Project metadata and dependencies
├── postcss.config.mjs     # Tailwind CSS Configuration
├── README.md              # Project documentation
└── vercel.json            # Vercel deployment configuration

```

---

## 🔐 Authentication Guide

### 🔗 Social Login

- **Google:** `doSocialLogin("google")`
- **GitHub:** `doSocialLogin("github")`

### 🧾 Credential Login

```js
doCredentialLogin({
  email: "test@example.com",
  password: "your_password",
});
```

### 📝 Registration

```json
POST /api/register
{
  "name": "User Name",
  "email": "user@example.com",
  "password": "password123",
  "role": "student" // or "instructor", "admin"
}
```

### 🚪 Sign Out

```js
doLogout();
```

---

## 🔧 Installation

### 📌 Prerequisites

- Node.js ≥ 18
- npm ≥ 9
- MongoDB
- Cloudinary account
- Vercel CLI (optional)

### 🛠 Setup

```bash
git clone https://github.com/SK-Jabed/ai-scholar-client.git
cd ai-scholar-client
npm install
npm run dev
```

---

## ⚙️ Environment Variables

```env
# OAuth
GOOGLE_CLIENT_ID=xxx
GOOGLE_CLIENT_SECRET=xxx

GITHUB_CLIENT_ID=xxx
GITHUB_CLIENT_SECRET=xxx

# Auth
NEXTAUTH_SECRET=xxx

# API
NEXT_PUBLIC_SERVER_URL=https://ai-scholar-server.vercel.app

# Database
DB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname

# Cloudinary
CLOUDINARY_CLOUD_NAME=xxx
CLOUDINARY_API_KEY=xxx
CLOUDINARY_API_SECRET=xxx
```

---

## 📡 API Endpoints Reference

| Endpoint                  | Method | Description               |
| ------------------------- | ------ | ------------------------- |
| `/courses/add-course`     | POST   | Create new course         |
| `/courses/get-courses`    | GET    | Fetch all courses         |
| `/courses/get-course/:id` | GET    | Get course by ID          |
| `/courses/update/:id`     | PUT    | Update course by ID       |
| `/courses/delete/:id`     | DELETE | Delete course             |
| `/courses/categories`     | GET    | Get all course categories |
| `/users`                  | POST   | Save user to DB           |
| `/users`                  | GET    | Fetch all users           |
| `/media/upload`           | POST   | Upload single media       |
| `/media/delete/:id`       | DELETE | Delete media              |
| `/media/bulk-upload`      | POST   | Upload multiple files     |

---

## 🎨 Design Philosophy

> “Simple is better than complex. Clean is better than cluttered.”

- 🌐 **App-like UX**: Seamless transitions, instant navigation.
- 📱 **Mobile First**: Fully responsive design.
- 🌙 **Dark Mode Support**: User preference respected.
- 💡 **Minimalistic yet Powerful**: Functional but non-distracting.
- 📊 **Data-Driven UI**: Live insights and feedback loops.

---

## 🧑‍💻 Contributors

> This project is proudly built by a passionate team of 6 developers:

| Name                 | Role                    |
| -------------------- | ----------------------- |
| **Rafi Ahmed**       | Web Developer & Leader  |
| **Sheikh Jabed**     | Full-Stack Developer    |
| **Imran Ahmed**      | MERN Stack Developer    |
| **Sushanto Sharkar** | AI & Analytics Engineer |
| **Abdur Rahman**     | Full-Stack Developer    |
| **Shoyon Kumar**     | Integration & API Dev   |

---

## 🚧 Future Enhancements

- 🧠 AI-powered tutor chatbot
- 📱 Native mobile apps (React Native)
- 🔔 In-app real-time notifications
- 🧪 Peer review system for assignments
- 🧾 Certification module & badges
- 🛠 Admin panel redesign with role hierarchy

---

## ❓ FAQ

**Q: Is this project open source?**  
A: Currently it's private but may open to the public in future.

**Q: Can I contribute to AI Scholar?**  
A: Please contact the project team directly. We welcome contributions.

**Q: What AI models are used?**  
A: OpenAI (GPT-4), Gemini AI, and experimental Hugging Face integrations.

**Q: Does it support mobile devices?**  
A: Yes! It's fully responsive and touch-optimized.

---

## 🔑 Default Credentials (for testing only)

```bash
Email: testuser@gmail.com
Password: 123456
Role: student
```

---

## 📄 License

This project is licensed under the **MIT License**. See [LICENSE](./LICENSE) for details.

---

> _"Empowering the future of education — one AI-driven course at a time."_ 🚀

---