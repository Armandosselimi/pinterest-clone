import React, { useState } from "react";
import "./UserButton.css";
import Image from "components/Image";

const UserButton = () => {
  const [open, setOpen] = useState(false);
  // Temp User
  const currentUser = true;

  return currentUser ? (
    <div className='userButton'>
      <Image
        path='/general/noAvatar.png'
        alt=''
      />
      <Image
        onClick={() => setOpen((prev) => !prev)}
        className='arrow'
        path='/general/arrow.svg'
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
