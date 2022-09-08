import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  
 
  
  return (
    <>
    
      <NavBar />
      <ItemListContainer title="GAMING ZONE" />
      
    </>
  );
};
