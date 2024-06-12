import meadTools from "../../assets/fb-cover.png";
import wordle from "../../assets/Screen Shot 2024-01-28 at 9.17.09 AM.png";
import culinary from "../../assets/culinary.png";
import QR from "../../assets/personalWebsite.png";

const meadToolsArr = [
  { name: "React", for: "All UI elements, functionality, and logic." },
  {
    name: "Tailwind CSS",
    for: "Used to quickly create a user-friendly and visually appealing UI/UX design.",
  },
  {
    name: "TypeScript",
    for: "Used for type-checking and static code analysis.",
  },
  {
    name: "EmailJS",
    for: "Used for contact email functionality.",
  },
  {
    name: "ReactPDF",
    for: "Used to create printer-friendly recipe PDFs.",
  },
  {
    name: "Express",
    for: "Used to create a REST API that allows for user accounts, save user recipes, and handle ingredient information.",
  },
  {
    name: "PostgreSQL",
    for: "Database for storing user and ingredient information.",
  },
  {
    name: "Hosting",
    for: "Netlify, Vercel, supabase",
  },
];
const zoomCloneArr = [
  {
    name: "Next.js",
    for: "Framework used for building the frontend of the application.",
  },
  {
    name: "TypeScript",
    for: "Used for type-checking and enhancing code quality.",
  },
  { name: "Clerk", for: "Handles authentication and user management." },
  {
    name: "getstream",
    for: "Integration for real-time chat and notifications.",
  },
  { name: "Tailwind CSS", for: "Utility-first CSS framework for styling." },
];
const culinaryArr = [
  { name: "React", for: "All UI elements, functionality, and logic." },
  {
    name: "CSS",
    for: "Used to quickly create a user-friendly and visually appealing UI/UX design.",
  },
  {
    name: "Express",
    for: "Used to create a REST API that allows for user accounts, comments, and reviews.",
  },
  {
    name: "PostgreSQL",
    for: "Database for storing user and recipe information.",
  },
  {
    name: "Hosting",
    for: "Netlify and Render",
  },
];

export const fullstackProjects = [
  {
    title: "MeadTools",
    description:
      "An all-in-one mead, wine, and cider recipe building calculator built using a PERN stack. I have been making mead for four years now and my biggest issue with developing recipes has always been the resources available to create them. MeadTools solves two major issues. It automatically calculates the volume added by ingredients like fruit and it consolidates all of the needed tools in one place. MeadTools has dozens of users and is under an MIT license on github.",
    imgUrl: meadTools,
    technologies: meadToolsArr,
    link: "https://meadtools.com",
  },
  {
    title: "Culinary Chronicle",
    description:
      "Culinary Chronicle is a PERN stack recipe review website. It allows users to register and sign in to an account, view, comment, and review recipes. This was the capstone project for Fullstack Academy Web Development Bootcamp. I primarily worked on building the API, styling, and various UI components.",
    imgUrl: culinary,
    technologies: culinaryArr,
    link: "https://culinary-chronicle.netlify.app/",
  },
  {
    title: "Zoom Clone",
    description:
      "A Zoom clone built following a detailed tutorial by JavaScript Mastery on YouTube. This project uses the latest Next.js and TypeScript to replicate Zoom's functionality. It allows users to securely log in, create and join meetings, and access features like recording, screen sharing, and participant management.",
    imgUrl:
      "https://raw.githubusercontent.com/ljreaux/js-mastery-zoom-clone/13d02dc157ef34a37a1b3ca395397c065991e82b/public/icons/yoom-logo.svg",
    technologies: zoomCloneArr,
    link: "https://js-mastery-zoom-clone.vercel.app/",
  },
];

const wordGameArr = [
  { name: "React", for: "All UI elements, functionality, and game logic." },
  {
    name: "CSS",
    for: "Used grid and flexbox to make a clean and visually appealing UI on both desktop and mobile devices.",
  },
];

const frontendMentorArr = [
  { name: "React", for: "All UI elements, functionality, and logic." },
  {
    name: "CSS",
    for: "Used grid and flexbox to make a clean and visually appealing UI on both desktop and mobile devices.",
  },
  {
    name: "TypeScript",
    for: "Used for logic of some of these projects.",
  },
];

export const frontendProjects = [
  {
    title: "Word Game",
    description:
      "A wordle clone. This project really stretched my CSS and problem solving skills. Beyond the regular game logic, this project presented the challenge of visually hiding an input element without disrupting functionality.",
    imgUrl: wordle,
    technologies: wordGameArr,
    link: "https://larryswordgame.netlify.app/",
  },
  {
    title: "Frontend Mentor Projects",
    description:
      "Frontend Mentor provides front-end challenges that include professional web designs.",
    imgUrl: "https://miro.medium.com/v2/resize:fit:1400/0*cfYEyKU7fH1Vz37c.png",
    technologies: frontendMentorArr,
    link: "https://www.frontendmentor.io/profile/ljreaux",
  },
];

const qrArr = [
  {
    name: "Node",
    for: "Used to create NPM package.",
  },
  {
    name: "Inquirer && Inquirer/select",
    for: "Used to gather user input.",
  },
  {
    name: "QR-Image",
    for: "Used to create a QR Code from a URL.",
  },
];

export const backendProjects = [
  {
    title: "QR Code Generator",
    description:
      "A simple CLI tool for creating a QR Code from a URL. NPM package that will create a QR Code in the current working directory.",
    imgUrl: QR,
    technologies: qrArr,
    link: "https://www.npmjs.com/package/@ljreaux/qr-code-generator",
  },
];

export const mobileProjects = [
  {
    title: "Aora",
    description:
      "A full stack React Native project based on a JS Mastery Tutorial. Allows users to create and view others AI generated videos.",
    imgUrl:
      "https://github.com/adrianhajdin/aora/blob/main/assets/images/cards.png?raw=true",
    technologies: [
      {
        name: "React Native",
        for: "All UI elements, functionality, and logic.",
      },
      {
        name: "NativeWind",
        for: "Used to make a clean and visually appealing UI.",
      },
      {
        name: "TypeScript",
        for: "Used for logic.",
      },
      {
        name: "Appwrite",
        for: "Used for Back end code.",
      },
    ],
    link: "https://github.com/ljreaux/JS-Mastery-RN-Aora/",
  },
];
