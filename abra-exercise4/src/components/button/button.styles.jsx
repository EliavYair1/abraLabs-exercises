import styled from 'styled-components';
export const FormBtn = styled.button`
  width: 426px;
  height: 57px;
  margin-top: 40px;
  border-radius: 100px;
  background-color: #ff7748;
  border: none;
  color: #fff;
  font-style: italic;
  letter-spacing: 2.2px;
  font-family: 'Courier New';
  font-size: 22px;
  font-weight: bold;
  text-transform: capitalize;
  cursor: pointer;
  align-self: center;
  &:hover {
    background-color: #f55318;
  }
  &:focus {
    border: solid 2px #cc4621;
    background-color: #f55318;
  }
  &:active {
    background-color: #ff8d66;
  }
`;
