import React from 'react';
import { useState } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import Item from './Item';


//ItemDetail recibe los datos del producto encontrado por id previamente y los muestra

const ItemDetail = ({ product }) => {
  const [addCart, setAddCart] = useState();

  const cartContext = useContext (CartContext)
  const {cart, addToCart} = cartContext;
  
  const onAdd = (qty) => {
    addToCart(product, qty);
};
  return (
    <div className="flex w-1/2  bg-neutral-200 justify-evenly gap-2 items-center p-1 rounded-lg border-2">
      <div className="w-1/2 h-4/5 rounded-xl p-2 overflow-hidden">
        <img className="w-3/4 h-full object-fill p-2 border-2 border-black hover:scale-105" src={product.img} alt="" />
      </div>

      <div className="flex flex-col w-1/2 items-center justify-between gap-2 p-2 ">
        <div className='flex flex-col text-center'>
          <h2 className="text-3xl font-bold text-center uppercase text-black pb-8">{product.name}</h2>
          <p className='text-xs'>{product.description}</p>
        </div>

        <h2 className="text-2xl pt-16 font-semibold text-black">Price: {product.price} Usd</h2>
        <div className="pt-8">
          
           
             <ItemCount onAdd={onAdd} initial={1} stock={product.stock} />
           
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;