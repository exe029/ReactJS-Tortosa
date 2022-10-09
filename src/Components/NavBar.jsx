import React from 'react';
import CardWitget from './CartWidget';
import brand from '../assets/logo_gamer.svg';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header className="w-full h-48 items-center flex flex-col brightness-95 bg-cover bg-center bg-no-repeat  bg-[url('https://cdn.pixabay.com/photo/2017/08/10/06/06/controller-2618897_960_720.jpg')]">
      <div className=' flex flex-row p-2 justify-between h-full w-full'>

          <div className="cursor-pointer">
            {/* Botón de menú  */}
            <NavLink to="/">
              <img className="w-16 h-16  " src={brand} alt="logo" />
            </NavLink>
          </div>

          {/* links de navegación */}
          <nav>
            <ul className="flex text-white  gap-16 text-lg font-bold">
              <li className='hover:text-blue-600 hover:text-xl duration-500'>
                <NavLink to="/">Inicio</NavLink>
              </li>
              <li className='hover:text-blue-600 hover:text-xl duration-500'>
                <NavLink to="/productos/Games">Juegos</NavLink>
              </li>
              <li className='hover:text-blue-600 hover:text-xl duration-500'>
                <NavLink to="/productos/Consolas">Consolas</NavLink>
              </li>
            </ul>
          </nav>
          <CardWitget />
      </div>
      <h1 className=" font-bold animate-pulse text-white font-serif h-full text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-200 to-blue-300 uppercase"
      >GAMING ZONE</h1>
    </header>
  );
};

export default NavBar;