import React, { useState, useEffect, useContext } from 'react';
import ItemList from './ItemList';
//import { arrayProducts } from '../assets/data/products';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  
  
  
  const {categoryid}= useParams();

  useEffect(() => {

    
    //firebase
      const db = getFirestore();
      const itemsCollection = collection(db, "games");
      const queryItems = categoryid ? query(itemsCollection, where("category", "==", categoryid )) : itemsCollection;
        getDocs(queryItems).then((snapShot) => {
            if (snapShot.size > 0) {
              setProducts(snapShot.docs.map(products => ({id:products, ...products.data()})));
                
            }
        });
}, [categoryid]);
  //mock de promesa
  /*const getProducts = new Promise((resolve, reject) => {
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

    //const db = getFirestore ();
    //const response = doc(db, games, ) */
      

  return (
    <section className=" flex flex-col items-center p-12 h-min-main">
      <div className='bg-neutral-200 shadow-2xl rounded-lg'>
      <ItemList products={products} />

      </div>
    </section>
  );
};
export default ItemListContainer;
