import './title.css';
import ITA from '../imgs/image.jpg';
const Title = () => {
  return (
    <>
      <h1 className="mainHeader">front-end course</h1>
      <p className="collab">In collaboration with</p>
      <img src={ITA} alt="" className="iIA" />
    </>
  );
};

export default Title;
