import { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import GitHubUser from "./types/User";

function App() {
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [userName, setUserName] = useState<string>("mariam-mantidze");

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      setUserData(error);
    }
  };
  // console.log(userData);

  return (
    <>
      <input
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
        type="text"
      />{" "}
      <button onClick={getUser}>search</button>
      {userData?.message && <p style={{ color: "red" }}>not found</p>}
      <div>
        <img
          src={userData?.avatar_url}
          alt="image of user"
          style={{ width: "100px", borderRadius: "50%" }}
        />
      </div>
      <h1>{userData?.name}</h1>
      <p>{userData?.bio}</p>
      <p>{userData?.location}</p>
      <p>{userData?.email}</p>
      <p>{userData?.twitter_username}</p>
      <p>{userData?.public_repos}</p>
      <p>{userData?.followers}</p>
      <p>{userData?.following}</p>
      <div></div>
    </>
  );
}

export default App;
