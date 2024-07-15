import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../GlobalStyle";
import { PersonalHomepage } from "../../features/PersonalHomepage";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../../common/ThemeSwitch/themeSlice";
import { themeDark, themeLight } from "../../theme";

function App() {
  const isDarkTheme: boolean = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;
