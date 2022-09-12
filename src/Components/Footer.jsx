import React from "react";
import brand from '../assets/logo_gamer.svg';
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
    return(
        <footer className="w-full h-20 flex  items-center bg-slate-900 ">
            <div className="w-full h-full items-center flex flex-row justify-between ">

                <div className=" p-2 ">
                
                    <img className="w-14 h-14 cursor-pointer" src={brand} alt="logo" />
                </div>
                <div>
                    <p className="text-white text-lg font-semibold">Este es un Proyecto para ReactJS / CoderHouse</p>
                </div>
                <div className="flex flex-row pr-16 gap-14">

                    <FaWhatsapp className="cursor-pointer" size="1.5rem" color="white" />
                    <FaInstagram className="cursor-pointer" size="1.5rem" color="white" />
                    <FaFacebook className="cursor-pointer" size="1.5rem" color="white" />
                    <FaGithub className="cursor-pointer" size="1.5rem" color="white"/>
            
                </div>
            </div>
        </footer>
    );

};
export default Footer;