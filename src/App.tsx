import { useState, useEffect } from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import Header from "./Header";
import { GlobalStyle } from "./styles/GlobalStyles";
import InputContainer from "./Input";
import MainCard from "./MainCard";

import { lightTheme, darkTheme } from "./themes/Themes";

function App() {
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [status, setStatus] = useState<number>(200);
  const [userName, setUserName] = useState<string>("octocat");
  const [mode, setMode] = useState("light");

  useEffect(() => {
    getUser();
  }, []);

  // console.log(status);

  const getUser = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();

      if (data.message === "Not Found") {
        throw new Error("Error fetching user");
      } else {
        setUserData(data);
      }
      setStatus(response.status);
      // console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header setMode={setMode} mode={mode} />
      <InputContainer
        getUser={getUser}
        status={status}
        setUserName={setUserName}
      />

      <MainCard userData={userData} />
    </ThemeProvider>
  );
}

export default App;
