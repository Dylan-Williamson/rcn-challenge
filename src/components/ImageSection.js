import React from 'react';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ImageSection = () => {

  const navigate = useNavigate();
  const user = useSelector(state => state.users.user);

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
  };

  return (
    <div className="imageSection shadow-lg">
      <ArrowCircleLeftIcon onClick={() => navigate(-1)} id="back" />
      <h1 id="userHeader">USER PROFILE</h1>
      <img className="avatar" src={user.picture.large} alt="avatar" />
      <h1 id="two">
        {user.name.first} {user.name.last}
      </h1>
      <h2>{calculateDaysUntilBirthday(user.dob.date)}</h2>
    </div>
  )
}

export default ImageSection