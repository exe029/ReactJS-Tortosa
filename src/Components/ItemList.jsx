import React,{useState, useEffect} from 'react'
import Item from './Item'
import { arrayProducts } from '../assets/data/products'
import PacmanLoader from "react-spinners/PacmanLoader";

const ItemList = () => {

    const [products, setProducts ] = useState([]);

    //mock de promesa
    const getProducts = new Promise( ( resolve, reject ) => {
        setTimeout(() => {
            if(true){
                resolve(arrayProducts); 
            }else{
                reject('La promesa no se puedo resolver');
            }
        }, 2000);
    });
    
    useEffect(()=>{
        getProducts
            .then( data=> setProducts(data))
            .catch( error => console.error(error));
    },[]) 

  return (
    <div className='grid grid-cols-4 gap-4'>

        {
            products.length > 0
            ? products.map( product => <Item key={product.id} product={product} />)
            : <PacmanLoader color='#b723c1'/>
        }

    </div>
  )
}

export default ItemList