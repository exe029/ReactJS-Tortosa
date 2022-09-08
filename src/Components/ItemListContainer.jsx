import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { arrayProducts } from '../assets/data/products';
import ItemDetailContainer from './ItemDetailContainer';

const ItemListContainer = ({ title }) => {
  const [products, setProducts] = useState([]);

  //mock de promesa
  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve(arrayProducts);
      } else {
        reject('La promesa no se puedo resolver');
      }
    }, 2000);
  });

  useEffect(() => {
    getProducts
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="flex flex-col items-center bg-gray-900">
      <div className=" py-4 text-center bg-gradient-to-b from-violet-500 shadow-md w-full">
        <div className="">
          <h1 className=" font-bold text-xl font-serif">{title}</h1>
          <p className="text-lg text-slate-100">¡Es hora de jugar!</p>
        </div>
      </div>

      <ItemList products={products} />
      <ItemDetailContainer/>
    </section>
  );
};
export default ItemListContainer;
