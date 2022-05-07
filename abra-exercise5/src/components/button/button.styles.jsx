import styled from 'styled-components';
export const ButtonStyles = styled.button`
  width: 148px;
  flex-grow: 0;
  padding: 16px 32px;
  border-radius: 12px;
  background-color: #ff9f00;
  border: none;
  color: #fff;
  font-family: Assistant;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 16px;
  margin-bottom: 80px;
  &:hover {
    background-color: #f08e0e;
    border: none;
  }
  &:focus {
    border: none;
    background-color: #d87a00;
  }
  &:active {
    border: none;
    background-color: #ffbb33;
  }
`;
