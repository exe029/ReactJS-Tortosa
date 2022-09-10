import NavBar from './Components/NavBar';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailPage from './Pages/DetailPage';
import Home from './Pages/Home';
import Footer from './Components/Footer';

export default function App() {
  return (
      <BrowserRouter>
        <NavBar />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path="/detail/:product" element={<DetailPage />} />
        

      
        
        
      
      </Routes>
      <footer/>
      </BrowserRouter>
  );
}