import React from "react";
import Image from "components/Image";
import { format } from "timeago.js";
import useAuthStore from "utils/authStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiRequest from "utils/apiRequest";

const deleteComment = async (commentId) => {
  const res = await apiRequest.delete(`/comments/${commentId}`);
  return res.data;
};

const Comment = ({ comment, id }) => {
  const { currentUser } = useAuthStore();
  console.log(comment);
  console.log(currentUser);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", id] });
    },
  });

  const handleDelete = async () => {
    mutation.mutate(comment._id);
  };

  return (
    <div className='comment'>
      <Image
        src={comment.user.img || "/general/noAvatar.png"}
        alt=''
      />
      <div className='commentContent'>
        <span className='commentUsername'>{comment.user.displayName}</span>
        <p className='commentText'>{comment.description}</p>
        <span className='commentTime'>{format(comment.createdAt)}</span>
        {currentUser?._id === comment?.user?._id && (
          <button
            className='deleteBtn'
            onClick={handleDelete}
          >
            x
          </button>
        )}
      </div>
    </div>
  );
};

export default Comment;
