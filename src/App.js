import React , { } from "react";
import "./App.css";
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'; 
import Header from  './Component/Header';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Productlist from './Component/Productlist';
import Addproduct from './Component/Addproduct';
import EditProduct from './Component/EditProduct';
import Register from "./Component/Loginpage/Register";
import LoginSignup from "./Component/Loginpage/Login";
function App(){
  return(
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path="/login" component={LoginSignup} />

          <Route exact path='/Productlist' element={<Productlist />}/>
          <Route exact path='/addproduct' element={<Addproduct />}/>
          <Route exact path='/editproduct/:id/edit' element={<EditProduct />}/>
          <Route exact path='/Register' element={<Register />}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}
export default App;