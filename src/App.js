import Header from './Components/Header';
import HomePage from './Components/HomePage';
import CartPage from './Components/CartPage';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react'

function App() {
  //const [cart, setCart] = useState([]);
  return (
    <BrowserRouter>
    <div className="App">
 
     <Header />
     <Switch>
       <Route path='/' exact>
         <HomePage  />
       </Route>
       <Route path='/cart'>
         <CartPage />
       </Route>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
