import img from '../imgs/Logo_2022-02-26/Logo.png';
import {
  NavContainer,
  LogoWrapper,
  NavWrapper,
  NavLink,
  Logo,
} from './navbar.styles';
const NavBar = () => {
  return (
    <>
      <NavContainer>
        <LogoWrapper>
          <Logo src={img} alt="Logo" id="logo" />
        </LogoWrapper>
        <NavWrapper>
          <NavLink>courses</NavLink>
          <NavLink>Careers</NavLink>
          <NavLink>About us</NavLink>
          <NavLink>Contact us</NavLink>
        </NavWrapper>
      </NavContainer>
    </>
  );
};

export default NavBar;
