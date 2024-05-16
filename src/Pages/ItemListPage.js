import React, { useState, useEffect } from 'react';
import {getAllItems} from "../services/api"

function ItemListPage() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getAllItems()
            .then(response => {
              setItems(response.data);
              setLoading(false);
            })
            .catch(error => {
              console.error('Error fetching items:', error);
              setError('An error occurred while fetching items.');
              setLoading(false);
            });
    }, []);

  return (
      <div>
            <h2>Available Items</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && (
              <ul>
                {items.map(item => (
                  <li key={item.id}>
               
                    <p>Item ID: {item.id}</p>
                    <p>Name: {item.title}</p>
                    <p>Image: {item.photoUrl}</p>
                    <p>Price: {item.price}</p>
                
                  </li>
                ))}
              </ul>
            )}
      </div>
  );
}

export default ItemListPage;
