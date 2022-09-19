import NavBar from '../Components/NavBar';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Footer from '../Components/Footer';
import ItemListContainer from '../Components/ItemListContainer';
import DetailPage from '../Pages/DetailPage';
import CartPage from '../Pages/CartPage';


const AppRoutes = () => {
  return (
    <BrowserRouter>
        <NavBar />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path="/detail/:productsid" element={<DetailPage />} />
        <Route exact path='/cart' element={<CartPage/>}/>
        <Route exact path="/productos/:categoryid" element={<ItemListContainer />}/>
        
      
      </Routes>
        <Footer />
      
      </BrowserRouter>
  )
}

export default AppRoutes