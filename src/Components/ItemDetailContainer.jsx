import { useEffect } from 'react';
import { useState } from 'react';
import ItemDetail from './ItemDetail';
//import { arrayProducts } from '../assets/data/products';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from "firebase/firestore";
//ItemDetailContainer recibe por prop un id, que deberá ser el id de un producto determinado

const ItemDetailContainer = ({ id }) => {
  const [product, setProduct] = useState(null);
  
  const {productsid} = useParams()

  useEffect(() => {
    const db = getFirestore();
    const response = doc(db, "games", productsid);
    getDoc(response).then((snapShot) => {
        if (snapShot.exists()) {
            setProduct({id:snapShot.id, ...snapShot.data()});
            
        }            
    });
}, [productsid]);
 

  
      /* useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve(arrayProducts);
      } else {
          reject('La promesa no se puedo resolver');
        }
      }, 1000);
    });

    getProducts.then(res =>setProduct(res.find(arrayProducts => 
      arrayProducts.id === parseInt(productsid))))
      
      
    }, []);
    */
  return (
    <div className=" flex flex-col items-center bg-white pb-6">
      <h2 className="text-3xl font-semibold text-black mx-auto my-6">
        Detalle de producto
      </h2>
      {product ? (
        <ItemDetail product={product} />
      ) : (
        <PacmanLoader color="#b723c1" />
      )}
    </div>
  );
};
export default ItemDetailContainer;
