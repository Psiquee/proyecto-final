import '../../styles/layout.css'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery'

const Nav = (props) => {
  const [navMenuState, setNavMenuState] = useState('nav-menu')
  const isDesktop = useMediaQuery('(min-width: 700px)');

 const handleMenuBtnClick = () =>{
  if (navMenuState === 'nav-menu'){
    setNavMenuState('nav-menu show')
  } else {
    setNavMenuState('nav-menu')};
 }




    return (
    <>
      { !isDesktop ? <div className="menu-btn" onClick={handleMenuBtnClick}>
      <i className="fa-solid fa-bars"></i>
  </div> : null}

      <div className="container">

        <nav className="nav-main">
        <img src="img/FINAL.png" alt="Galga joyas LOGO" className="nav-brand" />
        <ul className={navMenuState}>
          <li>
            <NavLink to="/" className={({isActive}) => isActive ? "activo" : undefined} >Home</NavLink>
          </li>
          <li>
          <NavLink to="/galga" className={({isActive}) => isActive ? "activo" : undefined} >Galga</NavLink>
          </li>
          <li>
          <NavLink to="/joyas" className={({isActive}) => isActive ? "activo" : undefined} >Joyas</NavLink>
          </li>
          <li>
          <NavLink to="/proyectos" className={({isActive}) => isActive ? "activo" : undefined} >Proyectos</NavLink>
          </li>
          <li>
          <NavLink to="/contacto" className={({isActive}) => isActive ? "activo" : undefined} >Contacto</NavLink>
          </li>
        </ul>



        <ul className="nav-lupa">
          <li>
            <a href="joyas">
              <i className="fas fa-search"></i>
            </a>
            <a href="contacto"><i className="fa-solid fa-user"></i> </a>
          </li>
        </ul>

        
      </nav>
      </div>
      </>
    );
}
export default Nav;