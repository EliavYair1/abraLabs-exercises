import Button from '../button/button';
import './promo.css';

const Promo = () => {
  return (
    <>
      <h2 class="secondHead">Your leap into the high-tech world</h2>
      <p class="secondPara">
        Building efficient web and mobile interfaces is often challenging and
        requires the use of imperative logic. React enables you to declaratively
        describe user interfaces in terms of their state, and it will do the
        heavy lifting of natively building them for you. In this course, React:
        Getting Started, you will delve into the fundamental concepts about
        React and use them to build practical web applications.
      </p>
      <strong class="subtext">
        You have a unique opportunity to take all the knowledge, experience and
        professionalism you have accumulated and leverage them into the
        high-tech world.
      </strong>
      <Button />
    </>
  );
};

export default Promo;
