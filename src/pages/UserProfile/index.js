import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/Users/actions";
import InfoSection from "../../components/InfoSection";
import ImageSection from "../../components/ImageSection";

const UserProfile = () => {
  const users = useSelector((state) => state.users.users);
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();

  const findUser = () => {
    const username = window.location.pathname.split("/")[2];
    const user = users.find((user) => user.login.username === username);
    dispatch(setUser(user));
  };

  React.useEffect(() => {
    findUser();
  }, [user]);

  if (!user || Object.keys(user).length === 0) {
    return <div className="profile mt-20 font-teko text-xl text-center">User Not Found</div>;
  } else {
    return (
      <div className="profile w-screen max-w-screen-2xl mx-auto flex">
        <ImageSection />
        <InfoSection />
      </div>
    );
  }
};

export default UserProfile;

