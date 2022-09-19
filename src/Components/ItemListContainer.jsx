import React, { useState, useEffect, useContext } from 'react';
import ItemList from './ItemList';
import { arrayProducts } from '../assets/data/products';
import { useParams } from 'react-router-dom';



const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  
  

  const {categoryid}= useParams();
  //mock de promesa
  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve(arrayProducts);
      } else {
        reject('La promesa no se puedo resolver');
      }
    }, 1000);
  });

  useEffect(() => {
    if (categoryid){
      getProducts.then(res => setProducts(res.filter(arrayProducts => arrayProducts.category === categoryid)));
    } else {

        getProducts.then(res => setProducts(res));
      }

    
      
  }, [categoryid]);

  return (
    <section className="flex flex-col items-center bg-neutral-300 pb-6 h-min-main">
      <div className=" py-4 text-center bg-gradient-to-b bg-violet-500 from-violet-200 shadow-md w-full">
        <div className="">
          <h1 className=" font-bold text-xl font-serif">GAMING ZONE</h1>
          <p className="text-lg text-slate-100">¡Es hora de jugar!</p>
        </div>
      </div>
    
      <ItemList products={products} />
    </section>
  );
};
export default ItemListContainer;
