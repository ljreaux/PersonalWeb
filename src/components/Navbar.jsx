import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";
import ProjectNav from "./ProjectNav";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to={"/"}>Larry Reaux</Link>
        </li>
      </ul>
      <ul>
        <li>
          <a href="https://github.com/ljreaux" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ljreaux/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <div
          className={`projects ${pathname.includes("/projects") && "hidden"}`}
        >
          <Link to={"/projects/fullstack"}>
            <GrProjects />
          </Link>
          <ProjectNav />
        </div>
      </ul>
    </nav>
  );
}
