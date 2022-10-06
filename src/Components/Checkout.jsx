import React from 'react';

import CartForm from '../Components/CartForm';


const Checkout = () => {
  return (
    <main className="h-min-main flex flex-col items-center m-4 ">
       <div className='bg-neutral-100 rounded-md flex flex-col items-center p-4'>
          <h2 className="text-2xl p-8 capitalize m-2 bg-neutral-100 rounded-md">
            Ingresa tus datos para terminar la compra
          </h2>
          <CartForm />
       </div>
    </main>
  )
}

export default Checkout;