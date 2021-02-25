import React from 'react';
import './Product.css';

const Product = (props) => {
  const {img, name, seller, price, stock} = props.main;
  console.log(props.main);
  return (
    <div className="product">
      <div className="image"><img src={img} alt={name}/></div>
      <div className="info">
        <h4>{name}</h4>
        <small>By {seller}</small>
        <p><b>${price}</b></p>
        <p>Only {stock} items left - order soon</p>
        <button className="main-button">add to cart</button>
      </div>
    </div>
  );
};

export default Product;