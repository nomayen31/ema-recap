import React from 'react';
import './cart.css'

const Cart = ({cart}) => {
    return (
        <div>
            <h3>Order summary</h3>
            <p>Selected items {cart.length}</p>
        </div>
    );
};

export default Cart;