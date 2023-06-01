import React from 'react'
import './technology.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const technology = () => {
  return (
    <section id='technology'>
      <h5>The Skills I Have</h5>
      <h2>Technologies I know </h2>
{/*--------------------------LANGUAGES-------------------------  */}
      <div className='container experience__container'>
        <div className='experience_frontend'>
          <h3>Languages</h3>
          <div className='experience__content'>
            <article className='expereince__details'>
              <BsPatchCheckFill className="experience__details-icon"  />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='expereince__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='expereince__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>C++ </h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='expereince__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='expereince__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='expereince__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='expereince__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>SQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/*--------------------------WEB TECHNOLOGIES-------------------------  */}
        <div className='experience_backend'>
          <h3>Web Technologies</h3>
          <div className='experience__content'>
            <article className='expereince__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>React JS </h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='expereince__details'>
              <BsPatchCheckFill  className="experience__details-icon"/>
              <div>
              <h4> .Net </h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='expereince__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='expereince__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
               <h4>Hibernate</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='expereince__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='expereince__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4> Django </h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

{/*--------------------------ANDROID TECHNOLOGIES-------------------------  */}
        <div className='experience_frontend'>
          <h3>Android Technologies</h3>
          <div className='experience__content'>
            <article className='expereince__details'>
              <BsPatchCheckFill className="experience__details-icon"  />
              <div>
                <h4>Flutter</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            
            <article className='expereince__details'>
              <BsPatchCheckFill className="experience__details-icon"  />
              <div>
                <h4>Firebase</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>   
          </div>
        </div>

{/*--------------------------DATABASES-------------------------  */}
        <div className='experience_frontend'>
          <h3>Databases</h3>
          <div className='experience__content'>
            <article className='expereince__details'>
              <BsPatchCheckFill className="experience__details-icon"  />
              <div>
                <h4>MySQL </h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article> 
            
            <article className='expereince__details'>
              <BsPatchCheckFill className="experience__details-icon"  />
              <div>
                <h4>MongoDB </h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article> 

            <article className='expereince__details'>
              <BsPatchCheckFill className="experience__details-icon"  />
              <div>
                <h4>Postgres SQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article> 
          </div>
        </div>
        {/*--------------------------TOOLS-------------------------  */}
        {/* <div className='experience_frontend'>
          <h3>Tools</h3>
          <div className='experience__content'>
            <article className='expereince__details'>
              <BsPatchCheckFill className="experience__details-icon"  />
              <div>
                <h4>Git & Git-bash  </h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article> 
            
            <article className='expereince__details'>
              <BsPatchCheckFill className="experience__details-icon"  />
              <div>
                <h4>Visual Studio  </h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article> 

            <article className='expereince__details'>
              <BsPatchCheckFill className="experience__details-icon"  />
              <div>
                <h4>Android Studio</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article> 

            <article className='expereince__details'>
              <BsPatchCheckFill className="experience__details-icon"  />
              <div>
                <h4> Visual Studio Code </h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article> 

            <article className='expereince__details'>
              <BsPatchCheckFill className="experience__details-icon"  />
              <div>
                <h4>Eclipse</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article> 

            <article className='expereince__details'>
              <BsPatchCheckFill className="experience__details-icon"  />
              <div>
                <h4> Wireshark</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article> 
          </div>
  </div> */}

      </div>

    </section>    
  )
}

export default technology