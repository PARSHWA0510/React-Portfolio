import React from 'react'
import './footer.css'
import { BsInstagram } from 'react-icons/bs'
import { GrFacebook } from 'react-icons/gr'
import { SlSocialTwitter } from 'react-icons/sl'

const footer = () => {
  return (
    <footer>
      <a href='#home' className='footer__logo'>Parshwa Mehta</a>

      <ul className='permalinks'>
        <li><a href='#home'>Home</a> </li>
        <li><a href='#header'>Header</a> </li>
        <li><a href='#about'>About</a> </li>
        <li><a href='#experience'>Experience</a> </li>
        <li><a href='#technology'>Technology</a> </li>
        <li><a href='#projects'>Projects</a> </li>
        <li><a href='#contact'>Contacts</a> </li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.instagram.com/parshwa_0510'><BsInstagram /></a>
        <a href='https://www.facebook.com/profile.php?id=100011856936399&mibextid=ZbWKwL'><GrFacebook /></a>
        <a href='https://twitter.com/parshwa0510?t=adP4UqoGcoU6WR-9Kn874A&s=09'><SlSocialTwitter /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Parshwa Mehta Portfolio. All rights reserved</small>
      </div>
    </footer>    
  )
}

export default footer