import React from 'react';
import useCart from '../../Hooks/uaeCart';
import useProducts from '../../Hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { useNavigate } from 'react-router-dom';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useNavigate();



    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    };

    const handleProcedToShipping = () => {
        
        // setCart([]);
        // clearTheCart();
        history('/shipping');
    }


    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        handleRemove={handleRemove}
                        product={product}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <button onClick={handleProcedToShipping} className="btn-common">Proceed to Shipping</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;