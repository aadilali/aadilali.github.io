import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import useFetch from '../../../useFetch';

import AddToCart from './AddToCart';
import CartContext from '../../../contexts/CartContext';


function ProductDetail() {

    let pid = useParams().pid;
    let product = [];
    let isLoaded = false;
    let error = null;
    
    const [cObj, myupdateCart] = useContext(CartContext);
    

        document.title = "Product Details";

        [product, error, isLoaded] = useFetch("https://fakestoreapi.com/products/"+pid);

        console.log("pro Det ", product);
        
        // fetch("https://fakestoreapi.com/products/"+pid)
        //     .then(res => {
        //         let test = res.json();
        //         console.log(test);
        //         return test;
        //     })
        //     .then(
        //         (res) => {
        //             setIsLoaded(true);
        //             setProduct(res);
        //         },
        //         // Note: it's important to handle errors here
        //         // instead of a catch() block so that we don't swallow
        //         // exceptions from actual bugs in components.
        //         (error) => {
        //             setIsLoaded(true);
        //             setError(error);
        //         }
        //         )
   // }, []);

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
                                        <span className="product-image"><img src={ product.image } alt={product.title} /></span>
                                    </div>
                                    <div className="cat-cap">
                                        <h2><a href="services.html">{ product.title }</a></h2>
                                        <p><strong>Price: </strong>{product.price}</p>
                                        <p>{ product.description }</p>
                                    </div>
                                    <AddToCart pid={product.id} title={product.title} image={product.image} price={product.price} cartObj={cObj} cartCallBack={myupdateCart} />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
            );
      }
}

export default ProductDetail;