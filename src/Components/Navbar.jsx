import React from 'react'
import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'
import { Link } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {handleTheme} = useContext(ContextGlobal);

  return (
    <>
    
      <nav>
        <h2>DH Odonto</h2>
        <div className='ul-button'>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="contacto">Contact</Link>
            </li>
            <li>
              <Link to="favs">Favs</Link>
            </li>
          </ul>
          <button>Change theme</button>
        </div>
        
        
      </nav>
    
   
    </>
    
  )
}

export default Navbar;