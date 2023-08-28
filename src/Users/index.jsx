import React from 'react'
import UserNav from './Component/UserNav'
import { Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import Item from './Page/Item'
import RestuarentDetail from './Page/RestuarentDetail'
import ItemPage from './Page/ItemPage'
import './index.css'
import CategoryPage from './Page/CategoryPage'
import RestuarentItem from './Page/RestuarentItem'
import Footer from './Component/Footer'


function index() {
  
  return (
      <>   
    
      <UserNav/>     
      <Routes>
        <Route path="/*" element={<Home/>} />
      <Route path="/item" element={<Item/>} />
      <Route path="/restuarent" element={<RestuarentDetail/>} />
      <Route path="/category/:CategoryName" element={<CategoryPage/>}/>
      <Route path="/item/:_id" element={<ItemPage/>} />
      <Route  path="/restuarent/:RestuarentName" element={<RestuarentItem/>} />
      {/* <Route path="/item" element={<Item/>} /> */}
    </Routes>
    <Footer/>
      </>
  )
}

export default index