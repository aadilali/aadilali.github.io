import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../../../reducres/mapStateToProps';

import { connect } from 'react-redux';
import NewForm from '../NewForm';

// import CartContext from '../../../contexts/CartContext';


function Cart(props) {
    
    // const [cObj, updateCart] = useContext(CartContext);
    const cObj = props.product;
    console.log(cObj);
    let finalTotal = 0;

    const addCartQty = (currentObj) => {
        // Traverse Current cObj
        
       //store.dispatch(addProduct(currentObj));
       props.setCart(currentObj);
            
    }

    const removeCartQty = (currentObj) => {

        if(currentObj.qty){
            
           // store.dispatch(removeProduct(currentObj));
           props.removeCartQty(currentObj);
                
        } else {
            return
        }
    } 

    const updateCartQty = (event, currentObj) => {
        let qtyVal = parseInt(event.target.value);

        if(qtyVal === 0 || qtyVal === '0' || qtyVal === ''){
            return
        } else {
            currentObj.qty = qtyVal;
            props.updateCart(currentObj);
        }

            
    }

    // const updateCartQty = (event, currentObj) => {

    //     let qtyVal = event.target.value;
    //     setCartQty( (preState) => ({
    //          ...preState,
    //          qty: qtyVal
    //     }));
    //    if(currentObj.qty) {
    //     // props.updateCart(currentObj.qty)
    //         console.log("working ", event.target.value);
    //    } 
    // } 

    const checkoutCart = () => {

        console.log(cObj);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cObj)
        };
        fetch('https://fakestoreapi.com/carts', requestOptions)
            .then(res => {
                return res.json();
            })
            .then(
                (res) => {
                  //  setIsLoaded(true);
                  //  setProduct(res);
                  //  cache[url] = res; // set response in cache;
                  console.log(res);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    // setIsLoaded(true);
                    // setError(error);
                    console.log(error);
                }
            );
    }

    return (  
      
        <section className="categories-area section-padding3">
            <NewForm />
            <div className="container">
                <div className="row" style={{ border: "1px solid #000"}}>
                    <div className="col-lg-3 col-md-3 col-sm-3" style={{ border: "1px solid #000", backgroundColor: "#ccc", padding: "15px 0"}}>Image</div>
                    <div className="col-lg-3 col-md-3 col-sm-3" style={{ border: "1px solid #000", backgroundColor: "#ccc", padding: "15px 0"}}>Product</div>
                    <div className="col-lg-2 col-md-2 col-sm-2" style={{ border: "1px solid #000", backgroundColor: "#ccc", padding: "15px 0"}}>Price</div>
                    <div className="col-lg-2 col-md-2 col-sm-2" style={{ border: "1px solid #000", backgroundColor: "#ccc", padding: "15px 0"}}>Qty</div>
                    <div className="col-lg-2 col-md-2 col-sm-2" style={{ border: "1px solid #000", backgroundColor: "#ccc", padding: "15px 0"}}>Total</div>
                </div>
                {
                   
                    cObj.map( proItem => (
                        
                        <div className="row" key={ proItem.pid } style={{ border: "1px solid #000"}}>
                            <span style={{ display: "none" }}>{finalTotal += proItem.price * proItem.qty}</span>
                            
                            <div className="col-lg-3 col-md-3 col-sm-3" style={{ border: "1px solid #000"}}><img src={proItem.image} alt={proItem.title} style={{width: "80px"}} /></div>
                            <div className="col-lg-3 col-md-3 col-sm-3" style={{ border: "1px solid #000"}}>{proItem.title}</div>
                            <div className="col-lg-2 col-md-2 col-sm-2" style={{ border: "1px solid #000"}}>{proItem.price}</div>
                            <div className="col-lg-2 col-md-2 col-sm-2" style={{ border: "1px solid #000"}}>
                                
                                <button className="boxed-btn" style={{ padding: "5px"}} onClick={removeCartQty.bind(this, proItem)}>
                                    {(proItem.qty === 1) ? <i className="fa fa-trash"></i> : <i className="fa fa-minus"></i>}
                                </button>

                                {/* <CartQtyInput proItem={proItem} handleChange={updateCartQty} /> */}
                                <input min="1" type="number" onChange={ (e) => updateCartQty(e, proItem)} value={proItem.qty} style={{width: "100%"}} />

                                <button className="boxed-btn" style={{ padding: "5px"}} onClick={addCartQty.bind(this, proItem)}><i className="fa fa-plus"></i></button>

                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2" style={{ border: "1px solid #000"}}>{proItem.price * proItem.qty}</div>
                        </div>
                   ))
                    //<AddToCart pid={product.id} title={product.title}/>
                    
                }

                <div className="row text-right" style={{ border: "1px solid #000"}}>
                    <div className="col-lg-6 col-md-6 col-sm-6" style={{ border: "1px solid #000", backgroundColor: "#ccc", padding: "15px 0"}}><strong>Total</strong></div>
                    <div className="col-lg-6 col-md-6 col-sm-6" style={{ border: "1px solid #000", backgroundColor: "#ccc", padding: "15px 0"}}><strong>{finalTotal}</strong></div>
                </div>
                
                {
                    (cObj.length < 1) ? 'Cart is Empty' : ''
                }
            </div>
            {
                (cObj.length > 1) ? <div className=""><button className="btn btn-primay" onClick={checkoutCart}>Checkout</button></div> : ''
            }

        </section>
    )
    
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Cart);
