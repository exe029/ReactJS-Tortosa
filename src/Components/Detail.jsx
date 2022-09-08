import React from "react";
import ItemCount from "./ItemCount";

const Detail = ({detail}) => {
    const onAdd = (qty) => {
        alert(`Agregaste ${qty} productos`)
    };
    
    return (

        <div className='flex flex-col flex-nowrap items-center bg-slate-500'>

            <h3 className='bg-slate-600 w-full text-center text-lg uppercase '>{detail.title}</h3>
            <img className='w-48 h-48  object-fit: contain bg-slate-600 uppercase;' src= {detail.thumbnail} alt="" />
            <h3 className='bg-slate-400 w-full text-center uppercase'>$-{detail.price}</h3>
            <ItemCount onAdd={onAdd} initial={1} stock={4} />
        </div>

    )

};

export default Detail;