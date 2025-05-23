import React from "react";
import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import "./Gallery.css";
import GalleryItem from "./components/GalleryItem";
import InfiniteScroll from "react-infinite-scroll-component";

const fetchPins = async ({ pageParam, search, userId, boardId }) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_ENDPOINT}/pins?cursor=${pageParam}&search=${
      search || ""
    }&userId=${userId || ""}&boardId=${boardId || ""}`
  );
  return res.data;
};

const Gallery = ({ search, userId, boardId }) => {
  const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
    queryKey: ["pins", search, userId, boardId],

    queryFn: ({ pageParam = 0 }) =>
      fetchPins({ pageParam, search, userId, boardId }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  });

  const allPins = data?.pages.flatMap((page) => page.pins) || [];

  if (status === "error") return "An error has occurred: ";

  if (status === "pending") return <p>Loading...</p>;

  return (
    <InfiniteScroll
      dataLength={allPins.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<p>Loading more posts...</p>}
      endMessage={<p>All post loaded.</p>}
    >
      <div className='gallery'>
        {allPins?.map((item) => (
          <GalleryItem
            key={item._id}
            item={item}
          />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Gallery;
