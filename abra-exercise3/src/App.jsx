import './App.css';
import Navbar from './components/navbar/navbar';
import Promo from './components/promo/promo';
import SectionOne from './components/section#1/sectionOne';
import SectionTwo from './components/section#2/sectionTwo';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Promo />
      <hr />
      <SectionOne />
      <hr />
      <SectionTwo />
    </div>
  );
}

export default App;
