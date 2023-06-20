import './App.css';
import { Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/Header/Header';
import LabelBottomNavigation from './components/Footer/Footer';
import Card from './components/Card/Card';
import SearchBar from './components/Card/SearchBar';
import axios from 'axios';
import { useState } from 'react';
import { useQuery } from 'react-query';

const fetchApi = async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  const data = response.data;
  return data;
};

const App = () => {
  const [search, setSearch] = useState('');
  const { data, isLoading, isError, error } = useQuery('products', fetchApi);

  const handleSearch = query => {
    setSearch(query);
  };

  const filteredData = data
    ? data.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

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
