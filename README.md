# SaaS Landing Page + Dashboard (Frontend Assignment)

## Overview

This project is a SaaS Landing Page and Dashboard built using React and CSS Modules. It implements a pixel-accurate landing page based on the provided Figma design and a functional dashboard with authentication, API integration, and user management features.

The goal of this project is to demonstrate frontend development skills including UI implementation, component structuring, routing, state management, and API integration.

---

## Tech Stack

**Frontend Framework**

* React (Vite)

**Styling**

* CSS Modules
* Custom CSS (no UI frameworks used)

**Routing**

* React Router DOM

**API**

* JSONPlaceholder API
  https://jsonplaceholder.typicode.com/users

**State Management**

* React Hooks (useState, useEffect)

**Authentication**

* LocalStorage-based fake authentication

**Deployment**

* Vercel / Netlify (optional)

---

## Features

### Landing Page

* Pixel-accurate implementation of provided Figma design
* Fully responsive layout
* Gradient backgrounds and dashboard preview section
* Feature boxes and UI sections

### Authentication

* Login page
* Token stored in localStorage
* Protected routes
* Logout functionality

### Dashboard

* Dashboard summary
* Users list fetched from API
* Structured dashboard layout
* Loading and error handling

### Users Page

* Fetch users from API
* Display users in structured layout

### Settings Page

* Theme toggle support (light/dark)
* LocalStorage persistence

---

## Project Structure

```
src/
│
├── components/
│   ├── includes/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   └── dashboard/
│       └── DashboardPreview.jsx
│
├── pages/
│   ├── Homepage.jsx
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── Users.jsx
│   └── Settings.jsx
│
├── services/
│   └── api.js
│
├── App.jsx
└── main.jsx
```

---

## Installation Guide

Follow these steps to run the project locally.

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/saas-dashboard.git
```

### Step 2: Navigate into Project Folder

```bash
cd saas-dashboard
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Run the Development Server

```bash
npm run dev
```

### Step 5: Open in Browser

```
http://localhost:5173
```

---

## Authentication Flow

This project uses fake authentication.

### Login process

* User enters email and password
* Token is stored in localStorage
* User is redirected to dashboard

### Logout process

* Token is removed from localStorage
* User is redirected to login page

### Protected Routes

Routes like `/dashboard`, `/users`, `/settings` are protected and require login.

---

## API Integration

Users data is fetched from:

```
https://jsonplaceholder.typicode.com/users
```

Used in:

* Dashboard summary
* Users page

---

## Screenshots

### Landing Page

(Add screenshot here)

Description:
This shows the SaaS landing page built using the provided Figma design. It includes the hero section, gradient dashboard preview, and feature boxes.

---

### Login Page

(Add screenshot here)

Description:
This shows the login page. When valid input is entered, the user is authenticated using localStorage and redirected to the dashboard.

---

### Dashboard Page

(Add screenshot here)

Description:
This shows the dashboard summary and layout. It demonstrates protected routing and structured UI components.

---

### Users Page

(Add screenshot here)

Description:
This page fetches user data from the API and displays it in a structured layout.

---

### Settings Page

(Add screenshot here)

Description:
This page allows the user to change settings such as theme preferences.

---

## Design Implementation Notes

* Landing page matches the provided Figma layout
* No UI libraries were used
* Custom grid and layout implemented using CSS
* Focus on reusable components and clean structure

---

## Decisions and Tradeoffs

* Used localStorage for authentication for simplicity
* Used CSS instead of Tailwind to demonstrate core CSS skills
* Used JSONPlaceholder for mock API data

---

## Author

Venugopal Reddy

---

## How to Run Quickly

```bash
npm install
npm run dev
```

Open:

```
http://localhost:5173
```

---

## Demo Video
(https://drive.google.com/file/d/1175z0Uo7ksYm_gcZzbcEwjmSnEGz7qQQ/view?usp=sharing)
## Live link
(https://saas-app-demo-eight.vercel.app/)
