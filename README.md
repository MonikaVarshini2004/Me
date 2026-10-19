# Monika Varshini S — Developer Portfolio

A modern, responsive, full-stack personal portfolio showcasing software engineering projects, technical skills, academic background, and professional experience. Built with a React 19 and Tailwind CSS frontend powered by Vite, and a Node.js/Express backend service for handling contact form inquiries via Nodemailer.

---

## Table of Contents

- [Overview & Features](#overview--features)
- [Tech Stack](#tech-stack)
- [Project Directory Structure](#project-directory-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Environment Configuration](#environment-configuration)
- [Gmail App Password & Email Setup](#gmail-app-password--email-setup)
- [Backend API Reference](#backend-api-reference)
- [Frontend–Backend Communication](#frontendbackend-communication)
- [Available Scripts](#available-scripts)
- [Production Build](#production-build)
- [Deployment Guidance](#deployment-guidance)
- [Troubleshooting](#troubleshooting)
- [Security Notice](#security-notice)

---

## Overview & Features

- **Hero Section:** Interactive introduction with animated typewriter effect, call-to-action buttons, and social links (GitHub, LinkedIn, Email).
- **About Me:** Professional background summary, education details, core focus areas, and key statistics.
- **Skills Showcase:** Categorized technical skill matrix with branded visual badges (Frontend, Backend, Database, Programming Languages, Tools).
- **Featured Projects:** Project gallery showcasing full-stack and mobile applications (e.g., BizConnect, Orphanage Aid & Welfare System, Habit Tracker, MysteryBox, Placement Management Portal) with live demo and GitHub repository links.
- **Experience & Education Timeline:** Structured chronological history of academic achievements and technical roles.
- **Interactive Contact Form:** Validated form with asynchronous email delivery powered by Express and Nodemailer.
- **Dual-Theme Engine:** Custom Dark Mode and Light Mode theme switcher with persistent design tokens and subtle glassmorphic styling.
- **Responsive Navigation & UX:** Mobile drawer menu, smooth scrolling navigation anchors, and a floating Back-to-Top button.

---

## Tech Stack

### Frontend
- **Framework:** React 19 (`react`, `react-dom`)
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 4 (`tailwindcss`, `@tailwindcss/vite`)
- **Animations:** Framer Motion (`framer-motion`)
- **HTTP Client:** Axios (`axios`)
- **Icons & Effects:** React Icons (`react-icons`), React Simple Typewriter (`react-simple-typewriter`)
- **Linting:** ESLint 9

### Backend
- **Runtime:** Node.js (ES Modules, `"type": "module"` / ESM imports)
- **Framework:** Express 5 (`express`)
- **Email Service:** Nodemailer (`nodemailer`)
- **CORS Management:** CORS (`cors`)
- **Environment Management:** Dotenv (`dotenv`)

---

## Project Directory Structure

```text
Me -main/
├── .gitignore                  # Root Git ignore rules (node_modules, build, secrets, logs)
├── README.md                   # Canonical project documentation
├── resume_text.txt             # Text copy of resume profile
├── backend/
│   ├── .env                    # Local environment variables (DO NOT COMMIT)
│   ├── .env.example            # Sanitized environment template
│   ├── package.json            # Backend package manifest and dependencies
│   ├── package-lock.json       # Backend locked dependency tree
│   ├── server.js               # Express application entry point and CORS configuration
│   └── routes/
│       └── contact.js          # POST /api/contact handler with Nodemailer
└── frontend/
    ├── .gitignore              # Frontend-specific ignore rules
    ├── eslint.config.js        # ESLint flat config
    ├── index.html              # HTML entry point with meta tags and font links
    ├── package.json            # Frontend package manifest and dependencies
    ├── package-lock.json       # Frontend locked dependency tree
    ├── vite.config.js          # Vite configuration with React & Tailwind plugins
    ├── public/                 # Static assets (favicons, SVG logos)
    └── src/
        ├── App.css             # Base application styles
        ├── App.jsx             # Root React component assembling all sections
        ├── index.css           # Global Tailwind CSS and utility classes
        ├── main.jsx            # React DOM mounting entry point
        ├── assets/             # Images, project logos, resume PDF, profile photo
        └── components/
            ├── About.jsx       # About section
            ├── BackToTop.jsx   # Floating back-to-top scroll trigger
            ├── Contact.jsx     # Contact form with Axios submission
            ├── Education.jsx   # Education timeline
            ├── Experience.jsx  # Experience history
            ├── Footer.jsx      # Footer with quick links
            ├── Hero.jsx        # Landing hero banner with typewriter text
            ├── Navbar.jsx      # Navigation bar with mobile hamburger menu
            ├── Projects.jsx    # Projects display grid
            ├── projectsData.js # Project data definitions
            ├── Skills.jsx      # Skills badges and categories
            └── Theme.jsx       # Theme context and toggle logic
```

---

## Prerequisites

- **Node.js:** v18.0.0 or higher (v20+ recommended)
- **npm:** v9.0.0 or higher
- **Git:** Installed and configured

Verify versions in your terminal:
```bash
node -v
npm -v
git --version
```

---

## Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/MonikaVarshini2004/Me.git
cd Me
```

### 2. Install Backend Dependencies
```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

---

## Environment Configuration

The backend requires environment variables to run and to deliver contact form emails.

1. Navigate to the `backend/` directory:
   ```bash
   cd backend
   ```
2. Copy the example environment file to create your local `.env`:
   ```bash
   cp .env.example .env
   # On Windows PowerShell:
   Copy-Item .env.example .env
   ```
3. Open `backend/.env` in your editor and provide your values:

| Variable | Description | Example / Default |
| :--- | :--- | :--- |
| `PORT` | Port on which the Express server listens | `5000` |
| `NODE_ENV` | Environment mode (`development` or `production`) | `development` |
| `CLIENT_URL` | Allowed frontend origin for CORS | `http://localhost:5173` |
| `EMAIL_USER` | Google Account email address sending the notification | `your_email@gmail.com` |
| `EMAIL_PASS` | 16-character Google App Password | `abcd efgh ijkl mnop` |
| `TO_EMAIL` | Destination inbox where contact emails are delivered | `your_inbox@gmail.com` |

> [!WARNING]
> Never commit `backend/.env` to Git. Keep your real credentials exclusively in your local `.env` or in your hosting provider's secure environment settings.

---

## Gmail App Password & Email Setup

Standard Gmail account passwords cannot be used directly with Nodemailer due to Google security policies. You must generate an **App Password**:

1. Go to your **[Google Account](https://myaccount.google.com/)**.
2. Select **Security** from the left navigation.
3. Under *How you sign in to Google*, ensure **2-Step Verification** is turned ON.
4. Search for or navigate to **App passwords** (or go to `https://myaccount.google.com/apppasswords`).
5. Enter an app name (e.g., `Portfolio Backend`) and click **Create**.
6. Google will display a 16-character password (e.g., `xxxx xxxx xxxx xxxx`).
7. Copy this 16-character code into `backend/.env` as `EMAIL_PASS` (remove spaces or keep them contiguous).

---

## Backend API Reference

The backend exposes a single REST endpoint for contact inquiries:

### `POST /api/contact`

**Headers:**
```http
Content-Type: application/json
```

**Request Body Schema:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+1 234 567 8900",
  "subject": "Collaboration Inquiry",
  "message": "Hello, I would like to discuss a project opportunity."
}
```

- `name` *(string, required)* — Name of the sender.
- `email` *(string, required)* — Sender email address.
- `message` *(string, required)* — Message content.
- `phone` *(string, optional)* — Sender phone number.
- `subject` *(string, optional)* — Message subject (defaults to `"New Message"`).

**Responses:**
- `200 OK`:
  ```json
  { "message": "Email sent successfully!" }
  ```
- `400 Bad Request`:
  ```json
  { "error": "Name, email, and message are required" }
  ```
- `500 Internal Server Error`:
  ```json
  { "error": "Failed to send email" }
  ```

---

## Frontend–Backend Communication

The contact form in `frontend/src/components/Contact.jsx` uses Axios to post form entries to the backend:

```javascript
await axios.post("http://localhost:5000/api/contact", form);
```

### Local Development vs. Production Endpoint
- **Local Testing:** Keep the endpoint as `http://localhost:5000/api/contact` while running the local backend on port 5000.
- **Production Deployment:** Update the URL to your deployed backend service (e.g., `https://me-back.onrender.com/api/contact`).
- **CORS Handling:** The backend in `backend/server.js` validates origins against:
  - `https://me-frontend-fn9q.onrender.com`
  - `http://localhost:5173`
  - `http://localhost:3000`
  - `http://127.0.0.1:5173`
  - Value of `process.env.CLIENT_URL`
  - In non-production environments (`NODE_ENV !== "production"`), requests from any origin are permitted.

---

## Available Scripts

### Backend (`cd backend`)

| Command | Action |
| :--- | :--- |
| `npm start` | Starts the Express server using `node server.js` |
| `node server.js` | Direct execution of the backend entry file |

### Frontend (`cd frontend`)

| Command | Action |
| :--- | :--- |
| `npm run dev` | Launches the local Vite development server with HMR |
| `npm run build` | Compiles and bundles production static files into `frontend/dist/` |
| `npm run lint` | Runs ESLint 9 across project JavaScript/JSX files |
| `npm run preview` | Locally serves the production build output for verification |

---

## Production Build

To test or generate a production build of the frontend:

```bash
cd frontend
npm run build
```

This compiles optimized HTML, CSS, and JS bundles into `frontend/dist/`. You can preview the production bundle locally with:

```bash
npm run preview
```

---

## Deployment Guidance

### Frontend (Render / Vercel / Netlify)
The portfolio frontend is configured for deployment on Render (currently targeted at `https://me-frontend-fn9q.onrender.com`):
1. **Build Command:** `npm run build` (within the `frontend` directory)
2. **Publish / Output Directory:** `dist` (or `frontend/dist` depending on root directory setting)
3. **Environment Settings:** If configuring an API base URL dynamically, define an environment variable such as `VITE_API_URL`.

### Backend (Render / Railway / VPS)
The backend service can be deployed as a Web Service on Render (targeted at `https://me-back.onrender.com`):
1. **Root Directory:** `backend`
2. **Build Command:** `npm install`
3. **Start Command:** `node server.js`
4. **Environment Variables Required on Host:**
   - `PORT`: Assigned automatically by hosting platform or set to `5000`
   - `NODE_ENV`: `production`
   - `CLIENT_URL`: `https://me-frontend-fn9q.onrender.com`
   - `EMAIL_USER`: Your Gmail address
   - `EMAIL_PASS`: Your 16-character Google App Password
   - `TO_EMAIL`: Your personal inbox address

---

## Troubleshooting

### 1. CORS Errors (`CORS blocked by origin`)
- **Symptom:** Browser console reports blocked cross-origin request when submitting the contact form.
- **Resolution:** Verify that `CLIENT_URL` in `backend/.env` matches your frontend origin (e.g., `http://localhost:5173` for local Vite, or your production URL). In development mode (`NODE_ENV=development`), CORS restriction is relaxed.

### 2. Contact Form Connection Failed (`ERR_CONNECTION_REFUSED`)
- **Symptom:** Contact form displays an error alert immediately upon submit.
- **Resolution:** Verify that the backend server is running (`cd backend && npm start`) and listening on port `5000`. If testing locally, ensure `frontend/src/components/Contact.jsx` targets `http://localhost:5000/api/contact`.

### 3. Nodemailer Authentication Failure (`EAUTH / 535-5.7.8 Username and Password not accepted`)
- **Symptom:** Backend logs show `535-5.7.8` authentication error when sending email.
- **Resolution:**
  - Do NOT use your regular Google account password.
  - Make sure 2-Step Verification is active on your Google Account.
  - Generate a fresh 16-character App Password at `myaccount.google.com/apppasswords`.
  - Check for unintended spaces or special characters in `EMAIL_PASS`.

---

## Security Notice

- Sensitive credentials (`.env`, passwords, app tokens) must never be committed to Git.
- If an email app password was previously included in earlier Git commits, **revoke and regenerate the Google App Password immediately** from your Google Account settings to eliminate any unauthorized exposure risks.
