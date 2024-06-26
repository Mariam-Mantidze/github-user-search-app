import { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import Header from "./Header";
import { GlobalStyle } from "./styles/GlobalStyles";
import InputContainer from "./Input";
import MainCard from "./MainCard";

import { lightTheme, darkTheme } from "./themes/Themes";

function App() {
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [status, setStatus] = useState<number>(200);
  const [userName, setUserName] = useState<string>("mariam-mantidze");
  const [mode, setMode] = useState("light");

  useEffect(() => {
    getUser();
  }, []);

  // console.log(status);

  const getUser = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      setStatus(response.status);
      const data = await response.json();

      if (data.message === "Not Found") {
        throw new Error("Error fetching user");
      }
      setUserData(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.log("An unknown error occurred");
      }
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
