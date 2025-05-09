import React from "react";
import "./LeftBar.css";
import Image from "components/Image";
import { Link } from "react-router";

const LeftBar = () => {
  return (
    <div className='leftBar'>
      <div className='menuIcons'>
        <Link
          to='/'
          className='menuIcon'
        >
          <Image
            className='logo'
            path='/general/logo.png'
            alt='pinterest log'
          />
        </Link>
        <Link
          to='/'
          className='menuIcon'
        >
          <Image
            path='/general/home.svg'
            alt='pinterest log'
          />
        </Link>
        <Link
          to='/create'
          className='menuIcon'
        >
          <Image
            path='/general/create.svg'
            alt='pinterest log'
          />
        </Link>
        <Link
          to='/'
          className='menuIcon'
        >
          <Image
            path='/general/updates.svg'
            alt='pinterest log'
          />
        </Link>
        <Link
          to='/'
          className='menuIcon'
        >
          <Image
            path='/general/messages.svg'
            alt='pinterest log'
          />
        </Link>
      </div>
      <Link
        href='/'
        className='menuIcon'
      >
        <Image
          path='/general/settings.svg'
          alt='pinterest log'
        />
      </Link>
    </div>
  );
};

export default LeftBar;
