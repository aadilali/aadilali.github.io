import React, { useState, useMemo } from "react";

import Header from "../Header/Header";
import Hero from "../Content/Hero/Hero";
import TopProducts from "../Content/Products/TopProducts";
import ProductDetail from "../Content/Products/ProductsDetail";
import CartContext, { products } from "../../contexts/CartContext";
import Cart from "../Content/Products/Cart";
import { Provider, ReactReduxContext } from 'react-redux';
import { Route, Redirect, Switch } from "react-router-dom";
import HelloWorld from "./HelloWorld";

import { setTechnology, store } from '../../reducres/counterReducer';
import { mapStateToProps, mapDispatchToProps } from '../../reducres/mapStateToProps';
import { connect } from 'react-redux';



function App() {
  //const [pObj, setCart] = useState(products);

  // const updateData = () => {
  //   setCart(
  //     {
  //       products: pObj
  //     }
  //   )
  // }

  return (
      <div className="App">
         {/* <HelloWorld tech={props.tech} />  */}
        {/* <button onClick={() => props.setTechnology('REACT')}>React</button>
        <button onClick={() => props.setTechnology('ANGULAR')}>Angular</button>
        <button onClick={() => props.setTechnology('WORDPRESS')}>WordPress</button> */}
       {useMemo(
          () => (
            <Header />
          ),
          []
        )} 
        {/* <Route path='/home' render={ props =>
          <div>
            <Hero />
            <TopProducts />
          </div>
        } /> */}
        <Switch>
          <Route path="/products" component={TopProducts} />
          <Route path="/product/:pid" component={ProductDetail} />
          {/* <Route path="/cart" component={Cart} /> */}
          <Route path="/" component={Hero} />
        </Switch>
      </div>
  );
}

export default App;

