import './card.css';
import image from '../../images/image.jpeg';

const Card = ({ rating, distance, title, price }) => {
  return (
    <div className="card">
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
