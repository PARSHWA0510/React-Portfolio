import React from 'react'
import './experience.css'
import CSILogo from '../../assests/csi-logo.png'
import ieee from '../../assests/IEEE.PNG'
import duhacks from '../../assests/DUHacks.jpg'
import gdsc from '../../assests/GDSC-Logo.png'
import verzeo from '../../assests/Verzeo.jpg'
const data = [
  {
    id: 1,
    title: 'CSI DDU',
    image: CSILogo,
    position: 'Vice President',
    year: 'July22 - Present',
    description:'•	As Vice President at CSI DDU, I excelled in enhancing communication skills, fostering teamwork and collaborations, effectively managing teams, providing organizational leadership, and ensuring the seamless execution of numerous successful tech events.'
  },

  {
    id: 2,
    title: 'IEEE Bombay',
    image: ieee,
    position: 'Full stack Developer Intern',
    year: ' Dec 2022– Feb  2023',
    description:'•	Gained valuable industry experience as a Full Stack Development intern at IEEE Bombay, contributing to the development of robust web applications and honing skills in front-end and back-end technologies. '
  },

  {
    id: 3,
    title: '  DUHacks ',
    image: duhacks,
    position: '    Management & Sponsorship Lead  ',
    year: '         Jan 2022 – Present',
    description:'In my role, I efficiently coordinated and executed the DUHacks hackathon, demonstrating my adeptness in handling responsibilities and delivering exceptional outcomes under demanding circumstances. I successfully established partnerships with sponsors, ensuring a seamless collaboration, while also managing all aspects of the event smooth operation both before and during the hackathon.'
  },

  {
    id: 4,
    title: 'GDSC DDU',
    image: gdsc,
    position: '     AI/ML member 	',
    year: 'Nov 2022 – Present',
    description:'•	As an AI/ML member of GDSC, I enthusiastically embraced new learnings and insights in the field of Artificial Intelligence and Machine Learning, contributing to the growth and innovation of the community. Learning new things'
  },

  {
    id: 5,
    title: 'Verzeo ',
    image: verzeo,
    position: '    AI/ML intern',
    year: 'July22 - Present',
    description:'•	Designed a web compiler for university students and faculties with 4+ features, including the first & follow, left factoring, left recursion, token generation, and accelerating the learning process.  '
  },


]
const experience = () => {
  return (
    <section id='experience'>
       <h5>My experience till now</h5>
      <h2>Experience</h2>

      <div className='container exp__container'>
        {
          data.map(({ id, title, image, position, year, description }) =>
          {
            return (
              <article key={id} className='exp__item'>
          <div className='exp__image'>
            <h2>{title }</h2>
            <img src={image} alt=""></img>
          </div>
          <div className='exp__position'>
            <h4>{position }</h4>
            <h4> {year } </h4>
          </div>

                <p>{description }</p>
                 
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default experience