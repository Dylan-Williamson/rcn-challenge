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
    <div className="imageSection shadow-lg flex flex-col rounded-lg">
      <ArrowCircleLeftIcon onClick={() => navigate(-1)} style={{width: '48px', height: '48px'}} className="rounded-full flex jusify-center items-center leading-none absolute m-2.5 hover:cursor-pointer hover:opacity-70" />
      <h1 className="font-teko mt-5 underline text-center text-4xl text-black mb-5" id="userHeader">USER PROFILE</h1>
      <img className="avatar h-72 w-72 rounded-full" src={user.picture.large} alt="avatar" />
      <h1 className="font-teko mt-5 text-center text-2xl no-underline" id="nameLabel">
        {user.name.first} {user.name.last}
      </h1>
      <h2 className="font-teko text-lg text-center mt-2">{calculateDaysUntilBirthday(user.dob.date)}</h2>
    </div>
  )
}

export default ImageSection