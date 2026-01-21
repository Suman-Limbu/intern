import React from 'react'
import NavBar from './Header/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const MainLayout = () => {
  return (
   <>
   <NavBar/>
   <Outlet/>
   <Footer/>
   
   </>
  )
}

export default MainLayout;