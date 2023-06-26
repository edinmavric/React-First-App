import './App.css';
import { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import {
  BetweenWrapper,
  MiddleWrapper,
  MiniWrapper,
  Wrapper,
} from './App.styled';

const App = () => {
  const [search, setSearch] = useState('London');

  const fetchApi = async () => {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=1a4ad13f4daf43099cf134230232506&q=${search}`
    );
    const data = response.data;
    return data;
  };

  const { data, isLoading, isError, error } = useQuery('weather', fetchApi);

  const handleSearch = () => {
    fetchApi();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const filteredData =
    data &&
    data.location &&
    data.location.name.toLowerCase().includes(search.toLowerCase())
      ? data
      : null;

  return (
    <Wrapper>
      <MiddleWrapper>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search City</button>
      </MiddleWrapper>
      {filteredData && (
        <MiddleWrapper>
          <BetweenWrapper>
            <h1>{filteredData.location.name}</h1>
            <span>{filteredData.location.localtime}</span>
          </BetweenWrapper>
          <MiniWrapper>
            <p>{filteredData.current.temp_c}*</p>
            <img src={`${filteredData.current.condition.icon}`} />
          </MiniWrapper>
        </MiddleWrapper>
      )}
    </Wrapper>
  );
};

export default App;
