import logo from '../imgs/logo.png';
import { NavWrapper, Logo } from './navbar.styles';
const Navbar = () => {
  return (
    <>
      <NavWrapper>
        <Logo src={logo} alt="logo" />
      </NavWrapper>
    </>
  );
};

export default Navbar;
