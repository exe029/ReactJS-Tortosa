import React from "react";
import { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { CartContext } from "../Context/CartContext";




const CardWitget = () => {
    const cartContext = useContext(CartContext);
    const { cart } = cartContext;

    

    return (
        <div className="cart-widget flex flex-row p-2 gap-1">
            
            <FaCartPlus className="cursor-pointer" size="2rem" color="white"/>
            <span className="text-white text-lg"> {cart.length}</span>
        </div>
    );
};

export default CardWitget;
