import React from 'react'
import './experience.css'
import { FaReact } from 'react-icons/fa'
import CSILogo from '../../assests/csi-logo.png'
const experience = () => {
  return (
    <section id='experience'>
       <h5>My experience till now</h5>
      <h2>Experience</h2>

      <div className='container exp__container'>
        <article className='exp__item'>
          <div className='exp__image'>
            <h2>CSI DDU</h2>
            <img src={CSILogo} alt=""></img>
          </div>
          <div className='exp__position'>
            <h3>Vice President</h3>
            <h6> July 22-present </h6>
          </div>

          <p>•	Designed a web compiler for university students and faculties with 4+ features, including the first & follow, left factoring, left recursion, token generation, and accelerating the learning process.</p>
          <div className='exp__technologies'>
            <a href='https://react.com'><FaReact /></a>
          </div>

         
        </article>
      </div>
    </section>
  )
}

export default experience