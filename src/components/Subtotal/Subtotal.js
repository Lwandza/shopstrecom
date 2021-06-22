import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format';
import { useStateVale } from '../../Provider/StateProvider';
import { getBasketTotal } from '../../Reducer/reducer';
import { Link, useHistory } from 'react-router-dom'

function Subtotal() {
    const [{basket, user}, dispatch] = useStateVale();
    const history = useHistory();
     const payment = () => history.push('/payment');//eg.history.push('/login');
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) =>(
                   <>
                        <p>
                            Subtotal ({basket?.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/> This order contains a gift
                        </small>
                   </> 
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button onClick={payment}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
