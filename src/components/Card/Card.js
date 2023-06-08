import './Card.css';
import { Button } from '@mui/material';

const Card = () => {
  return (
    <div className="card-container">
      <Button variant="contained">Sign In!</Button>
      <span style={{margin: '0 12px'}}>Already have account?</span>
      <Button variant="outlined" hover="contained">
        Sign Up!
      </Button>
    </div>
  );
};

export default Card;
