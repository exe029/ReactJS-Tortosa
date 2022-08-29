import { useState } from 'react'
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';



export default function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer title="GAMING ZONE" />
    </>
  );
}
