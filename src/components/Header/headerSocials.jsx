import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { GoMarkGithub } from 'react-icons/go'
import { FaInstagramSquare } from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
const headerSocials = () => {
  return (
      <div className='header__socials'>
          <a href='https://www.linkedin.com/in/parshwa-mehta-949306205/' target='_blank' rel='noreferrer'><BsLinkedin/></a>
          <a href='https://github.com/PARSHWA0510' target='_blank' rel='noreferrer'><GoMarkGithub /></a>
          <a href='https://www.instagram.com/parshwa_0510/' target='_blank' rel='noreferrer'><FaInstagramSquare/></a>
          <a href='https://twitter.com' target='_blank' rel='noreferrer'><BsTwitter/></a>
      </div>
  )
}

export default headerSocials