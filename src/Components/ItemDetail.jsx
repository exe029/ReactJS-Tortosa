import React from "react";
import Detail from "./Detail";

const ItemDetail = ({details}) => {
    
    return (
        
        <div className="grid grid-cols-4 gap-4 w-3/4">
            {details.map ((detail) => <Detail key={detail.id} detail={detail} />)}  
            
        </div>


    );


    

};
 export default ItemDetail;