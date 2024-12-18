import React, { useState } from 'react';
import { styles } from '../styles';

function ProductCard({ productName, productImage, productDescription, productLink }) {
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        setIsLiked((prevIsLiked) => !prevIsLiked); // Переключаем состояние лайка
    };

    return (
        <div style={styles.card}>
            <img src={productImage} alt={productName} style={styles.image} />
            <h2 style={styles.title}>{productName}</h2>
            <p style={styles.description}>{productDescription}</p>
            <div style={styles.footer}>
                <button
                    onClick={handleLike}
                    style={isLiked ? { ...styles.likeButton, ...styles.liked } : styles.likeButton}
                >
                    <span style={isLiked ? { ...styles.heartIcon, ...styles.heartIconLiked } : styles.heartIcon}>
                        ♥
                    </span>
                    {isLiked ? "Liked" : "Like"}
                </button>
                {isLiked}
            </div>
        </div>
    );
};

export default ProductCard;