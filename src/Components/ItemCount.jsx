import React from "react";
import { useState } from 'react';

const ItemCount = ({ onAdd, initial, stock }) => {

    const [qty, setQty] = useState(initial);

    const addProduct = (num) => {
        setQty(qty + num);
      };
    
      return (
      <div className="flex flex-col justify-center items-center w-20 h-20 rounded-md shadow-md bg-black ">
        <div className="flex flex-row justify-center items-center bg-violet-600">
            <button
              className="disabled:opacity-40 m-1 px-1  text-white rounded-full  cursor-pointer hover:shadow-md hover:bg-violet-500 transition active:bg-violet-400 active:shadow-none"
              onClick={() => addProduct(-1)}
              disabled={qty === initial}>
              -
            </button>
            <span className="text-center">{qty}</span>
            <button
            className="disabled:opacity-40   m-1 px-1  text-white rounded-full cursor-pointer hover:shadow-md hover:bg-violet-500 transition active:bg-violet-400 active:shadow-none"
            onClick={() => addProduct(+1)}
            disabled={qty === stock}>
            +
            </button>
        </div>

        <button
          className="bg-violet-600 font-bold text-base mt-1 p-1 text-black rounded cursor-pointer disabled:opacity-40"
          onClick={() => {
          onAdd(qty);}}
          disabled={stock === 0 ? true : null}>
          Añadir
        </button>

    </div>
  );
};

export default ItemCount;