import React, { useState, useEffect } from 'react';
import { useParams,Link } from "react-router-dom";
import { getFavorites, addToFavorites, removeFromFavorites } from '../services/api';
import ItemList from '../components/Items/ItemList';

function FavoriteListPage(props) {
  const { userId } = useParams();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try{
      const favoritesData = await getFavorites(userId);
      setFavorites(favoritesData);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
    };

    fetchFavorites();
  }, [userId]);

  const handleAddToFavorites = async (itemId) => {
    try{
    await addToFavorites(userId, itemId);
    setFavorites((prevFavorites) => [...prevFavorites, itemId]);
  } catch (error) {
    console.error('Error adding to  favorites:', error);
  }
  };

  const handleRemoveFromFavorites = async (itemId) => {
    try{
    await removeFromFavorites(userId, itemId);
    setFavorites((prevFavorites) => prevFavorites.filter((id) => id !== itemId));
  } catch (error) {
    console.error('Error removing from favorites:', error);
  }
  };

  return (
    <div>
      <h2>Your Favorite Items</h2>
      <ul>
        {ItemList.map((itemId) =>(
          <li>
            <span>{itemId}</span>
            <button onClick={() => handleAddToFavorites(itemId)}>Add to  Favorite</button>
          </li>
        ))}
      </ul>
      <ul>
        {favorites.map((itemId) => (
          <li key={itemId}>
            {/* Display item details here */}
            <span>{itemId}</span>
            <button onClick={() => handleRemoveFromFavorites(itemId)}>Remove from Favorite</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FavoriteListPage;
