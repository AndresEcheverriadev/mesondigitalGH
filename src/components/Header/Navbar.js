import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/logo.svg'
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbarMainContainer'>
      <NavLink to='/'className='logoContainer'><img src={Logo} alt="" /></NavLink>
      <div className='linksContainer'>
        <NavLink to='/' className='animLink'>Inicio</NavLink>
        <NavLink to='/' className='animLink'>¿Quiénes somos?</NavLink>
        <NavLink to='/' className='animLink'>Preguntas frecuentes</NavLink>
        <NavLink to='/' className='animLink'>Contacto</NavLink>
      </div>
      <div className='sessionContainer'>
        <div className='initSessionBtn'><NavLink to='/' className='initSessionBtn--link'>Iniciar Sesión</NavLink></div>
      </div>
    </div>
  )
}

export default Navbar