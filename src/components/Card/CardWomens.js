import './Card.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CardWomens = () => {
  const [data, setData] = useState([]);

  const fetchApi = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/category/women's%20clothing"
      );
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className="card-container">
      {data.map(product => (
        <a
          key={product.id}
          href="https://fakestoreapi.com/products"
          target="_blank"
          rel="noreferrer"
          className="card"
        >
          <img alt="" src={product.image} />
          <div className="hotel-info">
            <p>{product.title} </p>
            <p>
              {' '}
              $<span>{product.price}</span>
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default CardWomens;
