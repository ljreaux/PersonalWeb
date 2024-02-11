import React from "react";

export default function ProjectCard({
  title,
  description,
  imgUrl,
  technologies,
  link,
}) {
  return (
    <div className="project-card">
      <h1>{title}</h1>
      <a href={link} target="blank" className="w-full image-con">
        <img src={imgUrl} alt="project image" className="image" />
      </a>
      <ul className="project-list">
        <li className="pt-2">
          {<span className="col-light">Project Description: </span>}
          {description}
        </li>
        <li>
          <li className="col-light pt-2">Technologies Used:</li>
          <ul>
            {technologies.map((tech) => (
              <li key={tech.name} className="col-light">
                {`${tech.name}: `}
                <span className="col-dark">{tech.for}</span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
