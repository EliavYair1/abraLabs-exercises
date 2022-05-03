import styled from 'styled-components';

const HeadTitle = styled.h3`
  margin: 64px 24px 64px 0;
  text-transform: capitalize;
  font-family: Courier New;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.48px;
  text-align: left;
  color: #0e1649;
`;
const Title = () => {
  return (
    <>
      {' '}
      <HeadTitle>latest updates</HeadTitle>
    </>
  );
};

export default Title;
