import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';


function App() {

  return (
    <div>
      <Router>
        <Navbar/>
      <br />
      <div className='App'>
      <h2> * Grab Your Dream Mobile *</h2>
      <p> Let's Get Started </p>
      </div>
        <Routes>
          <Route path="/"  element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes> 
      </Router>
       
    </div>
  );
}

export default App;
