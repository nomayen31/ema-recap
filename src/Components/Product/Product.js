import React from 'react';
import './Product.css'

const Product = ({product, handleAddToCart}) => {
    const{name, img, seller,price, ratings}=product;
  

     
    return (
        <div className='product'>
           <img src={img} alt=""></img>
           <div className='product-info'>
           <p className='product-name'>{name}</p>
           <p>Price :{price}</p>
           <p><small>seller:{seller}</small></p>
           <p><small>ratings:{ratings} stars</small></p>
           </div>
           <button onClick={(()=>handleAddToCart(product))} className='btn-cart'>
            <p>Add to cart</p>
           </button>
        </div>
    );
};

export default Product;