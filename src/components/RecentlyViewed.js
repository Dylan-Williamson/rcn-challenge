import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const RecentlyViewed = () => {

  const user = useSelector(state => state.users.user);

  if (user && Object.keys(user).length > 0) {
    return (
      <Link to={`/users/${user.login.username}`}>
        <div className="recentlyViewed h-10 w-1/4 shadow-lg absolute justify-center justify-items-center text-center flex flex-col rounded font-teko text-base top-20 hover:cursor-pointer hover:opacity-70">
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
