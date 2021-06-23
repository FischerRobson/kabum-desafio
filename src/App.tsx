import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/global";

import { useTheme } from './hooks/ThemeContext';

import Routes from "./routes";

function App() {

  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
