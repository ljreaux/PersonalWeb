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
        <button
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1PYM-dillFHdcStMO5MukmxGJR9lrch6l/view?usp=drive_link",
              "_blank"
            )
          }
        >
          Resume
        </button>
        <button onClick={() => navigate("/projects/")}>Projects</button>
      </div>
    </div>
  );
}
