import './sectionOne.css';
import img from '../imgs/image p2.jpg';
const SectionOne = () => {
  return (
    <>
      <section className="sectionOne">
        <h2 className="secondHead"> A Simple Component</h2>
        <div className="secondPara">
          <p className="insideText-1">
            React components implement a&nbsp;<strong>render()</strong>
            method that takes input data and returns what to display. This
            example uses an XML-like syntax called JSX. Input data that is
            passed into the component can be accessed by&nbsp;
            <strong>render()</strong>
            &nbsp; via &nbsp; <br />
            <strong>this.props</strong>.
          </p>

          <p className="insideText-2">
            JSX is optional and not required to use React. Try the
            <a href="#" className="paraLink-2">
              Babel REPL
            </a>
            to see the raw JavaScript code produced by the JSX compilation step.
          </p>
        </div>
        <img src={img} className="codeImage" />
      </section>
    </>
  );
};

export default SectionOne;
