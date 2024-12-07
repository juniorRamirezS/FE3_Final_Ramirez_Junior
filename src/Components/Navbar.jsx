import React from 'react'
import { Link } from 'react-router-dom';
import '../index.css';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav className='navbar light'>
      <div className='nav-logo '>
        <img src="../../public/DH.ico" alt='DH-ico' />
      </div>
      <div className='nav-links'>
        <Link to="/" >Home</Link>
        <Link to="/contact" >Contact</Link>
        <Link to="/favs" >Favs</Link>
      </div>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button className='handleThemeButton' >Change theme</button>
    </nav>
  )
}

export default Navbar;