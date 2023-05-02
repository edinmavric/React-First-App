import './Button.css';

const Button = ({ text, classN }) => {
  return (
    <button className={classN} type="button">
      {text}
    </button>
  );
};

export default Button;
