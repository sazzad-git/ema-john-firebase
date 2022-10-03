import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import {  addToDb, getStoredCart } from '../../utilities/fakedb';
import './Shop.css';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/uaeCart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart([]);
    const [displayProducts, setDisplayProducts] = useState([])

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            })
    }, []);

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addededProduct = products.find(product => product.key === key);
                if (addededProduct) {
                    const quantity = savedCart[key];
                    addededProduct.quantity = quantity;
                    storedCart.push(addededProduct);
                }
            }
            setCart(storedCart);
        }
    }, [products]);

    const handleAddToCart = product => {
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = []
        if(exists){
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        // console.log(newCart);
        setCart(newCart);
       // save to local storage (for now)
       addToDb(product.key)
    };

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchProduct);
        console.log(matchProduct.length);
    }

    return (
        <>
            <div className="search-container">
                <input 
                type="text" 
                onChange={handleSearch}
                placeholder='Search Product' />
            </div>
            <div className='shop-container'>
                <div className='product-container'>
                    {
                        displayProducts.map(product => <Product
                            handleAddToCart={handleAddToCart}
                            key={product.key}
                            product={product}
                        ></Product>)
                    }
                </div>
                <div>
                    <Cart cart={cart}>
                        <Link to='/review'>
                        <button className="btn-common">Review Your Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;