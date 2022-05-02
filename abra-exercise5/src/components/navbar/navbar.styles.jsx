import styled from 'styled-components';

export const NavContainer = styled.nav`
  background-color: #0e1649;
  width: 100%;
  height: 128px;
  display: flex;
  justify-content: space-between;
  padding: 0 64px;
  position: fixed;
  top: 0px;
`;
export const Logo = styled.div`
  padding: 32px;
`;
export const NavWrapper = styled.div`
  font-family: Assistant;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  margin: 48px;

  &:last-child {
    padding: 0 0;
  }
`;
export const NavLink = styled.a`
  text-transform: capitalize;
  font-family: Assistant;
  color: #fff;
  text-decoration: none;
  padding: 0 56px;
`;
