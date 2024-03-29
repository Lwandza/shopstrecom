import React from 'react'
import { useStateVale } from '../../Provider/StateProvider'
import "./Product.css"


function Product({id,title, image, price, rating}) {
        const [{basket}, dispatch] = useStateVale();
       

        const addToBasket= () => {
            dispatch({
                type: 'ADD_TO_BASKET',
                item: {
                    
                    title: title,
                    image: image,
                    price: price,
                    rating: rating,
                },
            });
        }
    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__price"><small>$</small><strong>{price}</strong></p>
                <div className="product__rating">
                    {Array(rating).fill().map((_,i) => (
                        <p>⭐</p>
                    ))}
                    
                </div>
            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product
