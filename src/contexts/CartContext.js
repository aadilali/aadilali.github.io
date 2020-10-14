import React from 'react';

export let products = {
    customer_id: '',
    date: new Date(),
    product: []
  };

const CartContext = React.createContext([
    products,
    () => { }
]);

export default CartContext;
