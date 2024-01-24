import React from 'react'

export default function ProjectCard({title, description, imgUrl, technologies, link}) {
  return (
    <div className='project-card'>
      <h1>{title}</h1>
      <a href={link} target='blank' className='w-full'><img src={imgUrl} alt="project image" /></a>
      <ul className='project-list'> 
        
        <li>{`Project Description: ${description}`}</li>
        <li><li>
              Technologies Used: 
            </li>
          <ul>
            
            {technologies.map((tech) => (
              <li key={tech.name}>
                {`${tech.name}: ${tech.for}`}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  )
}
