import React from "react";
import "./LeftBar.css";
import Image from "components/Image";

const LeftBar = () => {
  return (
    <div className='leftBar'>
      <div className='menuIcons'>
        <a
          href='/'
          className='menuIcon'
        >
          <Image
            className='logo'
            path='/general/logo.png'
            alt='pinterest log'
          />
        </a>
        <a
          href='/'
          className='menuIcon'
        >
          <Image
            path='/general/home.svg'
            alt='pinterest log'
          />
        </a>
        <a
          href='/'
          className='menuIcon'
        >
          <Image
            path='/general/create.svg'
            alt='pinterest log'
          />
        </a>
        <a
          href='/'
          className='menuIcon'
        >
          <Image
            path='/general/updates.svg'
            alt='pinterest log'
          />
        </a>
        <a
          href='/'
          className='menuIcon'
        >
          <Image
            path='/general/messages.svg'
            alt='pinterest log'
          />
        </a>
      </div>
      <a
        href='/'
        className='menuIcon'
      >
        <Image
          path='/general/settings.svg'
          alt='pinterest log'
        />
      </a>
    </div>
  );
};

export default LeftBar;
