import React from "react";
import { FaTrashAlt } from "react-icons/fa";


const CartItem = ({item, removeItemById}) => {
  
    
    return (
        /*<article className="grid grid-cols-4 gap-4">
           <div className="item-center text-center p-2">Product:
                <h2> {item.name}</h2>
            </div>
            <div className="item-center text-center p-2">Price 
                <h2>Usd {item.price}</h2>
            </div>
            <div className="item-center text-center p-2">Cantidad:
                <h2><strong> </strong>{item.qty}</h2>
                </div>
                <div className="item-center text-center p-2">Total:
                <h2><strong> </strong>${item.qty * item.price}</h2>                
                <h2 className="p-2">
                <FaTrashAlt className="w-full h-4 cursor-pointer" onClick={()=>removeItemById(item.id)}></FaTrashAlt>                
                </h2>
                </div>
                </article>*/

    <div>

        <table className=" table-fixed w-full border border-slate-400 border-separate border-spacing-2 hover:bg-violet-400">
            
            <tbody>
                <tr>
                    <td>{item.name}</td>
                    <td>Usd {item.price}</td>
                    <td>{item.qty} </td>
                    <td>Usd {item.qty * item.price}</td>
                    <td><FaTrashAlt className="w-full h-4 cursor-pointer hover:scale-90" onClick={()=>removeItemById(item.id)}></FaTrashAlt></td>
                </tr>                
                
            </tbody>
        </table>
        

    </div>
   


    );
};

export default CartItem;