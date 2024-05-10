import React from 'react';
import {Items} from "../components/Items/Items";
import ItemList from '../components/Items/ItemList';
import "../Styles/Menu.css";
import {  createItem, addToFavorites, removeFromFavorites } from '../services/api';

function Menu(props) {
  
   const handleAddToCart = async (item) => {
    try {
      await createItem(item);
    console.log('Added to cart:', item);
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
  };
  const handleAddToFavorites = async (item) => {
    try {
      await addToFavorites(item);
    console.log('Added to favorites:', item);
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
};

  const handleRemoveFromCart = async (itemId) => {
    try {
      await removeFromFavorites(itemId);
    console.log('Removed from cart:', itemId);
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
};

  return (
    <div className='menu'>
       <h1 className='menuTitle'>Our Products</h1>
       <div className='menuList'>
        {Items.map((item) => (
          
                  <ItemList
                  key = {item.id}
                  image = {item.image}
                  name = {item.name}
                  price = {"Price: " + item.price}
                  stock = {"Stock: " + item.stock}
                  onAddToCart={() => handleAddToCart(item)}
                  onRemoveFromCart={() => handleRemoveFromCart(item.id)}
                  onAddToFavorites={() => handleAddToFavorites(item.id)}
                  />

         ))}
    </div>
    </div>
  );
}

export default Menu;
