import React from 'react';
import ItemCount from './ItemCount';

//ItemDetail recibe los datos del producto encontrado por id previamente y los muestra

const ItemDetail = ({ product }) => {
  const onAdd = (qty) => {
    alert(`Agregaste ${qty} productos`)
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
        <ItemCount onAdd={onAdd} initial={1} stock={product.stock} />
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;