import "./Comments.css";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import apiRequest from "utils/apiRequest";
import Comment from "./components/Comment";
import { CommentForm } from "./components/CommentForm";

const Comments = ({ id }) => {
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
        <span className='commentCount'>
          {data.length === 0 ? "No comments" : data.length + " Comments"}
        </span>
        {/* COMMENT */}
        {data.map((comment) => (
          <Comment
            key={comment._id}
            comment={comment}
          />
        ))}
      </div>
      {/* FORM */}
      <CommentForm />
    </div>
  );
};

export default Comments;
