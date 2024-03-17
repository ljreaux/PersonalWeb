import meadTools from "../../assets/fb-cover.png";
import wordle from "../../assets/Screen Shot 2024-01-28 at 9.17.09 AM.png";
import culinary from "../../assets/culinary.png";
const meadToolsArr = [
  { name: "React", for: "All UI elements, functionality, and logic." },
  {
    name: "Tailwind CSS",
    for: "Used to quickly create a user-friendly and visually appealing UI/UX design.",
  },
  {
    name: "EmailJS",
    for: "Used for contact email functionality.",
  },
  {
    name: "ReactToPrint",
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
    for: "Netlify and AWS",
  },
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

export const backendProjects = [];
