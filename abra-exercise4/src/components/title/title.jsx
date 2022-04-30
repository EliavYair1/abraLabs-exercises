import ITA from '../imgs/image.jpg';
import { MainHeader, Collab, ImgStyles } from './title.styles';
const Title = () => {
  return (
    <>
      <MainHeader>front-end course</MainHeader>
      <Collab className="collab">In collaboration with</Collab>
      <ImgStyles src={ITA} alt="" />
    </>
  );
};

export default Title;
