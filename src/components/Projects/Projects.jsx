import { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectDiv from "./ProjectDiv";

export default function Fullstack({
  count,
  setCount,
  setProjectLength,
  projects,
}) {
  const cardArr = projects.map((project) => {
    return <ProjectCard {...project} key={project.title} />;
  });
  useEffect(() => {
    setCount(0);
    setProjectLength(cardArr.length - 1);
  }, [projects]);

  return <ProjectDiv cardArr={cardArr} count={count} />;
}
