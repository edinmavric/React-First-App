import './Login.css';
import { useState } from 'react';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isLoggedInButtonClickHandler = () => {
    setIsLoggedIn(prevState => !prevState);
  };

  return (
    <div className="Login-page">
      <h1 style={{ color: isLoggedIn ? 'green' : 'red' }}>
        {isLoggedIn ? 'Logged in' : 'Log in'}
      </h1>
      <button onClick={isLoggedInButtonClickHandler}>
        {isLoggedIn ? 'Successfully logged in!' : 'Log in first!'}
      </button>
    </div>
  );
};

export default Login;
