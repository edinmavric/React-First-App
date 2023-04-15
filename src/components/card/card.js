import './card.css';
import image from '../../images/image.jpeg';

const Card = props => {
  return (
    <div className="card">
      <img alt="" src={image} />
      <div>
        <span>{props.rating}</span>
        <span> - </span>
        <span>{props.distance}</span>
      </div>
      <div className="hotel-info">
        <p>{props.title} -</p>
        <p> - </p>
        <p>- ${props.price}</p>
      </div>
    </div>
  );
};

export default Card;
