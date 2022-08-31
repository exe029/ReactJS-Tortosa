import { useState } from 'react'
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemCount from './Components/ItemCount';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';



export default function App() {
  
  const onAdd = (qty) => {
    
    alert(`Agregaste ${qty} productos`)};
  
  return (
    <>
      <NavBar />
      <ItemListContainer title="GAMING ZONE" />
      <ItemCount onAdd={onAdd} initial={1} stock={4} />
      <ToastContainer />
    </>
  );
};
