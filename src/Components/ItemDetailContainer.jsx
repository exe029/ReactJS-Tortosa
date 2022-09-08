
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
    const [details, setDetails] = useState ([]);

    const getDetails = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (true) {
            resolve(details);
          } else {
            reject('La promesa no se puedo resolver');
          }
        }, 4000);
      });

    useEffect (() => {
        getDetails
        fetch("https://api.mercadolibre.com/sites/MLA/search?q=PCgamer&limit=4")
        .then((respuesta) => respuesta.json())
        .then((data) => {setDetails(data.results);

        });
        

    }, []);

    console.log(details);
    return (

        <div className="flex flex-col items-center">
            <ItemDetail details={details} />
        </div>


    );



};
 export default ItemDetailContainer;