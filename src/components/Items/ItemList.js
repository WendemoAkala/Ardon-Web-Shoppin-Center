import React from 'react';


function ItemList({image, name, price, stock, onAddToCart, onRemoveFromCart }) {
  return (
    <div className='menuItem'onChange={ onAddToCart}>
      <div style={{backgroundImage: `url(${image})`}}></div>
      <h1> {name} </h1>
      <p> {price}$ </p>
      <p> {stock} </p>
       <button onChange={ onAddToCart}>Add to Cart</button> 
       <button onClick={ onRemoveFromCart}>Remove from Cart</button> 
    </div>
  );
}

export default ItemList;
