import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h1>
        Fullstack <span>Web Developer</span> and Educator
      </h1>
      <div className="buttons">
        <button onClick={() => navigate("/about")}>About Me</button>
        <button>Resume</button>
        <button>Projects</button>
      </div>
    </div>
  );
}
