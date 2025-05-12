import "./Boards.css";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import apiRequest from "utils/apiRequest";
import { format } from "timeago.js";
import Image from "components/Image";
import { Link } from "react-router";

const Boards = ({ userId }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["boards", userId],
    queryFn: () => apiRequest.get(`/boards/${userId}`).then((res) => res.data),
  });

  if (isPending) return "Loading...";
  if (error) return "An error occurred" + error.message;
  if (!data) return "User not found";

  return (
    <div className='collections'>
      {/* COLLECTION */}
      {data?.map((board) => (
        <Link
          to={`/search?boardId=${board._id}`}
          className='collection'
        >
          <Image
            src={board.firstPin.media}
            alt=''
          />
          <div className='collectionInfo'>
            <h1>{board.title}</h1>
            <span>
              {board.pinCount} • {format(board.createdAt)}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Boards;
