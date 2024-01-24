import React from 'react'
import ProjectCard from './ProjectCard'
import wordle from '../../assets/Screen Shot 2024-01-28 at 9.17.09 AM.png'

export default function Frontend() {
  const wordGameArr = [{name: 'React', for: 'All UI elements, functionality, and game logic'}, {name: 'CSS', for: 'Used grid and flexbox to make a clean and visually appealing UI on both desktop and mobile devices.'}]
  return (
    <div className='project-div'>
      <ProjectCard title={'Word Game'} description={'A wordle clone. This project really stretched my CSS and problem solving skills. Beyond the regular game logic, this project presented the challenge of visually hiding an input element without disrupting functionality.'} imgUrl={wordle}technologies={wordGameArr} link={'https://larryswordgame.netlify.app/'}/>
    </div>
  )
}
