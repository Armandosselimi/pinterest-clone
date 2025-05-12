import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";

export const CommentForm = () => {
  const [open, setOpen] = useState(false);
  return (
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
  );
};
