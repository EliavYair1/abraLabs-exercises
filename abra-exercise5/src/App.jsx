import { GlobalStyles } from './GlobalStyles';
import { AppContainer, MainSection } from './App.styles';
import NavBar from './components/navbar/navbar';
import ColumnOne from './components/column1/column1';
function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <header>
        <NavBar />
      </header>
      <MainSection>
        <ColumnOne />
      </MainSection>
    </AppContainer>
  );
}

export default App;
