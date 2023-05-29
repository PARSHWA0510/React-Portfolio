import React from 'react'
import Header from './components/Header/Header.jsx'
import Nav from './components/nav/nav.jsx'
import About from './components/about/about.jsx'
import Experience from './components/experience/experience.jsx'
import Technology from './components/technology/technology.jsx'
import Projects from './components/projects/projects.jsx'
import Contact from './components/contact/contact.jsx'
import Footer from './components/footer/footer.jsx'


export const App = () => {
  return (
    <section id='home'>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Technology />
      <Projects />
      <Contact />
      <Footer />
    </section>
  )
}
export default App