import { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import GitHubUser from "./types/User";
import Header from "./Header";
import { GlobalStyle } from "./styles/GlobalStyles";
import InputContainer from "./styles/Input";
import MainCard from "./MainCard";

function App() {
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [status, setStatus] = useState<number>(200);
  const [userName, setUserName] = useState<string>("octocat");

  useEffect(() => {
    getUser();
  }, []);

  console.log(status);

  const getUser = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();
      setUserData(data);
      setStatus(response.status);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <InputContainer
        getUser={getUser}
        status={status}
        setUserName={setUserName}
      />

      <MainCard userData={userData} />
    </>
  );
}

export default App;
