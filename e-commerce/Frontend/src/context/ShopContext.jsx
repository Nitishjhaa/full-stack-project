import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";

const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const Indcurrency = '₹';
    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});

    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error('Select Procuct Size');
            return;
        }

        let cartData = structuredClone(cartItems);

        if (!cartData[itemId]) {
            cartData[itemId] = {};
        }

        cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;

        setCartItems(cartData);
        // toast.success('Item Added to Cart')
    };


    const getCartCount = () => {
        let count = 0;
        for (let itemId in cartItems) {
            for (let size in cartItems[itemId]) {
                count += cartItems[itemId][size];
            }
        }
        return count;
    };


    const value = { products, Indcurrency, currency, delivery_fee, search, setSearch, showSearch, setShowSearch, cartItems, addToCart, getCartCount };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export { ShopContext };
export default ShopContextProvider;
