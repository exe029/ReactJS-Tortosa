import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ product }) => {
  const onAdd = (qty) => {
    alert(`Agregaste ${qty} productos`)
};
  return (
    <div className="flex w-96 bg-sky-800 gap-4 items-center ">
      <div className="w-52 h-96 rounded-xl overflow-hidden">
        <img className="w-full h-full object-fill p-1" src={product.img} alt="" />
      </div>

      <div className="flex-col ">
        <h2 className="text-2xl font-bold text-white">{product.name}</h2>
        <h2 className="text-2xl text-black">{product.category}</h2>
        <p>{product.description}</p>
        <h2 className="text-2xl font-semibold text-green-500">{product.price}</h2>
        <div className="p-1">
        <ItemCount onAdd={onAdd} initial={1} stock={product.stock} />
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;