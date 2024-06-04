import Projects from "./Projects";
import ProjectToggle from "./ProjectToggle";
import { Routes, Route } from "react-router-dom";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import { useState } from "react";
import {
  fullstackProjects,
  frontendProjects,
  backendProjects,
  mobileProjects,
} from "./projectArrays";

export default function ProjectPage() {
  const [count, setCount] = useState(0);
  const [projectLength, setProjectLength] = useState(2);

  function handleLeftClick() {
    setCount((prev) => prev - 1);
  }
  function handleRightClick() {
    setCount((prev) => prev + 1);
  }

  return (
    <div className="project-page">
      <ProjectToggle />
      <button
        onClick={handleLeftClick}
        className={`button left ${count == 0 ? "hidden" : ""}`}
      >
        <FaCaretLeft />
      </button>
      <button
        onClick={handleRightClick}
        className={`button right ${count >= projectLength ? "hidden" : ""}`}
      >
        <FaCaretRight />
      </button>
      <Routes>
        {/* <Route path="/" element={<Fullstack />} /> */}
        <Route
          path="/fullstack"
          element={
            <Projects
              count={count}
              setCount={setCount}
              setProjectLength={setProjectLength}
              projects={fullstackProjects}
            />
          }
        />
        <Route
          path="/frontend"
          element={
            <Projects
              count={count}
              setCount={setCount}
              setProjectLength={setProjectLength}
              projects={frontendProjects}
            />
          }
        />
        <Route
          path="/backend"
          element={
            <Projects
              count={count}
              setCount={setCount}
              setProjectLength={setProjectLength}
              projects={backendProjects}
            />
          }
        />
        <Route
          path="/mobile"
          element={
            <Projects
              count={count}
              setCount={setCount}
              setProjectLength={setProjectLength}
              projects={mobileProjects}
            />
          }
        />
      </Routes>
    </div>
  );
}
