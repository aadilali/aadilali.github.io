import React, { useState, useEffect, useContext }  from 'react';

import {NavLink} from 'react-router-dom';
import AddToCart from './AddToCart';
import CartContext from '../../../contexts/CartContext';

import NewForm from '../NewForm';

function TopProducts() {
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    
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

    const [cObj, myupdateCart] = useContext(CartContext);

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
                                                <AddToCart pid={item.id} title={item.title} price={item.price} image={item.image} cartObj={cObj} cartCallBack={myupdateCart} />
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

export default TopProducts;