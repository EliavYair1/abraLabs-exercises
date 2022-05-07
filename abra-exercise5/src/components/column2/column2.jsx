import {
  MidColContainer,
  SubTitle,
  BoxTitle,
  BoxPara,
  ImgStyles,
  Subscription,
  LinkStyles,
} from '../column.styles';
import img from '../imgs/code/code.png';
import { ButtonStyles } from '../button/button.styles';
const ColumnTwo = () => {
  return (
    <>
      {' '}
      <MidColContainer>
        <ImgStyles src={img} alt="code" />
        {/*Colors  */}
        <SubTitle>Colors</SubTitle>
        <BoxTitle>A whistle-stop tour of 4 new CSS color features</BoxTitle>
        <BoxPara>
          I was just writing in my{' '}
          <LinkStyles href="#">“What’s new in since CSS3?” </LinkStyles> article
          about recent and possible future changes to CSS colors. It’s weirdly a
          lot. There are just as many or more new and upcoming ways to define
          colors than what we have now. I thought we’d take a really quick look.
          First, a major heads up. This stuff is so complicated. I barely
          understand it. But here are some aspects: Before all this upcoming
          change, we only had RGB as a color model, and everything dealt with
          that. We had different “color spaces” that handled it differently
          (e.g. the rgb() function mapped that RGB color model as a cube with
          linear coordinates, the hsl() function mapped that RGB color model as
          a cylinder) but it was all sRGB gamut. With the upcoming changes,
          we’re getting new color models and (!) we’re getting new functions
          that map that color model differently. So I think it’s kind of a
          double-triple whammy.
        </BoxPara>
        {/* subscription */}
        <Subscription>
          <SubTitle>subscription</SubTitle>
          <BoxTitle>Stay tuned &amp; get new updates</BoxTitle>
          <BoxPara>
            If you'd like to know when we release additional results or announce
            next year's edition, just leave us your email below
          </BoxPara>
          <ButtonStyles>subscribe</ButtonStyles>
        </Subscription>
      </MidColContainer>
    </>
  );
};

export default ColumnTwo;
