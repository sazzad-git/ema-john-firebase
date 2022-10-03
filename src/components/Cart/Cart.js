import React from 'react';

const Cart = (props) => {
    const { cart } = props;

   
    const totalQuantity = cart.reduce((previousQuantity, product) => {
        if (!product.quantity){
            product.quantity = 1;
        }
       return previousQuantity + product.quantity
    } , 0)
    const shipping = cart.reduce((priviousShipping, product) => priviousShipping + product.shipping * product.quantity , 0)

    const total = cart.reduce((priviousTotal, product) => priviousTotal + product.price * product.quantity, 0)

    const tax = (shipping + total) / 10;
    const grandTotal = total + shipping + tax;
    
    return (
        <div>
            <h4>Order summary</h4>
            <p>Items ordered: {totalQuantity}</p>
            <p><small>Shipping & Handling: ${shipping.toFixed(2)}</small></p>
            <p>Total before tax: ${total.toFixed(2)} </p>
            <p><small>Estimated Tax: ${tax.toFixed(2)}</small></p>
            <p>Grand Total: ${grandTotal.toFixed(2)}</p>
            {props.children}
        </div>
    );
};

export default Cart;