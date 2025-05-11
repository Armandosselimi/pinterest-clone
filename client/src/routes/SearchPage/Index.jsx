import Gallery from "components/gallery";
import React from "react";
import { useSearchParams } from "react-router";

const SearchPage = () => {
  let [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const boardId = searchParams.get("boardId");

  return (
    <div>
      <Gallery
        search={search}
        boardId={boardId}
      />
    </div>
  );
};

export default SearchPage;
