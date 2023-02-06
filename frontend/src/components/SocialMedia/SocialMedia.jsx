import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href="https://github.com/SashaVektor" target="_blank">
          <FaGithub />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/sasha_veklich/" target="_blank">
          <BsInstagram />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
