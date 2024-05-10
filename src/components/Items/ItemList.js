import React from 'react';


function ItemList({image, name, price, stock, onAddToCart, onAddToFavorites, onRemoveFromCart }) {
  return (
    <div className='menuItem'>
      <div style={{backgroundImage: `url(${image})`}}></div>
      <h1> {name} </h1>
      <p> {price}$ </p>
      <p> {stock} </p>
       <button onClick={ onAddToCart}>Add to Cart</button> 
       <button onClick={ onRemoveFromCart}>Remove from Cart</button> 
       <button onClick={ onAddToFavorites}>Add to favorites</button> 
    </div>
  );
}

export default ItemList;
