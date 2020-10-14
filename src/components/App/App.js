import React, {useState, useMemo} from 'react';

import Header from '../Header/Header';
import Hero from '../Content/Hero/Hero';
import TopProducts from '../Content/Products/TopProducts';
import ProductDetail from '../Content/Products/ProductsDetail';
import CartContext, { products } from '../../contexts/CartContext';
import Cart from '../Content/Products/Cart';

import { Route, Redirect, Switch } from 'react-router-dom';

function App() {

  const[pObj, setCart] = useState(products);

  // const updateData = () => {
  //   setCart(
  //     {
  //       products: pObj
  //     }
  //   )
  // }
  console.log("APP");

  return (
    <CartContext.Provider value={[products, () => ( setCart({ abc: pObj }))]}>
      <div className="App">
        { useMemo( () => <Header /> ,[] )}
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
          <Route path='/cart' component={Cart} />
          <Redirect to='/home' />
        </Switch>
      </div>
    </CartContext.Provider>
  );
}

export default App;
