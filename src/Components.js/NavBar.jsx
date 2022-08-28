import React from "react";
import CardWitget from './CartWidget';
import './styles/NavBar.css';

const NavBar = () => {
    const brand =
    'https://i.pinimg.com/236x/a3/61/6a/a3616a4a3ff8f55d64838352920fb12e.jpg';
    return (
        <header className="header">
        
        <div className="logo-container">
          <img src={brand} alt="logo" />
        </div>
      {/* links de navegación */}
      <nav>
        <ul className="nav-container">
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/">Juegos</a>
          </li>
          <li>
            <a href="/">Consolas</a>
          </li>
          <li>
            <a href="/">Contacto</a>
          </li>
        </ul>
      </nav>
      <CardWitget/>
      {/* logo de la marca */}
      

    </header>
    );
};

export default NavBar;
