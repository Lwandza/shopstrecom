import React from 'react'
import "./Checkout.css"
import banner from "../../assets/images/cover.png"
import Subtotal from "../Subtotal/Subtotal"
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import { useStateVale } from '../../Provider/StateProvider'

function Checkout() {
    const [{basket, user}, dispatch] = useStateVale();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src={banner} alt=""/>
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {basket.map(item =>(
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
