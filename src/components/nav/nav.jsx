import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import { BiBook } from 'react-icons/bi'
import { HiOutlineComputerDesktop } from 'react-icons/hi2'
import { AiOutlineProject } from 'react-icons/ai'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav]=useState('#')
  return (
    <nav>
      <a href='#home' onClick={()=> setActiveNav('#')} className={activeNav==="#" ? 'active' : ''  }><AiOutlineHome /></a>
      <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav==="#about" ? 'active' : ''  }><FaUserAlt /></a>
      <a href='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav==="#experience" ? 'active' : ''  }><BiBook /></a>
      <a href='#technology' onClick={()=> setActiveNav('#technology')} className={activeNav==="#technology" ? 'active' : ''  }><HiOutlineComputerDesktop /></a>
      <a href='#projects' onClick={()=> setActiveNav('#projects')} className={activeNav==="#projects" ? 'active' : ''  }><AiOutlineProject /></a>
      <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav==="#contact" ? 'active' : ''  }><BiMessageSquareDetail /></a>
     
    </nav>
  )
}

export default Nav