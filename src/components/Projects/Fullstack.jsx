import React from "react";
import ProjectCard from "./ProjectCard";
import meadTools from "../../assets/fb-cover.png";

export default function Fullstack() {
  const wordGameArr = [
    { name: "React", for: "All UI elements, functionality, and logic" },
    {
      name: "Tailwind CSS",
      for: "Used to quickly create a user-friendly and visually appealing UI/UX design",
    },
    {
      name: "EmailJS",
      for: "Used for contact email functionality",
    },
    {
      name: "ReactToPrint",
      for: "Used to create printer-friendly recipe PDFs",
    },
    {
      name: "Express",
      for: "Used to create a REST API that allows for user accounts, save user recipes, and handle ingredient information",
    },
    {
      name: "PostgreSQL",
      for: "Database for storing user and ingredient information",
    },
    {
      name: "Hosting",
      for: "Netlify and AWS",
    },
  ];
  return (
    <div className="project-div">
      <ProjectCard
        title={"MeadTools"}
        description={
          "An all-in-one mead, wine, and cider recipe building calculator built using a PERN stack. I have been making mead for four years now and my biggest issue with developing recipes has always been the resources available to create them. MeadTools solves two major issues. It automatically calculates the volume added by ingredients like fruit and it consolidates all of the needed tools in one place. MeadTools has dozens of users and is under an MIT license on github."
        }
        imgUrl={meadTools}
        technologies={wordGameArr}
        link={"https://meadtools.com"}
      />
    </div>
  );
}
