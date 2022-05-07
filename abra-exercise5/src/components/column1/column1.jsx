import {
  ColContainer,
  SubTitle,
  BoxTitle,
  BoxPara,
  ImgStyles,
} from '../column.styles';
import img from '../imgs/laptop/laptop.png';
import Title from '../title/title';
import { ButtonStyles } from '../button/button.styles';
const ColumnOne = () => {
  return (
    <>
      <ColContainer>
        <Title />
        {/* <!-- Design --> */}
        <SubTitle>Design system</SubTitle>
        <BoxTitle>
          How do you handle component spacing in a design system?
        </BoxTitle>
        <BoxPara>
          Say you’ve got a<strong>&lt;Card /&gt; </strong> component. It’s
          highly likely it shouldn’t be butted right up against any other
          components with no spacing around it. That’s true for… pretty much
          every component. So, how do you handle component spacing in a design
          system?
        </BoxPara>
        <ButtonStyles>Read this</ButtonStyles>

        <ImgStyles src={img} alt="laptop" />

        {/* <!--frontend  --> */}
        <SubTitle>frontend</SubTitle>
        <BoxTitle>
          How to Favicon in 2022: Six files that fit most needs
        </BoxTitle>
        <BoxPara>
          Editor’s note: With the arrival of the new year, this post has been
          slightly modified to reflect the fact that this content is still
          relevant!
        </BoxPara>
      </ColContainer>
    </>
  );
};

export default ColumnOne;
