import './Form.css';
import Button from '../button/Button';
const Form = () => {
  return (
    <>
      <form className="signIn">
        <h1 className="form-header">login form</h1>
        <p className="subtext">
          Fill out the form below to login my super awesome React course! Hurry!
        </p>
        <label for="email">email</label>
        <input type="email" id="email" placeholder="abra@labs.com" />
        <label for="password">password</label>
        <input
          type="password"
          id="password"
          placeholder="Must be at least 6 characters"
        />

        <Button />
      </form>
    </>
  );
};

export default Form;
