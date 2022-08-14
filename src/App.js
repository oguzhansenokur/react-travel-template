import React from "react";
import Home from "./pages/home";
import Navbar from './components/navbar'
import { Routes,Route,Link ,Switch} from "react-router-dom";
import { AboutUs } from "./pages";
function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}  />
    <Route path='about-us' element={<AboutUs/>} />
    <Route path='gallery' />
    <Route path='blog' />
    <Route path='sign-in' />


   
   </Routes>
   </>
  );
}

export default App;
