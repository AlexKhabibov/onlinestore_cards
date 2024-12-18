import React, { useState, useEffect } from 'react';
import ProductCard from './productCard';
import { styles } from '../styles';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    return (
        <div style={styles.list}>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    productName={product.title}
                    productImage={product.image}
                    productDescription={product.description}
                    productLink={product.id}
                />
            ))}
        </div>
    );
};

export default ProductList;