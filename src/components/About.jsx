import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiPostgresql } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { BiLogoPostgresql } from "react-icons/bi";
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
            I am transitioning from a carrier as a music teacher to a career as
            a web developer.
          </p>
        </span>
        <span>
          <h3>Known Technologies</h3>
          <span className="logos">
            <FaHtml5 />
            <FaCss3Alt />
            <SiTailwindcss />
            <IoLogoJavascript />
            <FaReact />
            <IoLogoNodejs />
            <BiLogoPostgresql />
          </span>
          <p>
            I am familiar with HTML, CSS, Tailwind, Javascript, React, Node.js,
            Express, and PostgreSQL. I also have experience with Git and GitHub.
            I have minimal experience with Jquery and Bootstrap.
          </p>
        </span>
      </div>
    </div>
  );
}
