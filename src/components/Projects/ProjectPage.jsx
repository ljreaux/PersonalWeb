import Frontend from "./Frontend";
import Backend from "./Backend";
import Fullstack from "./Fullstack";
import ProjectToggle from "./ProjectToggle";
import { Routes, Route } from "react-router-dom";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import { useState } from "react";

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
            <Fullstack
              count={count}
              setCount={setCount}
              setProjectLength={setProjectLength}
            />
          }
        />
        <Route
          path="/frontend"
          element={
            <Frontend
              count={count}
              setCount={setCount}
              setProjectLength={setProjectLength}
            />
          }
        />
        <Route
          path="/backend"
          element={
            <Backend
              count={count}
              setCount={setCount}
              setProjectLength={setProjectLength}
            />
          }
        />
      </Routes>
    </div>
  );
}
