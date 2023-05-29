import React from 'react'
import './header.css'
import CTA from './cta'
// import ME from '../../assests/parshwa_without_bg.png'
import ME from '../../assests/parshwa_portfolio.png'
import HeaderSocials from './headerSocials'

const header = () => {
  return (
    <header>
      
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Parshwa Mehta</h1>
        <h5 className='text-light'> Tech Enthusiast </h5>   
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt='me' />          
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>  
    </header>
  )
}

export default header