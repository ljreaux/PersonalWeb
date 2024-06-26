import { NavLink } from "react-router-dom";

export default function ProjectToggle() {
  return (
    <nav className="navbar project-section">
      <ul>
        <li>
          <NavLink to={"/projects/fullstack"}>Fullstack</NavLink>
        </li>
        <li>
          <NavLink to={"/projects/frontend"}>Frontend</NavLink>
        </li>
        <li>
          <NavLink to={"/projects/backend"}>Backend</NavLink>
        </li>
        <li>
          <NavLink to={"/projects/mobile"}>Mobile</NavLink>
        </li>
      </ul>
    </nav>
  );
}
