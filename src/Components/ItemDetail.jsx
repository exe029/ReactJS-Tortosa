import React from 'react';
import { useState } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';


//ItemDetail recibe los datos del producto encontrado por id previamente y los muestra

const ItemDetail = ({ product }) => {
  const [addCart, setAddCart] = useState(false);

  const onAdd = (qty) => {
    setAddCart(true);
};
  return (
    <div className="flex w-1/3 bg-violet-900 justify-evenly gap-4 items-center p-1 rounded-lg border-2">
      <div className="w-60 h-96 rounded-xl overflow-hidden">
        <img className="w-full h-full object-fill p-0" src={product.img} alt="" />
      </div>

      <div className="flex flex-col items-center justify-between gap-4 p-2 ">
        <h2 className="text-3xl font-bold text-white pb-8">{product.name}</h2>
        <h2 className="text-sm text-black">{product.category}</h2>
        <p>{product.description}</p>
        <h2 className="text-2xl pt-16 font-semibold text-green-500">Price: {product.price}</h2>
        <div className="pt-8">
          {
            addCart ? <Link className="bg-slate-100 p-1 border-black font-bold text-base border-2 animate-pulse hover:shadow-md hover:bg-violet-500 text-black rounded-md cursor-pointer" to="./cart">Finalizar Compra</Link>
            : <ItemCount onAdd={onAdd} initial={1} stock={product.stock} />
          }
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;