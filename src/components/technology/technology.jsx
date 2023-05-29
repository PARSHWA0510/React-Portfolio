import React from 'react'
import './technology.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const technology = () => {
  return (
    <section id='technology'>
      <h5>The Skills I Have</h5>
      <h2>Technologies I know </h2>

      <div className='container experience__container'>
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='expereince__details'>
              <BsPatchCheckFill className="experience__details-icon"  />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='expereince__details'>
              <BsPatchCheckFill />
              <div>
              <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='expereince__details'>
              <BsPatchCheckFill />
              <div>
                <h4>Flutter</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='expereince__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='expereince__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Javascript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='expereince__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Angular JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        
        <div className='experience_backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='expereince__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>PHP</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='expereince__details'>
              <BsPatchCheckFill  className="experience__details-icon"/>
              <div>
              <h4>Firebase</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='expereince__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>MYSQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='expereince__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
               <h4>MongoDB</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='expereince__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='expereince__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Postgres SQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>


        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='expereince__details'>
              <BsPatchCheckFill className="experience__details-icon"  />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>          
          </div>
        </div>


        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='expereince__details'>
              <BsPatchCheckFill className="experience__details-icon"  />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>          
          </div>
        </div>

      </div>

    </section>    
  )
}

export default technology