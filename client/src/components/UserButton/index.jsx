import React, { useState } from "react";
import "./UserButton.css";
import Image from "components/Image";
import apiRequest from "utils/apiRequest";
import { Link, useNavigate } from "react-router";
import useAuthStore from "utils/authStore";

const UserButton = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const { currentUser, removeCurrentUser } = useAuthStore();
  console.log(currentUser);

  const handleLogout = async () => {
    try {
      await apiRequest.post("users/auth/logout", {});
      removeCurrentUser();
      navigate("/auth");
    } catch (error) {
      console.log(error);
    }
  };

  return currentUser ? (
    <div className='userButton'>
      <Image
        path={currentUser.img || "/general/noAvatar.png"}
        alt=''
      />
      <div onClick={() => setOpen((prev) => !prev)}>
        <Image
          className='arrow'
          path='/general/arrow.svg'
          alt=''
        />
      </div>
      {open && (
        <ul className='userOptions'>
          <Link
            to={`/profile/${currentUser.username}`}
            className='userOption'
          >
            Profile
          </Link>
          <li className='userOption'>Settings</li>
          <li
            className='userOption'
            onClick={handleLogout}
          >
            Logout
          </li>
        </ul>
      )}
    </div>
  ) : (
    <Link
      to='/auth'
      className='loginLink'
    >
      Login / Sign Up
    </Link>
  );
};

export default UserButton;
