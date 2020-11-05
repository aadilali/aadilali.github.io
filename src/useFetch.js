import { useState, useEffect } from 'react';

const cache = {};

function useFetch(url) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [product, setProduct] = useState([]);

    useEffect(() => {

        if (!url) return;

        console.log(cache, " CACHE ");

        if (cache[url]) {
            const data = cache[url];
            setProduct(data);
            setIsLoaded(true);
        }

        fetch(url)
            .then(res => {
                let test = res.json();
                return test;
            })
            .then(
                (res) => {
                    setIsLoaded(true);
                    setProduct(res);
                    cache[url] = res; // set response in cache;
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );

    }, [url]);

    return [product, error, isLoaded];
}

export default useFetch;