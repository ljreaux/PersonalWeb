import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectToggle() {
  return (
    <nav className='navbar project-section'>
      <ul>
        <li>
          <Link to={'/projects/fullstack'}>Fullstack</Link>
        </li>
        <li>
        <Link to={'/projects/frontend'}>Frontend</Link>
        </li>
        <li>
        <Link to={'/projects/backend'}>Backend</Link>
        </li>
      </ul>
    </nav>
  )
}
