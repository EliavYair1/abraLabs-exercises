import './Button.css';
const Button = () => {
  return (
    <>
      <button className="form-btn">login</button>
      <span>
        Don't have an account?&nbsp;&nbsp;{' '}
        <a href="#" className="redirect-link">
          sign up right now!
        </a>
      </span>
    </>
  );
};

export default Button;
