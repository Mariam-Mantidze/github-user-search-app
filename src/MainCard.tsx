import styled from "styled-components";
import Location from "/images/icon-location.svg";
import Website from "/images/icon-website.svg";
import Twitter from "/images/icon-twitter.svg";
import Company from "/images/icon-company.svg";

export default function MainCard({ userData }) {
  function formatJoinedDate(isoDateString) {
    const date = new Date(isoDateString);

    // Get the day, month, and year from the date
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // Format the date string
    const formattedDate = `Joined ${day} ${months[monthIndex]} ${year}`;

    return formattedDate;
  }

  return (
    <ResultCard>
      <div className="card-header">
        <div className="flex-group">
          <img
            className="user-avatar"
            src={userData?.avatar_url}
            alt="image of user"
          />
        </div>

        <div className="text-flex-group">
          <div className="user-names">
            <h3>{userData?.name}</h3>
            <span>@{userData.login}</span>
          </div>
          <p className="date">{formatJoinedDate(userData?.created_at)}</p>
        </div>
      </div>

      <p className="user-bio">{userData?.bio}</p>

      <div className="repos-follower-box">
        <div className="flex-grp">
          <p className="title">Repos</p>
          <span>{userData?.public_repos}</span>
        </div>
        <div className="flex-grp">
          <p className="title">Followers</p>
          <span>{userData?.followers}</span>
        </div>
        <div className="flex-grp">
          <p className="title">Following</p>
          <span>{userData?.following}</span>
        </div>
      </div>

      <div className="links-section">
        <div className="link-pair">
          <img src={Location} alt="pin icon" />
          <span>
            {userData?.location ? userData?.location : "Not available"}
          </span>
        </div>
        <div className="link-pair">
          <img src={Website} alt="link/website icon" />
          <span>{userData?.blog ? userData?.blog : "Not available"}</span>
        </div>
        <div className="link-pair">
          <img src={Twitter} alt="pin icon" />
          <span>
            {userData?.twitter_username
              ? userData?.twitter_username
              : "Not Available"}
          </span>
        </div>
        <div className="link-pair">
          <img src={Company} alt="pin icon" />
          <span>{userData?.company ? userData?.company : "Not available"}</span>
        </div>
      </div>
    </ResultCard>
  );
}

const ResultCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 33px 24px 48px;
  background: rgba(254, 254, 254, 1);
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.2);
  border-radius: 12px;
  margin-top: 16px;

  & .user-avatar {
    width: 70px;
    border-radius: 50%;
  }

  & .card-header {
    display: flex;
    align-items: center;
    gap: 19px;
  }

  & .text-flex-group {
    display: flex;
    flex-direction: column;
    gap: 6px;

    & .date {
      font-size: 13px;
      font-weight: 400;
      line-height: 19.25px;
      text-align: left;
      color: rgba(105, 124, 154, 1);
    }

    & .user-names {
      & > h3 {
        font-size: 16px;
        font-weight: 700;
        line-height: 23.7px;
        text-align: left;
        color: rgba(43, 52, 66, 1);
      }

      & > span {
        font-size: 13px;
        font-weight: 400;
        line-height: 19.25px;
        text-align: left;
        color: rgba(0, 121, 255, 1);
      }
    }
  }

  & .user-bio {
    font-size: 13px;
    font-weight: 400;
    line-height: 25px;
    text-align: left;
    color: rgba(75, 106, 155, 1);
    margin-top: 33px;
  }

  & .repos-follower-box {
    background: rgba(246, 248, 255, 1);
    border-radius: 12px;
    display: flex;
    gap: 25px;
    justify-content: center;
    padding: 18px 14px 19px 15px;
    margin-top: 23px;

    & .flex-grp {
      display: flex;
      flex-direction: column;
      gap: 8px;

      & .title {
        font-size: 11px;
        font-weight: 400;
        line-height: 16.29px;
        color: rgba(75, 106, 155, 1);
      }

      & > span {
        font-size: 16px;
        font-weight: 700;
        line-height: 23.7px;
        text-align: center;
        color: rgba(43, 52, 66, 1);
      }
    }
  }

  .links-section {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 24px;
  }

  & .link-pair {
    display: flex;
    align-items: center;
    gap: 19.25px;

    & span {
      font-size: 13px;
      font-weight: 400;
      line-height: 19.25px;
      text-align: left;
      color: rgba(75, 106, 155, 1);
    }
  }
`;
