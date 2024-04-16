import styled from "styled-components";
import Sun from "/images/icon-sun.svg";
import Moon from "/images/icon-moon.svg";

export default function Header() {
  return (
    <HeaderContainer>
      <h1>devfinder</h1>
      <ThemeContainer>
        <img src={Moon} alt={"sun or moon"} />
        <span>{"DARK"}</span>
      </ThemeContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;

  & > h1 {
    font-size: 26px;

    line-height: 38.51px;
    text-align: left;
    color: rgba(34, 39, 49, 1);
  }
`;
const ThemeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  & > span {
    font-size: 13px;
    line-height: 19.25px;
    letter-spacing: 2.5px;
    text-align: right;
    color: rgba(75, 106, 155, 1);
  }
`;
