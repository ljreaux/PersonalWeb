import { Link } from "react-router-dom";

export default function ProjectNav() {
  return (
    <div className="project-nav">
      <Link to={"/projects/fullstack"} className="header">
        Projects
      </Link>

      <span>
        <Link to={"/projects/fullstack"}>Fullstack</Link>

        <Link to={"/projects/frontend"}>Frontend</Link>

        {/* <Link to={"/projects/backend"}>Backend</Link> */}
      </span>
    </div>
  );
}
