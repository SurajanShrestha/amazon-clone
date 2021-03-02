import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from './StateProvider';
import {getBasketTotal} from './reducer';
import {useHistory} from 'react-router-dom';

function Subtotal() {
    const history=useHistory();
    const [{basket,user},dispatch]=useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                value={getBasketTotal(basket)}
                renderText={(value)=>(
                    <div>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /><span>This order contains a gift</span>
                        </small>
                    </div>
                )}
                decimalScale={2}                
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}

            />
            <button onClick={()=>history.push("/payment")}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;
