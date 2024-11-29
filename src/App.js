import { StylesProvider } from '@mui/styles';
import { CssBaseline } from '@mui/material';
import GlobalStyle from './commons/styles/global-style';
import Main from './containers/Main';

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalStyle />
      <Main />
    </StylesProvider>
  );
}

export default App;
