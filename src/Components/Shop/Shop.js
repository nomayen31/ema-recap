import React, { useEffect, useState } from 'react';
import { addToDb, getStoresCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import'./Shop.css'

const Shop = () => {
    const[products, setProducts] =useState([]);
    const [cart, setCart]=useState([]);

    useEffect(()=>{
        console.log('product before fetch');
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }, [])

    useEffect(()=>{
        console.log('local storage first line');
        const storedCart = getStoresCart();
        // console.log(storedCart);
        const saveCart = [];
        for(const id in storedCart){
           const addedProduct =products.find(product=>product.id
            === id);
            if (addedProduct) {
                const quentaty =storedCart[id];
                addedProduct.quentaty=quentaty;
                console.log(addedProduct);
                saveCart.push(addedProduct);
            }
        } 
        setCart(saveCart);
        
    },[products])

    const handleAddToCart = (product) =>{
        console.log(product);
        // cart.push(product)
        const newCart =[...cart, product];
        setCart(newCart)
        addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product=>
                    <Product key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product> )
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;