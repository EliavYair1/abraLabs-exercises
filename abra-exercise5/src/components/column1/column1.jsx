import { ColContainer, SubTitle, BoxTitle, BoxPara } from './column.styles';
import img from '../imgs/laptop/laptop.png';
import Title from '../title/title';
import { ButtonStyles } from '../button/button.styles';
const ColumnOne = () => {
  return (
    <>
      <ColContainer>
        <Title />
        {/* <!-- Design --> */}
        <SubTitle class="sub-title">Design system</SubTitle>
        <BoxTitle class="box-title">
          How do you handle component spacing in a design system?
        </BoxTitle>
        <BoxPara class="box-para">
          Say you’ve got a<strong>&lt;Card /&gt; </strong> component. It’s
          highly likely it shouldn’t be butted right up against any other
          components with no spacing around it. That’s true for… pretty much
          every component. So, how do you handle component spacing in a design
          system?
        </BoxPara>
        <ButtonStyles>Read this</ButtonStyles>
        <img src={img} alt="laptop" />
        {/* <!--frontend  --> */}
        <h4 class="sub-title" id="frontend">
          frontend
        </h4>
        <h3 class="box-title">
          How to Favicon in 2022: Six files that fit most needs
        </h3>
        <p class="box-para">
          Editor’s note: With the arrival of the new year, this post has been
          slightly modified to reflect the fact that this content is still
          relevant!
        </p>
      </ColContainer>
    </>
  );
};

export default ColumnOne;
