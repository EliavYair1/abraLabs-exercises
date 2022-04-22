import img from '../imgs/image p3.jpg';
import './sectionTwo.css';
const SectionTwo = () => {
  return (
    <>
      <section className="sectionTwo">
        <h2 className="thirdHead">Basic List Component</h2>
        <ol className="numList">
          <li> Usually you would render lists inside a component.</li>
          <li>
            We can refactor the previous example into a component that accepts
            an array of numbers and outputs a list of elements.
          </li>
          <li>
            When you run this code, you’ll be given a warning that a key should
            be provided for list items.
          </li>
          <ul className="bulletList">
            <li>
              A “key” is a special string attribute you need to include when
              creating lists of elements.{' '}
            </li>
            <li>We’ll discuss why it’s important in the next section.</li>
            <li>
              Let’s assign a <strong> key </strong> to our list items inside{' '}
              <strong>numbers.map() </strong> and fix the missing key issue.
            </li>
          </ul>
        </ol>
        <div className="codeBlock">
          <img src={img} className="codeImage-2" />
        </div>

        <a href="https://www.abra-it.com/" className="abraLink">
          {' '}
          Try it on Abra-Labs
        </a>
      </section>
    </>
  );
};

export default SectionTwo;
