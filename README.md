# 🛍️ Full-Stack E-Commerce Website

An end-to-end online shopping platform with authentication, cart functionality, payment integration, and order tracking — built using the **MERN stack**.

---

## 📖 Overview

This web application allows users to:
- Create an account and log in securely
- Browse products by category
- Add products to their cart
- Make secure online payments
- Track their orders in real-time

It includes both **customer** and **admin** features for a complete e-commerce experience.

---

## 🛠️ Tech Stack

**Frontend:** React.js, Redux Toolkit, Tailwind CSS  
**Backend:** Node.js, Express.js  
**Database:** MongoDB, Mongoose  
**Authentication:** JWT (JSON Web Tokens), bcrypt  
**Payments:** Stripe API *(or Razorpay API — replace as per your project)*  
**Hosting:** Render (Backend), Vercel/Netlify (Frontend)

---

## ✨ Features

- 🔐 **User Authentication** — Sign up, Login, Logout
- 🛒 **Cart Management** — Add, update, and remove products
- 💳 **Payment Gateway Integration** — Secure transactions
- 📦 **Order Tracking** — Track status of orders in real-time
- 📱 **Responsive Design** — Works on mobile, tablet, and desktop
- 🗄️ **Admin Panel** — Manage products & orders

---

## 🚀 Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name ```bash
# Backend dependencies
cd backend
npm install

# Frontend dependencies
cd ../frontend
npm install
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
VITE_BACKEND_URL=http://localhost:5000
# Start backend
cd backend
npm run dev

# Start frontend
cd ../frontend
npm run dev
Demo
🔗 Live Site: https://e-commerce-web-frontend-rdej.onrender.com



