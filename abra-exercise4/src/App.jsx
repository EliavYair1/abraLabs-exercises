import Footer from './components/footer/footer';
import Form from './components/form/form';
import Navbar from './components/navbar/navbar';
import Promo from './components/promo/promo';
import Title from './components/title/title';
import { GlobalStyles } from './GlobalStyles';
import { AppContainer, HorizontalRow, MainSection } from './App.styles';
function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <header>
        <Navbar />
      </header>
      <MainSection>
        <Title />
        <Promo />
        <HorizontalRow />
        <Form />
      </MainSection>
      <Footer />
    </AppContainer>
  );
}

export default App;
