import React from "react";
import { useState } from 'react';

const ItemCount = ({ onAdd, initial, stock }) => {

    const [qty, setQty] = useState(initial);

    const addProduct = (num) => {
        setQty(qty + num);
      };
    
      return (
      <div className="flex flex-col justify-center items-center py-4 px-4  rounded-md shadow-md bg-gradient-to-r from-violet-300 ">
        <div className="flex flex-row justify-center items-center w-22 h-20 font-medium text-2xl  border-b-4 border-t-4 border-l-4 border-r-4 border-violet-500">
            <button
              className="disabled:opacity-40 text-lg text-left border-solid border-b-2 pb-1 m-3 py-1 px-2 bg-violet-600 capitalize text-white rounded-full shadow-sm cursor-pointer hover:shadow-md hover:bg-violet-500 transition active:bg-violet-400 active:shadow-none"
              onClick={() => addProduct(-1)}
              disabled={qty === initial}>
              -
            </button>
            <span className="text-center">{qty}</span>
            <button
            className="disabled:opacity-40 text-lg text-left border-solid border-b-2 pb-1 m-3 py-1 px-2 bg-violet-600 capitalize text-white rounded-full shadow-sm cursor-pointer hover:shadow-md hover:bg-violet-500 transition active:bg-violet-400 active:shadow-none"
            onClick={() => addProduct(+1)}
            disabled={qty === stock}>
            +
            </button>

          <button
          className=" bg-violet-600 font-bold text-base mt-5 mb-5 cursor-pointer disabled:opacity-40"
          onClick={() => {
          onAdd(qty);}}
          disabled={stock === 0 ? true : null}>
          Añadir
          </button>
        </div>

    </div>
  );
};

export default ItemCount;