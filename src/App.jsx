import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer';

export default function App() {
  return (
    <div className="bg-gray-900">
      <NavBar />
      <ItemListContainer title="GAMING ZONE" />
      <ItemDetailContainer id={3} />
    </div>
  );
}