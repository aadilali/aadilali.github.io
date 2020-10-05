import React, { useState, useEffect }  from 'react';
import {useParams} from 'react-router-dom';

function ProductDetail() {

    let pid = useParams().pid;
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [product, setProduct] = useState([]);
    
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/"+pid)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setProduct(result);
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
                            
                            <div className="col-lg-4 col-md-6 col-sm-6" key={ product.id }>
                                <div className="single-cat text-center mb-50">
                                    <div className="cat-icon">
                                        <span className="product-image"><img src={ product.image } /></span>
                                    </div>
                                    <div className="cat-cap">
                                        <h2><a href="services.html">{ product.title }</a></h2>
                                        <p>{ product.description }</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
            );
      }
}

export default ProductDetail;