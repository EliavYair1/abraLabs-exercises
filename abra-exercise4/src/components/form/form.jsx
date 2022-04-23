import Button from '../button/button';
import './form.css';
const Form = () => {
  return (
    <>
      <form className="form-container">
        <h2 className="formHeader">Fill in the details below</h2>
        <p className="subFormHead">
          Please fill in your details here and we’ll be in touch with you soon.
        </p>
        <input type="text" className="formInput" placeholder="full name" />
        <input type="text" className="formInput" placeholder="email" />
        <input type="text" className="formInput" placeholder="phone" />

        <Button className="sendBtn" />
        <a href="#" className="contactUs">
          contact us here!
        </a>
      </form>
    </>
  );
};

export default Form;
