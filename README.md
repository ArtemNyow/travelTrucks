# 🚚 Travel Trucks / Camper Catalog

**Travel Trucks** is a modern, responsive **web application** for browsing, filtering, and booking **campers**.  
Users can easily search vehicles using multiple filters, view detailed specifications, **ratings**, **reviews**, and submit **booking requests**.

---

## ✨ Demo & Resources

**Live Demo (Production):**  
https://travel-trucks-six-psi.vercel.app

**GitHub Repository:**  
https://github.com/ArtemNyow/travelTrucks

---

## ⚡ Features

- **Camper Catalog:** Browse all available campers with images, prices, and specifications.
- **Advanced Filtering:**  
  Filter by **location**, **vehicle type**, and **amenities** (AC, kitchen, TV, bathroom, etc.).  
  _Filtering is implemented on the backend side._
- **Pagination:** “Load More” functionality for efficient data loading.
- **Camper Details Page:**  
  Full description, photo gallery, technical details, and user reviews.
- **Favorites:**  
  Add campers to Favorites and keep them saved even after page reload.
- **Booking Form:**  
  Validation with Formik + Yup and success notification after submission.
- **Responsive Design:**  
  Fully adaptive layout based on the original design mockups.

---

## 🛠 Tech Stack

- **Next.js 16.0.6 (App Router)**
- **React 19**, **TypeScript**
- **Zustand** — global state management (catalog, filters, favorites)
- **Axios** — HTTP client
- **Formik + Yup** — forms & validation
- **Responsive, pixel-perfect design** according to the Figma template

### 🌐 Backend API

Uses MockAPI:  
`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io`

---

## 🚀 Local Setup

### 1. Install Dependencies

npm install

---

### 2. Configure Environment Variables

Create .env.local in the project root:

# env

NEXT_PUBLIC_API_URL=http://localhost:3000
BACKEND_API_URL=https://66b1f8e71ca8ad33d4f5f63e.mockapi.io

### 3. Start Development Server

npm run dev

---

Project will be available at:
http://localhost:3000

### 👤 Author

This project was developed as a technical assignment for TravelTrucks (GoIT).

Artem Lykhatskyi
GitHub: https://github.com/ArtemNyow
