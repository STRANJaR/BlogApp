import React from 'react'
import cloudImage from '../assets/bird_2.jpg'

function Logo({width = '100px'}) {
  return (
    <div>
      <img className='w-14 rounded-full' src={cloudImage} alt="" />
    </div>
  )
}

export default Logo