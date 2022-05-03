import styled from 'styled-components';

export const NavContainer = styled.nav`
  background-color: #0e1649;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 0 64px;
  position: fixed;
  top: 0px;
`;
export const LogoWrapper = styled.div`
  padding: 32px;
`;
export const Logo = styled.img``;
export const NavWrapper = styled.div`
  font-family: Assistant;
  font-size: 24px;
  display: flex;
  justify-content: end;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  align-self: center;
`;
export const NavLink = styled.a`
  text-transform: capitalize;
  font-family: Assistant;
  color: #fff;
  text-decoration: none;
  padding: 0 56px;
  cursor: pointer;
  &:hover {
    font-size: 28px;
    transition: 0.2s ease-in;
    text-decoration: underline;
    color: #ff7748;
  }
`;
