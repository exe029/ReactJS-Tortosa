import { useEffect } from 'react';
import { useState } from 'react';
import ItemDetail from './ItemDetail';
import { arrayProducts } from '../assets/data/products';
import PacmanLoader from 'react-spinners/PacmanLoader';

const ItemDetailContainer = ({ id }) => {
  const [product, setProduct] = useState(null);

  const getProducts = new Promise((resolve, reject) => {
    
      if (true) {
        resolve(arrayProducts);
      } else {
        reject('La promesa no se puedo resolver');
      }
  
  });

  const getProductById = async (id) => {
    try {
      const response = await getProducts;
      console.log(response);
      const result = await response.find((el) => el.id === id);
      setProduct(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProductById(id);
  }, [id]);

  return (
    <div className="flex flex-col items-center">
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
