import NavBar from './Components/NavBar';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import ItemListContainer from './Components/ItemListContainer';
import DetailPage from './Pages/DetailPage';


export default function App() {
  return (
      <BrowserRouter>
        <NavBar />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path="/detail/:productsid" element={<DetailPage />} />
        <Route exact path="/productos/:categoryid" element={<ItemListContainer />}/>
        
      
      </Routes>
        <Footer />
      
      </BrowserRouter>
  );
}