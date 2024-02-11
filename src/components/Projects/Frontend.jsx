import { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import wordle from "../../assets/Screen Shot 2024-01-28 at 9.17.09 AM.png";
import ProjectDiv from "./ProjectDiv";

export default function Frontend({ count, setCount, setProjectLength }) {
  const wordGameArr = [
    { name: "React", for: "All UI elements, functionality, and game logic" },
    {
      name: "CSS",
      for: "Used grid and flexbox to make a clean and visually appealing UI on both desktop and mobile devices.",
    },
  ];
  const cardArr = [
    <ProjectCard
      title={"Word Game"}
      key={"Word Game"}
      description={
        "A wordle clone. This project really stretched my CSS and problem solving skills. Beyond the regular game logic, this project presented the challenge of visually hiding an input element without disrupting functionality."
      }
      imgUrl={wordle}
      technologies={wordGameArr}
      link={"https://larryswordgame.netlify.app/"}
    />,
  ];
  useEffect(() => {
    setCount(0);
    setProjectLength(cardArr.length - 1);
  }, []);

  return <ProjectDiv cardArr={cardArr} count={count} />;
}
