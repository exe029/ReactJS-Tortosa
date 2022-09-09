import React from 'react'


const Item = ({ product }) => {
   
  return (
    


        <div className='flex flex-col flex-nowrap items-center bg-slate-500'>

            <h3 className='bg-slate-600 w-full text-center text-lg uppercase '>{ product.name }</h3>
            <img className='w-48 h-48  object-fit: contain bg-slate-600 uppercase;' src= {product.img} alt="" />
            <h3 className='bg-slate-400 w-full text-center uppercase'>{ product.price }</h3>
            <h3 className='bg-slate-300 w-full text-center uppercase'>{ product.category }</h3>
            <h3>{ product.description }</h3>
            <h3 className='bg-slate-600 w-full text-center uppercase'>{ product.platforms }</h3>
            
        </div>
        
    
  
  );
};

export default Item;