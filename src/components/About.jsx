import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiTailwindcss,
  SiTypescript,
  SiCsharp,
  SiDotnet,
} from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";
import fullstack from "../assets/Fullstack_Academy_2021.jpeg";

export default function About() {
  return (
    <div className="about">
      <div className="about-content">
        <span>
          <h3>About Me</h3>
          <p>
            I am a full-stack web developer with a passion for learning and
            creating. I have experience with both front-end and back-end web
            development. I am always looking for new and exciting projects to
            work on. I just finished my certificate in full-stack web
            development from Fullstack Academy.
          </p>
          <img
            src={fullstack}
            alt="fullstack academy logo"
            className="fullstack-logo"
          />
        </span>
        <span>
          <h3>Previous Employment</h3>
          <p>
            I am transitioning from a career as a music teacher to a career as a
            web developer. In my role as a Music Teacher at the Vicksburg Warren
            School District, I developed and honed a diverse set of soft skills
            that are directly applicable to web development. These include
            effective communication, adaptability, creative problem-solving,
            collaboration, and time management. Through conveying complex
            musical concepts, tailoring teaching methods to individual student
            needs, organizing events collaboratively, and managing multiple
            tasks efficiently, I have cultivated a strong foundation for success
            in my transition to web development.
          </p>
        </span>
        <span>
          <h3>Known Technologies</h3>
          <span className="logos">
            <FaHtml5 />
            <FaCss3Alt />
            <SiTailwindcss />
            <IoLogoJavascript />
            <SiTypescript />
            <FaReact />
            <IoLogoNodejs />
            <BiLogoPostgresql />
            <FaGitAlt />
            <FaSquareGithub />
          </span>
          <span className="logos-small">
            <TbBrandReactNative />
            <SiCsharp />
            <SiDotnet />
          </span>
          <p>
            I am familiar with HTML, CSS, Tailwind, Javascript, Typescript,
            React, Node.js, Express, and PostgreSQL, git, and Github. I have
            minimal experience with React Native, C#, and the .NET framework.
          </p>
        </span>
      </div>
    </div>
  );
}
