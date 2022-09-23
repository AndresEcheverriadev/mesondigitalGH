import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/logo.svg';
import './Navbar.css';
import './NavbarResponsive.css';

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
      <div className='initSessionContainer'>
        <NavLink to='/' className='initSessionBtn'>Iniciar Sesión
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
          </svg>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar