import React from "react";
import CardWitget from './CartWidget';
import brand from '../assets/logo_gamer.svg';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
   
    return (
        <header className="w-full flex justify-between items-center py-6 px-4 bg-[url('https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
        
        <div className="cursor-pointer">
          <img className="w-14 h-14 " src={brand} alt="logo" />
        </div>
      {/* links de navegación */}
      <nav>
        <ul className="flex text-white gap-6 text-lg font-semibold">
          <li>
          <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
          <NavLink to="/">Juegos</NavLink>
          </li>
          <li>
          <NavLink to="/">Consolas</NavLink>
          </li>
          <li>
          <NavLink to="/">Contacto</NavLink>
          </li>
        </ul>
      </nav>
      <CardWitget/>
      {/* logo de la marca */}
      

    </header>
    );
};

export default NavBar;
