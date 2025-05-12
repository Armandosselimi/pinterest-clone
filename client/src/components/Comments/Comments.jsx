import "./Comments.css";
import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { useQuery } from "@tanstack/react-query";
import apiRequest from "utils/apiRequest";
import Comment from "./components/Comment";

const Comments = ({ id }) => {
  const [open, setOpen] = useState(false);

  const { isPending, error, data } = useQuery({
    queryKey: ["comments", id],
    queryFn: () => apiRequest.get(`/comments/${id}`).then((res) => res.data),
  });

  console.log(data);

  if (isPending) return "Loading...";
  if (error) return "An error occurred" + error.message;

  return (
    <div className='comments'>
      <div className='commentList'>
        <span className='commentCount'>5</span>
        {/* COMMENT */}
        {data.map((comment) => (
          <Comment
            key={comment._id}
            comment={comment}
          />
        ))}
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
