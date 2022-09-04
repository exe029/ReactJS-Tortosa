import React from "react";
import ItemList from './ItemList';

const ItemListContainer = ({ title }) => {
    return ( 
        <section className="flex flex-col items-center">

        <div className=" py-4 text-center bg-gradient-to-b from-violet-500 shadow-md w-full">
            <div className="">
            <h1 className=" font-bold text-xl font-serif">{title}</h1>
            <p className="text-lg">
            ¡Es hora de jugar!
            </p>
            </div>
            
            

           

        </div>

            
            <ItemList  />
            
        
        </section>
    
    );
};
    export default ItemListContainer;
    