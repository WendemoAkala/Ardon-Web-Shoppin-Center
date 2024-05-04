import React from 'react';
import {Items} from "../components/Items/Items";
import ItemList from '../components/Items/ItemList';
import "../Styles/Menu.css";

function Menu(props) {

  return (
    <div className='menu'>
       <h1 className='menuTitle'>Our Products</h1>
       <div className='menuList'>{Items.map((item,key) => {
         return (
           <div key={key}>
                  <ItemList
                  key = {key}
                  image = {item.image}
                  name = {item.name}
                  price = {"Price: " + item.price}
                  stock = {"Stock: " + item.stock}
                  onAddToCart={item.onAddToCart}
                  onRemoveFromCart={item.onRemoveFromCart}
                  />
        </div>
        );
         })}
    </div>
    </div>
  );
}

export default Menu;
