import img from '../imgs/Logo_2022-02-26/Logo.png';
import { NavContainer, Logo, NavWrapper, NavLink } from './navbar.styles';
const NavBar = () => {
  return (
    <>
      <NavContainer>
        <Logo className="logo">
          <img src={img} className="Logo" alt="Logo" id="logo" />
        </Logo>
        <NavWrapper className="nav-links">
          <NavLink href="#" className="nav-link">
            courses
          </NavLink>
          <NavLink href="#" className="nav-link">
            careers
          </NavLink>
          <NavLink href="#" className="nav-link">
            about us
          </NavLink>
          <NavLink href="#" className="nav-link">
            contact us
          </NavLink>
        </NavWrapper>
      </NavContainer>
    </>
  );
};

export default NavBar;
