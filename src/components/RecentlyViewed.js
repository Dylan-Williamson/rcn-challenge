import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const RecentlyViewed = () => {

  const user = useSelector(state => state.users.user);

  if (Object.keys(user).length > 0) {
    return (
      <Link to={`/users/${user.login.username}`}>
        <div className="recentlyViewed shadow-lg">
          Recently Viewed: {user.name.first} {user.name.last}
        </div>
      </Link>
    )
  } else {
    return (
      <></>
    )
  }
}

export default RecentlyViewed
