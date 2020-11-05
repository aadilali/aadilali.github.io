import React, { useState, useEffect } from 'react';

function CartQtyInput(props) {
    
    const [cartQty, setCartQty] = useState({qty: 0});

    useEffect(() => {
       
        setCartQty( (preState) => ({
            ...preState,
            qty: props.proItem.qty
       }));

    }, [props.proItem.qty])

    const updateCartQty = (event, currentObj) => {

        let qtyVal = event.target.value;
        setCartQty( (preState) => ({
             ...preState,
             qty: qtyVal
        }));

       if(currentObj.qty) {
            currentObj.qty = cartQty.qty;
            props.handleChange(currentObj); 
            console.log("working ", props);
       } 
    } 
    return ( 
        <input min="1" type="number" onChange={ (e) => updateCartQty(e, props.proItem)} value={cartQty.qty} style={{width: "100%"}} />
     );
}
 
export default CartQtyInput;