import './Card.css';

const Card = ({ data }) => {
  return (
    <div className="card-container">
      {data.map(product => (
        <a key={product.id} className="card">
          <h4>{product.title}</h4>
        </a>
      ))}
    </div>
  );
};

export default Card;
