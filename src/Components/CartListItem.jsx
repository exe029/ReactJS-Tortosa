import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import CartItem from "./CartItem";
import { FaRegWindowClose } from "react-icons/fa";



const CartListItem = () => {
    const cartContext = useContext(CartContext);
    const {cart, deleteCart, removeItemById} = cartContext;
 
    return(
        <section className="flex flex-col justify-evenly object-contain bg-neutral-200 opacity-90 w-full h-full">
            <div>
                <table className=" table-fixed w-full border border-slate-600 uppercase border-separate border-spacing-3">
                    <thead>
                        <tr>
                            <th>productos</th>
                            <th>precio</th>
                            <th>cantidad</th>
                            <th>total</th>
                            <th></th>
                        </tr>
                    </thead>
                </table>
            {cart ? (cart.map(product =>{
                return( <CartItem key={product.id}
                    item={product}
                    removeItemById={removeItemById}
                    
                    /> );
                }))
                : <p>cargando productos</p>
            }
            </div>
            <div className="">

            {cart.length ? <button className="rounded-md border-solid border-2 p-1 font-semibold bg-violet-300 hover:bg-black hover:text-white border-black hover:scale-90"  onClick={deleteCart}>
                
                Vaciar Carrito</button>
                : <p>No Hay Productos en el Carrito</p>    
                
            }
            </div>

        </section>

    );

};

export default CartListItem;