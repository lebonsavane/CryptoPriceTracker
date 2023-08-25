import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import WelcomePage from "./pages/Welcome/Welcome";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/home" Component={Home} />
          <Route path="/" Component={WelcomePage} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
