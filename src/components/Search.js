import React,{useState} from 'react';
import axios from 'axios';
import ".Search.css";

function Search(){
const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/public/items/search?name=${searchQuery}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error during search:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {searchResults.length === 0 ? (
        <p>No items found.</p>
      ) : (
        <ul>
          {searchResults.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  
  );
          };
  export default Search;
