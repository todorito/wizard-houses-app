import SearchBar from "./components/SearchBar/searchBar";
import HouseItem from "./components/HouseItem/houseItem";
import React, { Suspense } from "react";
import Loading from "./components/Loading/loading";

export default async function Home({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const getResults = async (query: string) => {
    const res = await fetch(
      `https://wizard-world-api.herokuapp.com/houses?name=${query}`
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch data for ${query}`);
    }

    return res.json();
  };
  const data = await getResults(searchParams.query);
  const cards = data
    ?.filter(
      (house: { name: string }) =>
        searchParams.query == undefined ||
        house.name.toLowerCase().indexOf(searchParams.query) > -1
    )
    .map(
      (card: {
        name: string;
        animal: string;
        founder: string;
        houseColours: string;
      }) => {
        return <HouseItem key={card.name} card={card} />;
      }
    );

  return (
    <div className="container mx-auto mt-10">
      <div>
        <h1 className="text-center">Welcome to Hogwarts!</h1>
        <SearchBar />
      </div>
      <Suspense key={searchParams.query} fallback={<Loading />}>
        <div>{cards}</div>
      </Suspense>
    </div>
  );
}
