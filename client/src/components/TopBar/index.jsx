import React from "react";
import "./TopBar.css";
import UserButton from "components/UserButton";
import Image from "components/Image";

const TopBar = () => {
  return (
    <div className='topBar'>
      {/* Search */}
      <div className='search'>
        <Image
          path='/general/search.svg'
          alt=''
        />
        <input
          type='text'
          placeholder='Search'
        />
      </div>
      {/* USER */}
      <UserButton />
    </div>
  );
};

export default TopBar;
