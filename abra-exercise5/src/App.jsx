import { GlobalStyles } from './GlobalStyles';
import { AppContainer, MainSection, HR } from './App.styles';
import NavBar from './components/navbar/navbar';
import ColumnOne from './components/column1/column1';
import ColumnTwo from './components/column2/column2';
import ColumnThree from './components/column3/column3';

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <header>
        <NavBar />
      </header>
      <MainSection>
        <ColumnOne />
        <ColumnTwo />
        <ColumnThree />
      </MainSection>
      <HR />
    </AppContainer>
  );
}

export default App;
