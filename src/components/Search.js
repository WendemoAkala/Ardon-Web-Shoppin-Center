import React, {useRef, useState, useEffect} from "react";
import {search} from "../services/api";
import "../Styles/Search.css";
import ItemList from "../components/Items/ItemList";

function Search(){
  const userRef = useRef();
  const [searchQuery, setSearchQuery] = useState('');

  const [searchResults, setSearchResults] = useState([]);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (userRef.current) {
    userRef.current.focus();
    }
  }, [searchResults,searchQuery]);  

  const handleSearch =  async () => {
    try {
      const searchFilter = {
        title: searchQuery,
      };
      const response = await search( searchFilter);
        console.log(response.data);
        setSearchResults(response.data);
        setSuccess(true);
        setError('');
    } catch (error) {
      console.error('Error during search:', error);
      setError('An error occurred while searching.');
      setSearchResults([]);
      setSuccess(false);
    }
  };
  

  return (
    <div className="search-engine">
        {success ? (
            <section>
                  {searchQuery.length === 0 ? (
                    <p>No items found.</p>
                  ) : (
                    <div className='menuList'>
                      {searchResults.map((item) => (
                        <div key={item.name}>
                            <ItemList
                              key = {item.id}
                              image = {item.image}
                              name = {item.name}
                              price = {"Price: " + item.price}
                              stock = {"Stock: " + item.stock}
                              />
                        </div>
                      ))}
                    </div>
                  )}
              </section>
          ) : (
              <section>
                    <input
                      type="text"
                      ref={userRef}
                      placeholder="search for word...."
                      title="Type in a name"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button id="search-icon" onClick={handleSearch}>Search</button>
                    {error && <p className="error-message">{error}</p>}
              </section>
          )
        }
    </div>
  );
}
  export default Search;
