import './registrationForm.css';
import Input from '../Input/Input';
import Button from '../button/button';

const Form = () => {
  return (
    <div className="form-container">
      <form>
        <h4 style={{ marginTop: 0, marginBottom: '12px' }}>Register</h4>
        <div className="email-info">
          <Input text="Email" type="email" placeholder="eg. info@mail.com" />
          <Input type="email" placeholder="Re-enter your email" />
        </div>
        <div className="password-info">
          <Input
            text="Password"
            type="password"
            placeholder="Must be 8 characthers long!"
          />
          <Input
            type="password"
            placeholder="Re-enter your password"
            classes="bottom-margin"
          />
        </div>
        <div className="registration-form-button-container">
          <Button text="Cancel" classN="cancel-btn" />
          <Button text="Register" classN="reg-btn" />
        </div>
      </form>
    </div>
  );
};

export default Form;
