import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart = products=>{
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        if(products.length){
            const savedCart = getStoredCart();
            const storedCart = [];
            for(const key in savedCart){
                const addededProduct= products.find(product => product.key === key);
                if(addededProduct){
                    // set quantity
                    const quantity = savedCart[key];
                    addededProduct.quantity = quantity;
                    storedCart.push(addededProduct);
                }
            }
            setCart(storedCart);
        }
    }, [products]);
    return [cart, setCart];
}
export default useCart;