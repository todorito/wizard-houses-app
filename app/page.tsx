import SearchBar from "./components/SearchBar/searchBar";

export default function Home({ searchParams }) {
  const getResults = () => {
    fetch("https://wizard-world-api.herokuapp.com/houses")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      {searchParams.query.toString()}
      <h3>Welcome to Hogwarts!</h3>
      <SearchBar />
    </div>
  );
}
