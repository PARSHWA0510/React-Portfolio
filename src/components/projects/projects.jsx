import React from 'react'
import './projects.css'
import img1 from '../../assests/portfolio1.jpg'
import img2 from '../../assests/portfolio2.jpg'
import img3 from '../../assests/portfolio3.jpg'
import img4 from '../../assests/portfolio4.jpg'
import img5 from '../../assests/portfolio5.png'
import img6 from '../../assests/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: img1,
    title: 'Little Ice Cremary',
    description: 'php project',
    github: 'https://github.com/PARSHWA0510',
    demo:'drive link'    
  },
  {
    id: 2,
    image: img2,
    title: 'Fighting game',
    description: 'javascript project',
    github: 'https://github.com/PARSHWA0510',
    demo:'drive link'    
  },
  {
    id: 3,
    image: img3,
    title: 'Books Bob',
    description: 'java project',
    github: 'https://github.com/PARSHWA0510',
    demo:'drive link'    
  },
  {
    id: 4,
    image: img4,
    title: 'Apna Canteen',
    description: 'flutter project',
    github: 'https://github.com/PARSHWA0510',
    demo:'drive link'    
  },
  {
    id: 5,
    image: img5,
    title: 'Hostel Complain Management',
    description: '.net & React project',
    github: 'https://github.com/PARSHWA0510',
    demo:'drive link'    
  },
  {
    id: 6,
    image: img6,
    title: 'Ride Share App',
    description: 'Flutter & firebase project',
    github: 'https://github.com/PARSHWA0510',
    demo:'drive link'    
  }
]
const projects = () => {
  return (
    <section id='projects'>
      <h5>My recent Work</h5>
      <h2>Projects</h2>

      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title,description, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
                  <img src={image} alt={title } />
          </div>
                <h3>{title}</h3>
                <p>{description}</p>
          <div className='portfolio__item-cta'>
            <a href={github} className="btn" target='_blank' rel='noreferrer'>Github</a>
          <a href={demo} className="btn btn-primary" target='_blank' rel='noreferrer'>Live Demo</a>            
          </div>          
        </article>            
            )            
          })
        }  
        
      </div>
    </section>
    
  )
}

export default projects