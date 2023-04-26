import './card.css';
import image from '../../images/image.jpeg';
import { useState } from 'react';

const Card = ({ rating, distance, title, price, color }) => {
  const [first, setfirst] = useState(false);
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <img alt="" src={image} />
      <div>
        <span>{rating}</span>
        <span> - </span>
        <span>{distance}</span>
      </div>
      <div className="hotel-info">
        <p>{title} -</p>
        <p> - </p>
        <p>- ${price}</p>
      </div>
    </div>
  );
};

export default Card;
