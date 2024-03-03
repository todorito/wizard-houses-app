"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  //   const [searchTerm, setSearchTerm] = useState("");
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const getHouses = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    // setSearchTerm(e.target.value);
    const term = e.target.searchInput.value;
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathName}?${params.toString()}`);
  };
  return (
    <>
      <form onSubmit={getHouses}>
        <input
          name="searchInput"
          type="text"
          placeholder="Enter the house of your choosing"
          defaultValue={searchParams.get('query')?.toString()}
        />
      </form>
    </>
  );
};

export default SearchBar;
