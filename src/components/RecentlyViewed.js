import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const RecentlyViewed = () => {

  const user = useSelector(state => state.users.user);

  if (Object.keys(user).length > 0) {
    return (
      <div className="recentlyViewed shadow-lg">
        <Link to={`/users/${user.login.username}`}>Recently Viewed: {user.name.first} {user.name.last}</Link>
      </div>
    )
  } else {
    return (
      <></>
    )
  }
}

export default RecentlyViewed