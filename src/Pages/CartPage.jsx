import React from "react";
import CartListItem from "../Components/CartListItem";

const CartPage = () => {


    return (
        <main className="grid grid-cols-2 items-center h-min-main bg-neutral-200">
            <div className=" flex flex-col justify-between p-8 items-center  w-full h-full  bg-contain bg-no-repeat bg-[url('https://images.pexels.com/photos/3945657/pexels-photo-3945657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]  ">
                    
                        <h1 className="font-extrabold text-3xl uppercase ">tus productos</h1>
                        <h2>Estas a un paso de finalizar tu compra</h2>

            </div>
            
            <div className="items-center text-center w-full h-full p-4 ">
                    <CartListItem />
            </div>
            
            
        </main>
    )
} 

export default CartPage