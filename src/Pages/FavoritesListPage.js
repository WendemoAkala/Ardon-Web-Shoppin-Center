import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getFavorites, addToFavorites, removeFromFavorites } from '../services/api';
import ItemList from '../components/Items/ItemList';

function FavoriteListPage() {
  const { userId,item } = useParams();
  const [favorites, setFavorites] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');



  useEffect(() => {
    const fetchFavorites = async () => {
      try{
      const favoritesData = await getFavorites(userId);
      setFavorites(favoritesData);
    } catch (error) {
      setError('Error fetching favorites. Please try again.');
      console.error('Error fetching favorites:', error);
    }
    };

    fetchFavorites();
  }, [ userId]);

  const handleAddToFavorites = async () => {
    try{
      const favoriteBody = {
        userId: userId,
        item: item,
      }
    const response = await addToFavorites(favoriteBody);
    setFavorites((prevFavorites) => [...prevFavorites, response]);
    setSuccessMessage('Item added to favorites successfully!');
  } catch (error) {
    setError('Error adding to favorites. Please try again.');
    console.error('Error adding to  favorites:', error);
  }
  };

  const handleRemoveFromFavorites = async (itemId) => {
    try{
      await removeFromFavorites(userId,itemId);
      setFavorites((prevFavorites) => prevFavorites.filter((favorite) => favorite.id !== itemId));
      setSuccessMessage('Item removed from favorites successfully!');
  } catch (error) {
    setError('Error removing from favorites. Please try again.');
    console.error('Error removing from favorites:', error);
  }
  };

  return (
    <div>
      <h2>Your Favorite Items</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.id}>
          
            <span>{favorite.item}</span>
            <button onClick={() => handleRemoveFromFavorites(favorites.item.itemId)}>Remove from Favorite</button>
          </li>
        ))}
      </ul>
      <ItemList 
        items={favorites}
        onAddToCart={() => handleAddToFavorites(favorites.item)}
      />
    </div>
  );
};
export default FavoriteListPage;
