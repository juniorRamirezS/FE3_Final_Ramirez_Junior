import { Link } from 'react-router-dom';
import '../index.css';
import { useCharStates } from '../Contex/global.context';


const Navbar = () => {

  const { state: { theme }, dispatch } = useCharStates();

  const handleToggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  }

  return (
    <nav className={`navbar ${theme}`}>
      <div className='nav-logo '>
        <img src="../../public/DH.ico" alt='DH-ico' />
      </div>
      <div className='nav-links'>
        <Link to="/" >Home</Link>
        <Link to="/contact" >Contact</Link>
        <Link to="/favs" >Favs</Link>
      </div>
      <button onClick={handleToggleTheme} className='handleThemeButton' >{theme === "light" ? "🌙" : "☀️"}</button>
    </nav>
  )
}

export default Navbar;