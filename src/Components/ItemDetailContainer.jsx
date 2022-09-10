import { useEffect } from 'react';
import { useState } from 'react';
import ItemDetail from './ItemDetail';
import { arrayProducts } from '../assets/data/products';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({ id }) => {
  const [product, setProduct] = useState(null);
  
  const {productsid} = useParams()

  
  useEffect(() => {
    
    const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve(arrayProducts);
      } else {
          reject('La promesa no se puedo resolver');
        }
      }, 1000);
    });

    getProducts.then(res =>setProduct(res.find(arrayProducts => arrayProducts.id === parseInt(productsid))))
  }, []);

  return (
    <div className="flex flex-col items-center bg-black pb-6">
      <h2 className="text-3xl font-semibold text-white mx-auto my-6">
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
