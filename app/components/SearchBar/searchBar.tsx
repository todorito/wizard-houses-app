"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

const SearchBar = ({ ...rest }: any) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const getHouses = (e: any) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
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
      <form {...rest} onSubmit={getHouses} className="flex justify-center mt-2">
        <input
          className="bg-zinc-500 text-white p-1 rounded placeholder:text-slate-300"
          name="searchInput"
          type="text"
          placeholder="Search wizard house"
          defaultValue={searchParams.get("query")?.toString()}
        />
      </form>
    </>
  );
};

export default SearchBar;
