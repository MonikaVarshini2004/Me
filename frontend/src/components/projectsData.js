// src/components/projectsData.js

export const initialProjects = [
  {
  title: "BizConnect – Business Marketplace Platform",
  description:
    "A full-stack web application that connects businesses and vendors through a role-based platform. It supports vendor management, verification, and business interactions with a responsive interface.",
  features: [
    "Role-based user and admin management",
    "Vendor registration and verification",
    "Business marketplace and user comments",
    "REST API integration with MySQL",
    "Live deployment with frontend and backend integration",
  ],
  tech: "Java, Spring Boot, React, MySQL, REST APIs",
  github: "https://github.com/MonikaVarshini2004/BizConnect",
  live: "https://biz-connect-nine.vercel.app",
},

{
  title: "Trust-Based Orphanage Aid and Welfare System",
  description:
    "A transparent, government-supervised welfare platform connecting donors, orphanages, and verified vendors to ensure accountable donation management and the efficient distribution of essential resources for orphaned children.",
  features: [
    "Role-based authentication for donors, orphanages, government authorities, and vendors",
    "Orphanage registration, document uploads, and welfare request management",
    "Government verification and approval of orphanages, vendors, and funding requests",
    "Centralized government wallet with controlled fund allocation",
    "Vendor payment links and transaction tracking for transparency",
    "Real-time request status updates and transaction records",
  ],
  tech: "Flutter, Dart, Java, Firebase, REST APIs",
  github: "https://github.com/MonikaVarshini2004/Orphanage",
},
{
    title: "Track & Crack Your Habit – Simple Habit Tracker",
    description:
      "A lightweight, single-page web app to add, track, and manage habits. Supports dark/light mode, dynamic habit cards, and in-browser tracking without a backend.",
    features: [
      "Add, edit, delete, and track habits",
      "Dark/Light mode with contrasting gradients",
      "Dynamic habit cards with status updates",
    ],
    tech: "HTML, TailwindCSS, JavaScript (Vanilla JS, no backend required)",

    github: "https://github.com/MonikaVarshini2004/habitbloom-habit-tracker",
    live: "https://monikavarshini2004.github.io/habitbloom-habit-tracker/",
  },
  {
  title: "Friendship & Birthday Web Experience",
  description:
    "An interactive, multi-page friendship and birthday website featuring friendship galleries, heartfelt messages, music, videos, puzzles, secret messages, surprise activities, and animated birthday celebrations.",
  features: [
    "Multi-page interactive birthday and friendship experience",
    "Friendship gallery with images and visual effects",
    "Birthday letters, quotes, and special messages",
    "Music and video integration",
    "Interactive challenges, puzzles, and scratch card",
    "Keyword-based lock sequence and secret message",
    "Random surprise wheel and animated magical ending",
    "Birthday-themed animations and celebration effects",
  ],
  tech: "HTML5, CSS3, JavaScript",

  github: "https://github.com/MonikaVarshini2004/friendship-birthday-website",
  live: "https://friendship-makes-happy.netlify.app/",
},
 
];

export const moreProjects = [
 {
    title: "MysteryBox – Interactive Party Game",
    description:
    "Developed an interactive party game that randomly assigns secret names and fun challenges to players. Features mystery gift-box reveals, multiple game modes, animated UI, and an engaging, responsive gaming experience.",
    features: [
    "Random name assignments and mystery gift-box reveals",
    "Multiple game modes with customizable challenges",
    "Interactive animations, scoring, and leaderboard",
    "Challenge timer and game progress tracking",
    "Responsive UI with persistent game progress"
    ],
    tech: "React, Vite, JavaScript, CSS, LocalStorage",
    github: "https://github.com/MonikaVarshini2004/mysterybox-party-game",
    live: "https://mysterybox-party-game.vercel.app/",
  },
  {
    title: "Placement Management Portal",
    description:
      "A full-stack web application to streamline campus placement activities. It supports student and company onboarding, interview scheduling, and tracking of application status.",
    features: [
      "Student & company onboarding",
      "Application status tracking",
      "CSV export for placement reports",
    ],
    tech: "Node.js, Express.js, MongoDB, EJS, Bootstrap",
    github: "#",
    live: "#",
  },
];
