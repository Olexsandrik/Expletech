import { useState } from "react";
import { Header } from "./components/Header/index.js";
import { Cards } from "./components/Cards/index.jsx";
import catalog from "./server/catalog.json";
import "./App.css";

function App() {
  const [data] = useState(catalog);
  // const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage, setPostsPerPage] = useState(10);

  const [search, setSearch] = useState("");
  const [typeSorting, setTypeSorting] = useState({
    type: "",
  });

  const filterCatalog = data.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
};

  const handlerSelectTypeSorting = (value: string) => {
    setTypeSorting({ type: value });
  };

  return (
    <>
      <div className="container">
        <Header
          logo={"Logo"}
          search={search}
          handlerInput={handlerInput}
          typeSorting={typeSorting}
          handlerSelectTypeSorting={handlerSelectTypeSorting}
        />

        <Cards data={filterCatalog} typeSorting={typeSorting} />
      </div>
    </>
  );
}

export default App;
