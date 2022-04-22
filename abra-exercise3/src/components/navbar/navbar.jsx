import logo from '../imgs/logo.png';
import './navbar.css';
const Navbar = () => {
  return (
    <>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    </>
  );
};

export default Navbar;
