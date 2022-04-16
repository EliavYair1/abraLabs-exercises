import './Header.css';
import Img from '../../imgs/Logo.png';
const Header = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo-wrapper">
          <img src={Img} alt="page-logo" className="logo" />
        </div>
        <div className="nav-links">
          <a href="#" className="nav-link">
            login
          </a>
          <a href="#" className="nav-link">
            sign up
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
