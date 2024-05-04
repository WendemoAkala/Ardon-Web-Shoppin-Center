import React, {useRef, useState, useEffect} from "react";

import {search, getItem} from "../services/api";
import "../Styles/Search.css";

function Search(){
  const userRef = useRef();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);  

  const handleSearch = async () => {
    try {
      const searchFilter = {
        title: searchQuery,
      };
      search({ params: searchFilter }).then(response => {
        setSearchResults(response.data);
      })
    } catch (error) {
      console.error('Error during search:', error);
    }
  };
  

  return (
    <div className="search-engine">
      {success ? (
       <section>
         {searchQuery.length !== 0 ? (
           <p>No items found.</p>
         ) : (
           <ul>
             {searchResults.map((item) => (
               <li key={item.id}>{item.name}</li>
             ))}
           </ul>
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
      </section>
  )
    }
    </div>
);
          }
  export default Search;
