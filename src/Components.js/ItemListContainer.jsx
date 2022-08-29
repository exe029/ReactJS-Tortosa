import React from "react";
import './styles/ItemListContainer.css';

const ItemListContainer = ({ title }) => {
    return ( 
        <div className="title-container">
            <h1>{title}</h1>
            <p className="parrafo">
            ¡Es hora de jugar!
            </p>

        </div>
       
    );
};
    export default ItemListContainer;
    