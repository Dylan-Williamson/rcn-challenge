import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/Users/actions";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const users = useSelector((state) => state.users.users);
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const findUser = () => {
    const username = window.location.pathname.split("/")[2];
    const user = users.find((user) => user.login.username === username);
    dispatch(setUser(user));
  };

  const convertToPhoneNumber = (phoneNumberString) => {
    const cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return null;
  };

  const calculateDaysUntilBirthday = (birthday) => {

    let bday = new Date(birthday);
    let today = new Date();
    
    bday.setFullYear(today.getFullYear());
    if (today > bday) {
      bday.setFullYear(today.getFullYear() + 1);
    }

    const days = Math.floor((bday - today) / (1000*60*60*24))
    
    if (days < 1) {
      return "Today is their birthday!";
    } else {
      return `${days} days until their birthday!`;
    }
    return 
  };

  React.useEffect(() => {
    findUser();
  }, [user]);

  if (Object.keys(user).length === 0) {
    return <div className="profile">Loading...</div>;
  } else {
    return (
      <div className="profile">
        <div className="imageSection shadow-lg">
          <ArrowCircleLeftIcon onClick={() => navigate(-1)} id="back" />
          <h1 id="userHeader">USER PROFILE</h1>
          <img className="avatar" src={user.picture.large} alt="avatar" />
          <h1 id="two">
            {user.name.first} {user.name.last}
          </h1>
          <h2>{calculateDaysUntilBirthday(user.dob.date)}</h2>
        </div>
        <div className="infoSection">
          <div className="infoSection__top shadow-lg">
            <h1>CONTACT INFO</h1>
            <div className="infoInner">
              <div className="infoInner__left">
                <div className="innerInner">STREET ADDRESS</div>
                <div className="innerInner" id="innerInput">
                  {user.location.street.number} {user.location.street.name}
                </div>
                <div className="innerInner">CITY</div>
                <div className="innerInner" id="innerInput">
                  {user.location.city}
                </div>
                <div className="innerInner">STATE</div>
                <div className="innerInner" id="innerInput">
                  {user.location.state}
                </div>
                <div className="innerInner">COUNTRY</div>
                <div className="innerInner" id="innerInput">
                  {user.location.country}
                </div>
              </div>
              <div className="infoInner__right">
                <div className="innerInner">POSTAL CODE</div>
                <div className="innerInner" id="innerInput">
                  {user.location.postcode}
                </div>
                <div className="innerInner">EMAIL</div>
                <div className="innerInner" id="innerInput">
                  {user.email}
                </div>
                <div className="innerInner">CELL PHONE</div>
                <div className="innerInner" id="innerInput">
                  {convertToPhoneNumber(user.cell)}
                </div>
                <div className="innerInner">HOME PHONE</div>
                <div className="innerInner" id="innerInput">
                  {convertToPhoneNumber(user.phone)}
                </div>
              </div>
            </div>
          </div>
          <div className="infoSection__bottom shadow-lg">
            <h1>EMPLOYMENT INFO</h1>
            <div className="infoInner">
              <div className="infoInner__left">
                <div className="innerInner">JOB TITLE</div>
                <div className="innerInner" id="innerInput">
                  SOFTWARE ENGINEER
                </div>
                <div className="innerInner">UUID</div>
                <div className="innerInner" id="innerInput">
                  {user.login.uuid}
                </div>
                <div className="innerInner">USERNAME</div>
                <div className="innerInner" id="innerInput">
                  {user.login.username}
                </div>
                <div className="innerInner">PASSWORD</div>
                <div className="innerInner" id="innerInput">
                  {user.login.password}
                </div>
              </div>
              <div className="infoInner__right">
                <div className="innerInner">DATE OF BIRTH</div>
                <div className="innerInner" id="innerInput">
                  {new Date(user.dob.date).toLocaleDateString("en-us", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="innerInner">AGE</div>
                <div className="innerInner" id="innerInput">
                  {user.dob.age} Years Old
                </div>
                <div className="innerInner">GENDER</div>
                <div className="innerInner" id="innerInput">
                  {user.gender.toUpperCase()}
                </div>
                <div className="innerInner">HIRE DATE</div>
                <div className="innerInner" id="innerInput">
                  {new Date(user.registered.date).toLocaleDateString("en-us", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default UserProfile;
