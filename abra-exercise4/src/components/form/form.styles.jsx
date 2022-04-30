import styled from 'styled-components';
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const FormHeader = styled.h2`
  width: 297px;
  height: 34px;
  flex-grow: 0;
  margin: 40px 572px 0 572px;
  font-family: TimesNewRoman;
  font-size: 30px;
  font-weight: bold;
  color: #0e1649;
`;

export const SubFormHead = styled.p`
  width: 548px;
  height: 21px;
  margin: 16px 446px 32px 446px;
  font-family: Arial;
  font-size: 18px;
  letter-spacing: 0.36px;
  color: #1c1c1c;
`;

export const FormInput = styled.input`
  width: 426px;
  margin: 16px 507px 16px 507px;
  padding: 16px 328px 16px 24px;
  border-radius: 100px;
  border: solid 1px #1c1c1c;

  &::placeholder {
    font-family: Roboto;
    font-size: 16px;
    font-weight: 300;
    text-transform: capitalize;
    color: #555a7d;
    opacity: 0.9;
  }
`;
export const SendBtn = styled.button`
  &::after {
    content: 'send';
  }
`;
export const ContactUs = styled.a`
  width: 175px;
  height: 32px;
  margin: 129px 632px 16px 633px;
  font-family: Roboto;
  font-size: 24px;
  line-height: 1.33;
  text-align: center;
  color: #ff5288;
  text-transform: capitalize;
`;
