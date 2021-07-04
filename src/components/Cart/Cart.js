import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const totalPrice = cart.reduce((total,prd) => total + prd.price,0)
    let total = 0;
    for(let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total += product.price;
    }
    let shipping = 0
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }
    const tax = Math.round(total / 10);
    const totalPrice = Math.round(total);
    const grandTotal = Math.round(tax + totalPrice + shipping);
    return (
        <div>
            <h4>Order Summary</h4>
            <h2>Items Number:{cart.length}</h2>
            <p>Product Price: {totalPrice}</p>
            <p><small>shippingCost: {shipping}</small></p>
            <p>Tax + Vat :{tax}</p>
            <p>Total Price:{grandTotal}</p>
        </div>
    );
};

export default Cart;