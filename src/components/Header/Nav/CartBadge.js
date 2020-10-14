import React, { useContext } from 'react';

import CartContext from '../../../contexts/CartContext';

function CartBadge() {
    
    const[cartObj] = useContext(CartContext);

    //const cartObj = props.context_object;
    console.log('BADGE');
    let totalItem = 0;
    if(cartObj.product.length) {
        cartObj.product.map( proItem => {
            return totalItem += proItem.qty;
        })
    } 
    // useEffect(() => {

    //     console.log(cartObj);
    //     if(cartObj.product.length) {
    //         cartObj.product.map( proItem => {
    //             totalItem += proItem.qty;
    //         })
    //     } 
       
    // }, [cartObj]);

    return ( 
        <button className="btn">
            <i className="fa fa-shopping-basket"></i>
            <span className="badge">{totalItem}</span>
        </button>
     )
    
}
 
export default CartBadge;