// src/components/projectsData.js
// Unified projects array with categories for filter bar and techList for badge pills.

export const projects = [
  {
    title: "BizConnect – Business Marketplace Platform",
    categoryLabel: "Full Stack",
    categories: ["java", "react"],
    description:
      "A full-stack web application that connects businesses and vendors through a role-based platform. Supports vendor management, verification, and business interactions with a responsive interface.",
    features: [
      "Role-based user and admin management",
      "Vendor registration and verification",
      "Business marketplace and user comments",
      "REST API integration with MySQL",
      "Live deployment with frontend and backend integration",
    ],
    tech: "Java, Spring Boot, React, MySQL, REST APIs",
    techList: ["Java", "Spring Boot", "React", "MySQL", "REST APIs"],
    github: "https://github.com/MonikaVarshini2004/BizConnect",
    live: "https://biz-connect-nine.vercel.app",
    isPrivate: false,
  },
  {
    title: "Trust-Based Orphanage Aid and Welfare System",
    categoryLabel: "Social Impact",
    categories: ["java", "mobile"],
    description:
      "A transparent, government-supervised welfare platform connecting donors, orphanages, and verified vendors to ensure accountable donation management and efficient resource distribution.",
    features: [
      "Role-based auth for donors, orphanages, government, and vendors",
      "Orphanage registration, document uploads, and welfare requests",
      "Government verification and approval workflows",
      "Centralized wallet with controlled fund allocation",
      "Vendor payment links and transaction tracking for transparency",
      "Real-time request status updates and transaction records",
    ],
    tech: "Flutter, Dart, Java, Firebase, REST APIs",
    techList: ["Flutter", "Dart", "Java", "Firebase", "REST APIs"],
    github: "https://github.com/MonikaVarshini2004/Orphanage",
    live: null,
    isPrivate: false,
  },
  {
    title: "Track & Crack Your Habit – Habit Tracker",
    categoryLabel: "Web App",
    categories: ["web"],
    description:
      "A lightweight single-page web app to add, track, and manage habits. Supports dark/light mode, dynamic habit cards, and in-browser tracking with no backend required.",
    features: [
      "Add, edit, delete, and track habits",
      "Dark/Light mode with contrasting gradients",
      "Dynamic habit cards with real-time status updates",
    ],
    tech: "HTML, TailwindCSS, JavaScript",
    techList: ["HTML", "TailwindCSS", "JavaScript"],
    github: "https://github.com/MonikaVarshini2004/habitbloom-habit-tracker",
    live: "https://monikavarshini2004.github.io/habitbloom-habit-tracker/",
    isPrivate: false,
  },
  {
    title: "Friendship & Birthday Web Experience",
    categoryLabel: "Web App",
    categories: ["web"],
    description:
      "An interactive multi-page friendship and birthday website featuring galleries, heartfelt messages, music, videos, puzzles, secret messages, surprise activities, and animated birthday celebrations.",
    features: [
      "Multi-page interactive birthday and friendship experience",
      "Friendship gallery with images and visual effects",
      "Birthday letters, quotes, and special messages",
      "Music and video integration",
      "Interactive puzzles, scratch card, and keyword-based lock",
      "Random surprise wheel and animated magical ending",
    ],
    tech: "HTML5, CSS3, JavaScript",
    techList: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/MonikaVarshini2004/friendship-birthday-website",
    live: "https://friendship-makes-happy.netlify.app/",
    isPrivate: false,
  },
  {
    title: "MysteryBox – Interactive Party Game",
    categoryLabel: "React App",
    categories: ["react"],
    description:
      "An interactive party game that randomly assigns secret names and fun challenges to players. Features mystery gift-box reveals, multiple game modes, animated UI, and a responsive gaming experience.",
    features: [
      "Random name assignments and mystery gift-box reveals",
      "Multiple game modes with customizable challenges",
      "Interactive animations, scoring, and leaderboard",
      "Challenge timer and game progress tracking",
      "Responsive UI with persistent game progress",
    ],
    tech: "React, Vite, JavaScript, CSS, LocalStorage",
    techList: ["React", "Vite", "JavaScript", "CSS"],
    github: "https://github.com/MonikaVarshini2004/mysterybox-party-game",
    live: "https://mysterybox-party-game.vercel.app/",
    isPrivate: false,
  },
  {
    title: "Placement Management Portal",
    categoryLabel: "Full Stack",
    categories: ["web"],
    description:
      "A full-stack web application to streamline campus placement activities. Supports student and company onboarding, interview scheduling, and tracking of application status.",
    features: [
      "Student & company onboarding with profile management",
      "Application status tracking and interview scheduling",
      "CSV export for placement reports",
    ],
    tech: "Node.js, Express.js, MongoDB, EJS, Bootstrap",
    techList: ["Node.js", "Express.js", "MongoDB", "EJS"],
    github: null,
    live: null,
    isPrivate: true,
  },
];

// Legacy named exports kept for any existing imports
export const initialProjects = projects.slice(0, 4);
export const moreProjects    = projects.slice(4);
