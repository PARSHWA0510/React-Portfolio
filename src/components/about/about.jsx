import React from 'react'
import './about.css'
import ME from '../../assests/IMG_20211225_153744_Bokeh.jpg' 
import { TbAwardFilled } from 'react-icons/tb'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'  
const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know </h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt=''></img>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <TbAwardFilled className='about__icon'/>
              <h2>Experience</h2>
              <small>Fresher</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Student</h5>
              <small>Have contact with many students</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+</small>
            </article>          
          </div>

          <p>
            Hello, I'm Parshwa Mineshkumar Mehta, pursuing B-Tech in computer engineering & is passionate about software development and eager to contribute my skills and knowledge to a dynamic organization. With a strong academic background, active involvement in curricular activities, and a proven track record of success, I am well-prepared to excel in this role.<br /><br />
            Throughout my B-tech journey, I have consistently maintained a CGPA of 8.5+, demonstrating my commitment to academic excellence. As the Vice President of CSI DDU, I honed my leadership and communication skills, collaborating with a diverse team to organize engaging events and foster a vibrant tech community. Additionally, I successfully managed the DUHacks hackathon as a Management and Sponsorship Lead, showcasing my ability to handle responsibilities and deliver results under pressure.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about