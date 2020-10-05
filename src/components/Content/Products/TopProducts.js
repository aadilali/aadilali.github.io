import React, { useState, useEffect }  from 'react';

import {NavLink} from 'react-router-dom';

function TopProducts() {
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=3")
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

    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
            return(
                <section className="categories-area section-padding3">
                    <div className="container">
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
                                                <span className="product-image"><img src={ item.image } /></span>
                                            </div>
                                            <div className="cat-cap">
                                                <h5><NavLink to={ '/product/'+item.id }>{ item.title }</NavLink></h5>
                                                <p>{ item.description }</p>
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