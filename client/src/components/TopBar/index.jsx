import React from "react";
import "./TopBar.css";
import UserButton from "components/UserButton";
import Image from "components/Image";
import { useNavigate } from "react-router";

const TopBar = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search?search=${e.target[0].value}`);
  };
  return (
    <div className='topBar'>
      {/* Search */}
      <form
        onSubmit={handleSubmit}
        className='search'
      >
        <Image
          path='/general/search.svg'
          alt=''
        />
        <input
          type='text'
          placeholder='Search'
        />
      </form>
      {/* USER */}
      <UserButton />
    </div>
  );
};

export default TopBar;
