import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  console.log(first10);
  return (
    <div className="shop-container">
      <div className="product-container">
        {
          products.map(productMap => <Product main={productMap} product={productMap.name} key={productMap.key}></Product>)
        }
      </div>
      <div className="cart-container">
        <h3>This is cart</h3>
      </div>
    </div>
  );
};

export default Shop;