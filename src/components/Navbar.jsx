import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { Link } from "react-router-dom";
import ProjectNav from "./ProjectNav";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to={"/"}>Larry Reaux</Link>
        </li>
      </ul>
      <ul>
        <li>
          <a href="https://github.com/ljreaux" target="_blank">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ljreaux/" target="_blank">
            <FaLinkedin />
          </a>
        </li>
        <li className="projects">
          <Link to={"/projects"}>
            <GrProjects />
          </Link>
          <ProjectNav />
        </li>
      </ul>
    </nav>
  );
}
