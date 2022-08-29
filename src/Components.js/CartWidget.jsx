import React from "react";
import { FaCartPlus } from "react-icons/fa";
import './styles/CardWitget.css';


const CardWitget = () => {
    return (
        <div className="cart-widget">
            <div><FaCartPlus size="2rem" color="white"/></div>
         </div>
    );
};

export default CardWitget;
