import React from 'react'
import technologies from '../utils/constants'
import MeteorCanvas from './canvas/Meteor'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((tech) => (
        <div className='w-28 h-28' key={tech.name}>
          <MeteorCanvas img={tech.icon} />
        </div>
      ))}
    </div>
  )
}

export default Tech