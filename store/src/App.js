import logo from './logo.svg';
import './App.css';
import ClassPage from './component/classComponent';
import Navbar from './component/navbar';
import Footer from './component/footer';
import Home from './component/Home';
import Product from './component/Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Navbar/>

  <Routes>
     
     <Route path='/' Component={Home}></Route>
     <Route path='/Product' Component={Product}></Route>
     

  </Routes>


   <Footer/>

   </BrowserRouter>
  );
}

export default App;
