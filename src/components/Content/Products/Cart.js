import React, { useContext } from 'react';
import CartContext from '../../../contexts/CartContext';


function Cart() {
    
    const [cObj, updateCart] = useContext(CartContext);

    console.log(cObj);
    let finalTotal = 0;

    const addCartQty = (currentObj) => {
        console.log("Update Cart PLUS", currentObj);
        // Traverse Current cObj
        const isExist = cObj.product.findIndex( proItem => {
            return proItem.pid === currentObj.pid;
        });

        if(isExist > -1) {
            console.log("FIND ", isExist);
            cObj.product[isExist].qty +=1;

        } else {
            cObj.product.push({...currentObj, 'qty': 1});
        }
            
        updateCart();
    }

    const removeCartQty = (currentObj) => {

        if(currentObj.qty){
            console.log("Update Cart MINUS", currentObj);
            // Traverse Current cObj
            const isExist = cObj.product.findIndex( proItem => {
                return proItem.pid === currentObj.pid;
            });

            if(isExist > -1) {
                console.log("FIND ", isExist);

                (cObj.product[isExist].qty === 1)? cObj.product.splice(isExist, 1) : cObj.product[isExist].qty -= 1;
 
            } 
                
            updateCart();
        } else {
            return
        }
    } 

    return (  
      
        <section className="categories-area section-padding3">
            <div className="container">
                <div className="row" style={{ border: "1px solid #000"}}>
                    <div className="col-lg-3 col-md-3 col-sm-3" style={{ border: "1px solid #000", backgroundColor: "#ccc", padding: "15px 0"}}>Image</div>
                    <div className="col-lg-3 col-md-3 col-sm-3" style={{ border: "1px solid #000", backgroundColor: "#ccc", padding: "15px 0"}}>Product</div>
                    <div className="col-lg-2 col-md-2 col-sm-2" style={{ border: "1px solid #000", backgroundColor: "#ccc", padding: "15px 0"}}>Price</div>
                    <div className="col-lg-2 col-md-2 col-sm-2" style={{ border: "1px solid #000", backgroundColor: "#ccc", padding: "15px 0"}}>Qty</div>
                    <div className="col-lg-2 col-md-2 col-sm-2" style={{ border: "1px solid #000", backgroundColor: "#ccc", padding: "15px 0"}}>Total</div>
                </div>
                {
                   
                    cObj.product.map( proItem => (
                        
                        <div className="row" key={ proItem.pid } style={{ border: "1px solid #000"}}>
                            <span style={{ display: "none" }}>{finalTotal += proItem.price * proItem.qty}</span>
                            <div className="col-lg-3 col-md-3 col-sm-3" style={{ border: "1px solid #000"}}><img src={proItem.image} alt={proItem.title} style={{width: "80px"}} /></div>
                            <div className="col-lg-3 col-md-3 col-sm-3" style={{ border: "1px solid #000"}}>{proItem.title}</div>
                            <div className="col-lg-2 col-md-2 col-sm-2" style={{ border: "1px solid #000"}}>{proItem.price}</div>
                            <div className="col-lg-2 col-md-2 col-sm-2" style={{ border: "1px solid #000"}}>
                                
                                <button className="boxed-btn" style={{ padding: "5px"}} onClick={removeCartQty.bind(this, proItem)}>
                                    {(proItem.qty === 1) ? <i className="fa fa-trash"></i> : <i className="fa fa-minus"></i>}
                                </button>
                                {proItem.qty}
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
                    (cObj.product.length < 1) ? 'Cart is Empty' : ''
                }
            </div>
        </section>
    )
    
}
 
export default Cart;
