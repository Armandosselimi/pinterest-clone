import Gallery from "components/gallery";
import "./ProfilePage.css";
import Image from "components/Image";
import React, { useState } from "react";
import Collections from "components/Collections/Collections";

const ProfilePage = () => {
  const [type, setType] = useState("saved");
  return (
    <div className='profilePage'>
      <Image
        className='profileImg'
        path='/general/noAvatar.png'
        w={100}
        h={100}
      />
      <h1 className='profileName'>John Doe</h1>
      <span className='profileUsername'>@johnie</span>
      <div className='followCounts'>10 followers * 20 following</div>
      <div className='profileInteractions'>
        <Image path='/general/share.svg' />
        <div className='profileButtons'>
          <button>Message</button>
          <button>Follow</button>
        </div>
        <Image path='/general/more.svg' />
      </div>
      <div className='profileOptions'>
        <span
          onClick={() => setType("created")}
          className={type === "created" ? "active" : ""}
        >
          Created
        </span>
        <span
          onClick={() => setType("saved")}
          className={type === "saved" ? "active" : ""}
        >
          Saved
        </span>
      </div>
      {type === "created" ? <Gallery /> : <Collections />}
    </div>
  );
};

export default ProfilePage;
