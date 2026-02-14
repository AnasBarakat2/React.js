import logo from './logo.svg';
import './App.css';
import ClassPage from './component/classComponent';
import Navbar from './component/navbar';
import Footer from './component/footer';
import Home from './component/Home';
import Product from './component/Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SubProduct from './component/subProduct';

function App() {
  return (
   <BrowserRouter>
   <Navbar/>

  <Routes>
     
     <Route path='/' Component={Home}></Route>
     <Route path='/Product' Component={Product}></Route>
      <Route path='/subprod' Component={SubProduct}></Route>
     

  </Routes>


   <Footer/>

   </BrowserRouter>
  );
}

export default App;
