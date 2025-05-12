import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import apiRequest from "utils/apiRequest";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const addComment = async (comment) => {
  const res = await apiRequest.post("/comments", comment);
  return res.data;
};

export const CommentForm = ({ id }) => {
  const [open, setOpen] = useState(false);
  const [desc, setDesc] = useState("");

  const handleEmojiClick = (emoji) => {
    setDesc((prev) => prev + " " + emoji.emoji);
    setOpen(false);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", id] });
      setDesc("");
      setOpen(false);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutation.mutate({
      description: desc,
      pin: id,
    });
  };
  return (
    <form
      className='commentForm'
      onSubmit={handleSubmit}
    >
      <input
        onChange={(e) => setDesc(e.target.value)}
        value={desc}
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
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}
      </div>
    </form>
  );
};
