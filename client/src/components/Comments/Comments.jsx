import Image from "components/Image";
import "./Comments.css";

import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";

const Comments = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='comments'>
      <div className='commentList'>
        <span className='commentCount'>5</span>
        {/* COMMENT */}
        <div className='comment'>
          <Image
            path='/general/noAvatar.png'
            alt=''
          />
          <div className='commentContent'>
            <span className='commentUsername'>John Doe</span>
            <p className='commentText'>This is a comment</p>
            <span className='commentTime'>1h</span>
          </div>
        </div>{" "}
        {/* COMMENT */}
        <div className='comment'>
          <Image
            path='/general/noAvatar.png'
            alt=''
          />
          <div className='commentContent'>
            <span className='commentUsername'>John Doe</span>
            <p className='commentText'>This is a comment</p>
            <span className='commentTime'>1h</span>
          </div>
        </div>{" "}
        {/* COMMENT */}
        <div className='comment'>
          <Image
            path='/general/noAvatar.png'
            alt=''
          />
          <div className='commentContent'>
            <span className='commentUsername'>John Doe</span>
            <p className='commentText'>This is a comment</p>
            <span className='commentTime'>1h</span>
          </div>
        </div>{" "}
        {/* COMMENT */}
        <div className='comment'>
          <Image
            path='/general/noAvatar.png'
            alt=''
          />
          <div className='commentContent'>
            <span className='commentUsername'>John Doe</span>
            <p className='commentText'>This is a comment</p>
            <span className='commentTime'>1h</span>
          </div>
        </div>
      </div>
      <form className='commentForm'>
        <input
          type='text'
          placeholder='Add a comment'
        />
        <div
          className='emoji'
          onClick={() => setOpen((prev) => !prev)}
        >
          <div>😭</div>
          {open && (
            <div className='emojiPicker'>
              <EmojiPicker />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Comments;
