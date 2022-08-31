import React from "react";


const ItemListContainer = ({ title }) => {
    return ( 
        <div className="flex-col py-4 text-center bg-gradient-to-b from-violet-500 shadow-md">
            <h1 className="font-bold text-xl font-serif">{title}</h1>
            <p className="text-lg">
            ¡Es hora de jugar!
            </p>

        </div>
    
    );
};
    export default ItemListContainer;
    