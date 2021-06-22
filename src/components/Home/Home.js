import React from 'react';
import "./Home.css";
import homepic from "../../assets/images/homepic.jpg";
import Product from "../Product/Product";

import watch from "../../assets/images/watch.jpg"
import iwatch from "../../assets/images/iwatch.jpg"
import phone from "../../assets/images/iphone.jpg"
import roll from "../../assets/images/roll.jpg"
import bottle from "../../assets/images/bottle.jpg"
import nike from "../../assets/images/nike.jpg"
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src={homepic} alt=""/>
                <div className="home__row">
                    <Product 
                        title="iWatch" 
                        price={139.99}
                        image={iwatch}
                        rating={5}/>
                    <Product
                        title="iPhone" 
                        price={599.99}
                        image={phone}
                        rating={4}/>
                   
                </div>
                <div className="home__row">
                    <Product 
                        title="Punk rolls" 
                        price={59.99}
                        image={roll}
                        rating={1}/>
                    <Product
                        title="Water bottle" 
                        price={29.99}
                        image={bottle}
                        rating={3}/>
                    <Product 
                        title="Watch" 
                        price={79.99}
                        image={watch}
                        rating={2}/>
                   
                </div>
                <div className="home__row">
                    <Product
                        title="Nike Running shoes" 
                        price={359.99}
                        image={nike}
                        rating={4}/>
                   
                </div>
            </div>
        </div>
    )
}

export default Home
