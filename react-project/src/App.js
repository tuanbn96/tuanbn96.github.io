import React from 'react';
import Home from './pages/Home';
import Products from './pages/Products';
import Tintuc from './pages/Tintuc';
import Cart from './pages/Cart';
import Erro from './pages/Errro';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import ChinhSach from './pages/ChinhSach';

import Product from './pages/product';
import {CartProvider} from './contexxs/cart';
import {Route, Switch ,BrowserRouter as Router} from 'react-router-dom';


import './style/App.css';

function App() {
  return (
    <CartProvider>
   <Router >
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
          <Route path="/Ctproduct/:slug:id.html">
            <Product />
          </Route>
          <Route path='/:slug'>
            <Erro />
          </Route>
      </Switch>
    </Router>
      </CartProvider>
   
  );
}

export default App;
