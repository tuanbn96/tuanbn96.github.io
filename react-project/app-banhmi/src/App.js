import React from 'react';
import Home from './pages/Home';
import Products from './pages/Products';
import Tintuc from './pages/Tintuc';
import Cart from './pages/Cart';
import Erro from './pages/Errro';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import ChinhSach from './pages/ChinhSach';
import {CartProvider} from './contexxs/cart';
import Product from './pages/product';

import {Route, Switch } from 'react-router-dom';


import './style/App.css';

function App() {
  return (
    
    <CartProvider>
     <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Products">
            <Products />
          </Route>
          <Route path="/Tintuc">
            <Tintuc />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Cart">
            <Cart />
          </Route>
          <Route path="/Signup">
            <SignUp />
          </Route>
          <Route path="/ChinhSach">
            <ChinhSach />
          </Route>
          <Route path="/product/:slug.:id.html">
            <Product />
          </Route>
          <Route path='/:slug'>
            <Erro />
          </Route>
      </Switch>
    </CartProvider>
    
  );
}

export default App;
