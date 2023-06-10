import './App.css';
import { Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/Header/Header';
import LabelBottomNavigation from './components/Footer/Footer';
import Card from './components/Card/Card';
import SearchBar from './components/Card/SearchBar';
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  const handleSearch = query => {
    setSearch(query);
  };

  const fetchApi = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const filteredData = data.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <ResponsiveAppBar />
      <SearchBar onSearch={handleSearch} />
      <div className="Main">
        <Routes>
          <Route path="/" element={<Card data={filteredData} />} />
        </Routes>
      </div>
      <LabelBottomNavigation />
    </>
  );
};

export default App;
