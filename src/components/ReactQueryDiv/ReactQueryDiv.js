import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchData = async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  const data = response.data;

  return data;
};

const ReactQueryDiv = () => {
  const { data, isLoading, isError, error } = useQuery('products', fetchData);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <h1>Products list</h1>
      <ul>
        {data.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReactQueryDiv;
