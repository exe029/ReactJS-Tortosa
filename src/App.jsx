import { useState } from 'react'
import './App.css'
import NavBar from './Components.js/NavBar';
import ItemListContainer from './Components.js/ItemListContainer';


export default function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer title="GAMER" />
    </>
  );
}
