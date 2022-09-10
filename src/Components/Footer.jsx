import React from "react";
import brand from '../assets/logo_gamer.svg';

const Footer = () => {
    return(
        <footer className="w-full h-16 flex justify-between items-center py-6 px-4 bg-slate-900 ">
            <div className="cursor-pointer">
                
                    <img className="w-14 h-14 " src={brand} alt="logo" />
              
            </div>
            
        </footer>
    );

};
export default Footer;