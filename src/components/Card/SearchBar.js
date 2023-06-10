import './SearchBar.css';
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const handleChange = event => {
    if (event.key === 'Enter') {
      onSearch(search);
    }
  };

  return (
    <div className="searchbar">
      <input
        placeholder="Search products..."
        value={search}
        onKeyDown={handleChange}
        onChange={event => setSearch(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
