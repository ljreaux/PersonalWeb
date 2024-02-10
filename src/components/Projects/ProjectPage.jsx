import Frontend from "./Frontend";
import Backend from "./Backend";
import Fullstack from "./Fullstack";
import ProjectToggle from "./ProjectToggle";
import { Routes, Route } from "react-router-dom";

export default function ProjectPage() {
  return (
    <div>
      <ProjectToggle />
      <Routes>
        {/* <Route path="/" element={<Fullstack />} /> */}
        <Route path="/fullstack" element={<Fullstack />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/backend" element={<Backend />} />
      </Routes>
    </div>
  );
}
