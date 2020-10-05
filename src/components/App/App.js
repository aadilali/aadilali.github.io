import React from 'react';

import Header from '../Header/Header';
import Hero from '../Content/Hero/Hero';
import TopProducts from '../Content/Products/TopProducts';
import ProductDetail from '../Content/Products/ProductsDetail';

import { Route, Redirect, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      {/* <Route path='/home' render={ props =>
        <div>
          <Hero />
          <TopProducts />
        </div>
      } /> */}
      <Switch>
        <Route path='/home' component={Hero} />
        <Route path='/products' component={TopProducts} />
        <Route path='/product/:pid' component={ProductDetail} />
        <Redirect to='/home' />
      </Switch>
    </div>
  );
}

export default App;
