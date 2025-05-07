import React, { useState } from "react";
import "./UserButton.css";

const UserButton = () => {
  const [open, setOpen] = useState(false);
  // Temp User
  const currentUser = true;

  return currentUser ? (
    <div className='userButton'>
      <img
        src='/general/noAvatar.png'
        alt=''
      />
      <img
        onClick={() => setOpen((prev) => !prev)}
        className='arrow'
        src='/general/arrow.svg'
        alt=''
      />
      {open && (
        <ul className='userOptions'>
          <li className='userOption'>Profile</li>
          <li className='userOption'>Settings</li>
          <li className='userOption'>Logout</li>
        </ul>
      )}
    </div>
  ) : (
    <a
      href='/'
      className='loginLink'
    >
      Login / Sign Up
    </a>
  );
};

export default UserButton;
