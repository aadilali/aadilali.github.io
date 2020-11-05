import React, { useState, useEffect, useContext }  from 'react';

import {NavLink} from 'react-router-dom';
import AddToCart from './AddToCart';

// import CartContext from '../../../contexts/CartContext';

import NewForm from '../NewForm';
import { setTechnology, store, addProduct } from '../../../reducres/counterReducer';
import { mapStateToProps, mapDispatchToProps } from '../../../reducres/mapStateToProps';

import { connect } from 'react-redux';
function TopProducts(props) {
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // const [cObj, myupdateCart] = useContext(CartContext);
    
    useEffect(() => {

        document.title = "Products";

        fetch("https://fakestoreapi.com/products?limit=6")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
                )
    }, []);

    const addToCart = (pObj) => {

        //props.addToCart(pObj);
       // mapDispatchToProps.addToCart(addProduct(pObj))
       // store.dispatch(addProduct(pObj));
        // debugger;
        // // Traverse Current cObj
        // let stateObj =  {
        //     ...store.getState()
        // };
        // let cartitemObj = null;
        // let currentCart = {
        //     pid: pObj.pid,
        //     title: pObj.title,
        //     price: pObj.price,
        //     image: pObj.image,
        //     qty: 1
        // }
        // // const isExist = cObj.product.findIndex( proItem => {
        // //     return proItem.pid === currentCart.pid;
        // // });
        
        // const isExist = stateObj.product.findIndex( proItem => {
        //         return proItem.pid === currentCart.pid;
        //     });

        // if(isExist > -1) {
        //     //cartitemObj = {...store.getState()};
        //     stateObj.product[isExist].qty +=1;
        //     store.dispatch(addProduct(stateObj));
        // } else {
        //     //stateObj.product.push(currentCart);
               
        // }
       // myupdateCart();
    } 

    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
            return(
                <section className="categories-area section-padding3">
                    <div className="container">

                        {/* <NewForm /> */}
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-tittle mb-70">
                                    <h2>What Services you will Get from me!</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                items.map(item => (
                                    <div className="col-lg-4 col-md-6 col-sm-6" key={ item.id }>
                                        <div className="single-cat text-center mb-50">
                                            <div className="cat-icon">
                                                <span className="product-image"><img src={ item.image } alt={item.title} /></span>
                                            </div>
                                            <div className="cat-cap">
                                                <h5><NavLink to={ '/product/'+item.id }>{ item.title }</NavLink></h5>
                                                <p><strong>Price: </strong>{item.price}</p>
                                                <p>{ item.description }</p>
                                                <AddToCart pid={item.id} title={item.title} price={item.price} image={item.image} />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            );
      }
}

// const mapStateToProps = (state)=>{
//     return {
//        product: state.product
//     }
//   }
// const mapDispatchToProps= (dispatch)=>{
    
//     return{
//         addToCart: (pObj)=>{dispatch(addProduct(pObj))}
//     }
// }

export default connect(mapStateToProps,mapDispatchToProps)(TopProducts)

// export default TopProducts;