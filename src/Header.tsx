import styled from "styled-components";
import Sun from "/images/icon-sun.svg";
import Moon from "/images/icon-moon.svg";

interface HeaderProps {
  setMode: React.Dispatch<React.SetStateAction<string>>;
  mode: string;
}

export default function Header({ setMode, mode }: HeaderProps) {
  return (
    <HeaderContainer>
      <h1>devfinder</h1>
      <ThemeContainer
        onClick={() => setMode(mode === "light" ? "dark" : "light")}>
        <span>{mode === "light" ? "DARK" : "LIGHT"}</span>
        <img
          src={mode === "light" ? Moon : Sun}
          alt={mode === "light" ? "icon of moon" : "icon of sun"}
        />
      </ThemeContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;

  @media (min-width: 768px) {
    width: 573px;
  }

  @media (min-width: 1440px) {
    width: 730px;
  }
  & > h1 {
    font-size: 26px;

    line-height: 38.51px;
    text-align: left;
    color: ${(props) => props.theme.logoColor};
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
    color: ${(props) => props.theme.inputColor};
  }

  & > img {
    cursor: pointer;
  }
`;
