import styled from "styled-components";
import SearchIcon from "/images/icon-search.svg";
import { InputContainerProps } from "./types/types";

const InputContainer: React.FC<InputContainerProps> = ({
  setUserName,
  getUser,
  status,
}) => {
  return (
    <InputBox>
      <div className="flex-group">
        <img src={SearchIcon} alt="loop/search icon" />
        <input
          placeholder="Search GitHub username..."
          onChange={(event) => setUserName(event.target.value)}
          type="text"
        />{" "}
      </div>

      <div className="flex-group">
        {status !== 200 && <p className="error-message">No results</p>}
        <button onClick={getUser}>Search</button>
      </div>
    </InputBox>
  );
};

const InputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6.5px 7px 7.5px 16px;
  background: ${(props) => props.theme.cardsBackground};
  box-shadow: ${(props) => props.theme.shadow};
  border-radius: 12px;
  margin-top: 36px;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 573px;
    padding: 9.5px 10px 9.5px 32px;
    margin-top: 35px;
  }

  @media (min-width: 1440px) {
    width: 730px;
  }

  & > .flex-group {
    display: flex;
    align-items: center;
    gap: 8.95px;

    @media (min-width: 768px) {
      gap: 24px;
    }

    & > input {
      outline: none;
      border: none;
      min-width: 170px;
      font-size: 13px;
      font-weight: 400;
      line-height: 25px;
      color: ${(props) => props.theme.inputColor};
      background-color: ${(props) => props.theme.cardsBackground};

      @media (min-width: 768px) {
        font-size: 18px;
        min-width: 250px;
      }

      &::placeholder {
        font-size: 13px;
        font-weight: 400;
        line-height: 25px;
        text-align: left;

        @media (min-width: 768px) {
          font-size: 18px;
        }
      }
    }

    & > img {
      width: 17.68px;

      @media (min-width: 768px) {
        width: 21.22px;
      }
    }

    & > button {
      font-size: 14px;
      font-weight: 700;
      line-height: 20.73px;
      text-align: center;
      color: rgba(255, 255, 255, 1);
      background: rgba(0, 121, 255, 1);
      border: none;
      padding: 13px 14px 14px 18px;
      border-radius: 12px;
      cursor: pointer;

      @media (min-width: 768px) {
        padding: 13px 24px;
        font-size: 16px;
      }

      &:hover {
        background: rgba(96, 171, 255, 1);
      }
    }

    & > .error-message {
      color: rgba(247, 70, 70, 1);

      font-size: 10px;
      font-weight: 700;
      line-height: 22.22px;
      text-align: left;
    }
  }
`;

export default InputContainer;
