import { GlobalStyles } from './GlobalStyles';
import { AppContainer } from './App.styles';
import NavBar from './components/navbar/navbar';

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <header>
        <NavBar />
      </header>
      <main></main>
    </AppContainer>
  );
}

export default App;
