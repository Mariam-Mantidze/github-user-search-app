import styled from "styled-components";
import SearchIcon from "/images/icon-search.svg";
import { InputContainerProps } from "../types/User";

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
  gap: 8px;
  padding: 6.5px 7px 7.5px 16px;
  background: rgba(254, 254, 254, 1);
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.2);
  border-radius: 12px;
  margin-top: 36px;
  cursor: pointer;

  & > .flex-group {
    display: flex;
    align-items: center;
    gap: 8.95px;

    & > input {
      outline: none;
      border: none;
      min-width: 170px;

      font-size: 13px;
      font-weight: 400;
      line-height: 25px;
      color: rgba(34, 39, 49, 1);

      &::placeholder {
        font-size: 13px;
        font-weight: 400;
        line-height: 25px;
        text-align: left;
      }
    }

    & > img {
      width: 17.68px;
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

      &:hover {
        background: rgba(96, 171, 255, 1);
      }
    }

    & > .error-message {
      color: rgba(247, 70, 70, 1);

      font-size: 13px;
      font-weight: 700;
      line-height: 22.22px;
      text-align: left;
    }
  }
`;

export default InputContainer;
