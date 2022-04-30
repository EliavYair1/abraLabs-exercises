import footerImg from '../imgs/imageAbra.jpg';
import { FooterImg, FooterWrapper } from './footer.styles';

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <FooterImg src={footerImg} alt="footer" />
      </FooterWrapper>
    </>
  );
};

export default Footer;
