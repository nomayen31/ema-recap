import React from 'react';
import './cart.css'

const Cart = (props) => {
    const {cart} =props;
    // console.log(cart);
   
    let total = 0;
    let shipping =0;
    let quentaty =0
    for(const product of cart){
        quentaty =quentaty+product.quentaty;
            total= total + product.price * product.quentaty;
            shipping=shipping+product.shipping;
    }
    const tax = parseFloat((total *0.1).toFixed(2))


    const grandTotal =total+shipping+tax;
    return (
        <div className='cart'>
            <h3>Order summary</h3>
            <p>Selected items {cart.quentaty}</p>
            <p>Total Price:{total}</p>
            <p>Total Shipping:{shipping}</p>
            <p>tax:{tax}</p>
            <h5>Grand Total:{grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;