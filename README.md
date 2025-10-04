<img width="900" height="500" alt="Screenshot 2025-09-15 215939" src="https://github.com/user-attachments/assets/56e5c105-6cbc-4e17-b1fa-ef4d0883ba61" />

  <div align="center">
    <img alt="Static Badge" src="https://img.shields.io/badge/React-4c84f3?style=for-the-badge&logo=react&logoColor=white">
    <img src="https://img.shields.io/badge/-Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
    <img src="https://reactrouter.com/splash/v7-badge-1.svg" width="80"/>
  </div>

  <h3 align="center">DocTime</h3>


# 🏥 Doctor Booking App

A React-based doctor booking application that allows users to view doctors, read blogs, and book appointments.  
Built with **React Router v7**, **Data Loaders**, and **React Toastify** for smooth routing, async data handling, and notifications.

---

## 📌 Features

- 🏠 **Home Page** – Shows a list of available doctors (fetched from `doctor.json`).
- 👨‍⚕️ **Doctor Details Page** – View details for each doctor by registration number (`regNo`).
- 📖 **Blog Page** – Read blogs (loaded via a loader).
- 📅 **Booking Page** – Simple booking page for appointments.
- ❌ **Error Handling** – Custom error page for invalid routes or fetch errors.
- 🍞 **React Toastify** – Displays success/error notifications.

---

## 🛠️ Tech Stack

- [React](https://react.dev/) (with hooks & components)
- [React Router v7](https://reactrouter.com/) (`createBrowserRouter`, `loader`, `defer`, `Await`)
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction)
- [Vite](https://vitejs.dev/) (for fast development)
- JSON data source (`doctor.json`, `blogs.json`)

---

## 📸 screenshots

### Home Page

<img width="1899" height="957" alt="Screenshot 2025-10-04 215630" src="https://github.com/user-attachments/assets/587321f8-e97b-45fa-8333-b05cfecd3be5" />
<img width="1891" height="948" alt="image" src="https://github.com/user-attachments/assets/c8241b8b-79ee-4d96-8439-642555544fe7" />

### Doctor Details Page
<img width="1754" height="956" alt="image" src="https://github.com/user-attachments/assets/3b38364c-0e53-46ec-abca-ccf2f27033fe" />

### Booking Page
<img width="1854" height="932" alt="image" src="https://github.com/user-attachments/assets/e4d61f61-46a8-4026-ac11-2100fc8f30e6" />

### Blogs Page
<img width="1790" height="866" alt="image" src="https://github.com/user-attachments/assets/83036598-296e-4542-8c87-1b5c0d388ce4" />


## 📂 Project Structure

```
📦 doctime
├── 📂 src
│ ├── 📂 components
│ │ ├── Root/Root.jsx
│ │ ├── Home/Home.jsx
│ │ ├── DoctorDetails/DoctorDetails.jsx
│ │ ├── Booking/Booking.jsx
│ │ ├── Blog/Blog.jsx
│ │ └── Error/Error.jsx
│ ├── 📂 utilis
│ │ └── loadData.js # contains loaders (doctorLoader, blogData, etc.)
│ ├── App.jsx # main router configuration
│ └── main.jsx # React entry point
├── public
│ ├── doctor.json # doctor data
│ └── blogs.json # blogs data
├── package.json
└── README.md

```

## ⚙️ Installation & Setup

1. Clone the repository
   ```bash
   git clone https://github.com/FahadAlHossain/doctime.git
   cd doctime
   ```
2.Install Depenedencies 
```bash
npm install
```
3.Run the project
```bash
npm run dev
```
