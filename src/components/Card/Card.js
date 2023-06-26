import './Card.css';

const Card = ({ data }) => {
  return (
    <div className="card-container">
      {data.map(card => (
        <a key={card.location.name} className="card">
          <h4>{card.location.name}</h4>
        </a>
      ))}
    </div>
  );
};

export default Card;
