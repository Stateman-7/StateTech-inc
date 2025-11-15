# StateTech Inc.

## Live Demo
[https://state-tech-inc.vercel.app](https://state-tech-inc.vercel.app)

## Project Overview
StateTech Inc. is a modern web application providing a secure, user-friendly dashboard for company management, including authentication, analytics, and real-time insights. The app focuses on a clean, interactive UI with responsive design, ensuring seamless access on both desktop and mobile devices.

---

## Brand Identity

### Color System
- **Primary:** `#0e3a66` (Deep Blue) – Main brand color for headers, buttons, and highlights.  
- **Secondary:** `#22d3ee` (Sky Blue) – Used for accent elements and interactive feedback.  
- **Background:** `#0c253f` (Dark Blue) – Background color for dashboard and main pages.  
- **Text:** `#ffffff` (White) – Primary text color for readability on dark backgrounds.

### Typography
- **Headings:** Inter, Bold – Clean and modern, ideal for titles and headers.  
- **Body:** Inter, Regular – Ensures readability across all pages and forms.

---

## Design Decisions

### Layout Adherence
- Consistent spacing using Tailwind CSS utility classes.  
- Responsive design tested on mobile, tablet, and desktop breakpoints.  
- Grid and flex layouts used for alignment and adaptive content flow.

### Creative Departures
- Floating watermark tiles for background branding without cluttering content.  
- Semi-transparent forms with backdrop blur for visual depth and focus.  
- Minimalist dashboard focused on clarity of information and usability.

---

## Component Architecture
- Modular components for forms, buttons, cards, and animations.  
- Pages: **Dashboard**, **Login**, and **Signup** manage state independently.  
- Floating tile animation is encapsulated for reusability across multiple pages.

---

## Performance Optimizations
- Lazy loading of images and assets to improve load time.  
- Optimized React state management to minimize re-renders.  
- Tailwind CSS JIT compilation for lightweight and optimized CSS output.

---

## Image Credits
- Logo and background tiles: Created internally.  
- Any placeholder images: Public domain and free stock resources (unsplash,pexels).

---

## Installation & Setup

1. Clone the repository
```bash  
git clone https://github.com/Stateman-7/StateTech-inc
```
2. install dependancies
```  
npm install
```
3. Create a .env file with the following:
```
PORT=5000
MONGO_URI=[your MongoDB URI]
SECRET_KEY=[your JWT secret]
CORS_ORIGIN=https://state-tech-inc.vercel.app
```
4.Start both backend and frontend servers
```
npm run start
npm run dev
```
---
## Design Decisions

- React 18+ – Frontend UI library
- Tailwind CSS 3+ – Utility-first styling
- Express.js – Backend API server
- MongoDB with Mongoose – Database and ORM
- JWT – Authentication
- Bcrypt – Password hashing

---

## Challenges & Solutions

 - CORS issues on deployment – Resolved by whitelisting frontend URL and handling preflight requests correctly.
 - Responsive background animation – Implemented floating tile animation using percentage-based positions to adapt across screens.
 - Secure authentication – Implemented bcrypt password hashing and JWT-based token authentication.

---
##Future Improvements

  - Add user roles and permissions to enhance dashboard functionality.
  - Implement real-time analytics with WebSockets.
  - Optimize offline access with service workers and caching.
  - Include more interactive dashboard widgets and charts.
  - Add multi-language support for broader accessibility.

  
  
  
  

