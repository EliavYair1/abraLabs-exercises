import Title from '../title/title';
import './promo.css';

const Promo = () => {
  return (
    <>
      <section className="promo-container">
        <Title />
        <p className="subtext">
          A javascript library for building user interfaces
        </p>
        <div className="button-wrapper">
          <button className="button-1">get started</button>
          <button className="button-2">tutorial</button>
        </div>
        <h2 className="firstHead">Learn Once, Write Anywhere</h2>
        <p className="firstPara">
          We don’t make assumptions about the rest of your technology stack, so
          you can develop new features in React without rewriting existing code.
          React can render on the server using Node and power mobile apps using
          <a href="#" className="paraLink">
            React Native.
          </a>
        </p>
      </section>
    </>
  );
};

export default Promo;
