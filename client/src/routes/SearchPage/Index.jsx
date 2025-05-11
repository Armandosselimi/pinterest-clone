import Gallery from "components/gallery";
import React from "react";
import { useSearchParams } from "react-router";

const SearchPage = () => {
  let [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  return (
    <div>
      <Gallery search={search} />
    </div>
  );
};

export default SearchPage;
