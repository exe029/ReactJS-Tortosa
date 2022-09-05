import React from 'react'
import ItemCount from './ItemCount'

const Item = ({ product }) => {
    const onAdd = (qty) => {
        alert(`Agregaste ${qty} productos`)
    };
  return (
    


        <div className='flex flex-col flex-nowrap items-center bg-slate-500'>

            <h3 className='bg-slate-600 w-full text-center text-lg uppercase '>{ product.name }</h3>
            <img className='w-48 h-48  object-fit: contain bg-slate-600 uppercase;' src= {product.img} alt="" />
            <h3 className='bg-slate-400 w-full text-center uppercase'>{ product.price }</h3>
            <h3 className='bg-slate-300 w-full text-center uppercase'>{ product.category }</h3>
            <h3>{ product.description }</h3>
            <h3 className='bg-slate-600 w-full text-center uppercase'>{ product.platforms }</h3>
            <ItemCount onAdd={onAdd} initial={1} stock={4} />
        </div>
        
    
  
  );
};

export default Item;