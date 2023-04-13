import "./card.css";
import image from "../../images/image.jpeg";

const Card = () => {
  return (
    <div className="card">
      <img alt="" src={image} />
      <div>
        <span>4.8(227 review's)</span>
        <span> - </span>
        <span>19km from center</span>
      </div>
      <div className="hotel-info">
        <p>Hotel Hotel</p>
        <p>$702</p>
      </div>
    </div>
  );
};

export default Card;
