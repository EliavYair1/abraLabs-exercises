import './navbar.css';
import logo from '../imgs/logo.png';
const Navbar = () => {
  return (
    <>
      <div className="logo">
        <img src={logo} className="center-element" alt="logo" />
      </div>
    </>
  );
};

export default Navbar;
