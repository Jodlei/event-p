import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./Components/GlobalStyle/GlobalStyle";
import { theme } from "./theme/theme";
import SharedLayout from "./Components/SharedLayout/SharedLayout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}></Route>
        <Route path="my-events"></Route>
        <Route path="create-event"></Route>
        <Route path="event/:id"></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
