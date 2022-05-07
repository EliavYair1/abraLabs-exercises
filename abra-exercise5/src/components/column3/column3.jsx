import {
  BoxTitle,
  BoxPara,
  SubTitle,
  ImgStyles,
  RightColContainer,
  LinkStyles,
  SendCv,
} from '../column.styles';
import img from '../imgs/careers/careers.png';
const ColumnThree = () => {
  return (
    <>
      <RightColContainer>
        {/*Web & Mobile  */}
        <SubTitle>Web &amp; Mobile Development</SubTitle>
        <BoxTitle>Building an adaptive favicon</BoxTitle>
        <BoxPara>
          A custom <LinkStyles href="#">favicon</LinkStyles> is a great way to
          polish a web project. It displays on desktop browser tabs, and also
          inside "save for later" readers, other blog posts linking to your
          site, and more. Traditionally this has been done with the .ico file
          type, but recently browsers have allowed use of{' '}
          <LinkStyles href="#"> SVG</LinkStyles>, a vector format.
        </BoxPara>
        <ImgStyles src={img} alt="careers" />
        {/* careers */}
        <SubTitle>careers</SubTitle>
        <BoxTitle>Looking for you!</BoxTitle>
        <BoxPara>
          As part of your role, you will have the opportunity to develop from
          scratch, working closely with the product, design, and QA teams to
          deliver the best product. This is a great opportunity to join us and
          grow with other team members.
        </BoxPara>
        <SendCv>
          Send CV to{' '}
          <LinkStyles href="mailto:Jobsil@abra-it.com">
            Jobsil@abra-it.com
          </LinkStyles>
        </SendCv>
      </RightColContainer>
    </>
  );
};

export default ColumnThree;
