import './App.css';
import Footer from './components/footer/footer';
import Form from './components/form/form';
import Navbar from './components/navbar/navbar';
import Promo from './components/promo/promo';
import Title from './components/title/title';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main className="main-page">
        <Title />
        <Promo />
        <hr className="hRow" />
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default App;
