import { useNavigate } from "react-router-dom";
import { useState } from "react";
import background from "../assets/pexels-nao-triponez-792199.jpg";
import Loading from "./Loading";

export default function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading && <Loading />}
      <div className={`home ${loading && "hidden"}`}>
        <img
          src={background}
          alt="background image"
          onLoad={() => setLoading(false)}
        />
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
          <button onClick={() => navigate("/projects/fullstack")}>
            Projects
          </button>
        </div>
      </div>
    </>
  );
}
