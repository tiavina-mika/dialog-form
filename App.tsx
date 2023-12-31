import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { StyledEngineProvider, ThemeProvider, Box } from "@mui/material";
import { theme } from "./src/utils/theme";
import { GlobalStyles } from "./src/GlobalStyle";
import Home from "./src/containers/Home";

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <EmotionThemeProvider theme={theme}>
          <GlobalStyles theme={theme} />
          <Home />
        </EmotionThemeProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
