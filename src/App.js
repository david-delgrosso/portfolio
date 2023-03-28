import { React, useState, useEffect } from "react";
import Navbar from './components/Navbar';
import { ThemeContext } from "./ThemeContext";
import { ThemeProvider, styled, Container } from "@mui/material";
import { lightTheme, darkTheme } from "./Theme";
import './App.css';
import Intro from "./components/Intro"
import About from "./components/About"
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import SideAnchor from "./components/SideAnchor";
import Loader from "./components/Loader";
import Footer from "./components/Footer";

const StyledMainPage = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.primary,
  overflow: "hidden",
}));
const StyledMainContainer = styled(Container)({
  maxWidth: "1600px",
});

function App() {
  const [theme, setTheme] = useState("light")
  const [isLoading, setIsLoading] = useState(true)
  const muiTheme = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2400);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={muiTheme}>
        <>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Navbar />
              <StyledMainPage>
                <SideAnchor />
                <StyledMainContainer>
                  <Intro />
                  <About />
                  <Experience />
                  <Projects />
                  <Footer />
                </StyledMainContainer>
              </StyledMainPage>
            </>
          )}
        </>
      </ThemeProvider >
    </ThemeContext.Provider>
  );
}

export default App;
