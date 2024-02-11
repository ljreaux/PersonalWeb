import { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectDiv from "./ProjectDiv";

export default function Backend({ count, setCount, setProjectLength }) {
  const cardArr = [""];
  useEffect(() => {
    setCount(0);
    setProjectLength(cardArr.length - 1);
  }, []);

  return <ProjectDiv cardArr={cardArr} count={count} />;
}
