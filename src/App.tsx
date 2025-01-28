import { useState } from "react";
import { Header } from "./components/Header/index.jsx";
import { Cards } from "./components/Cards/index.jsx";
import catalog from "./server/catalog.json";
import "./App.css";

function App() {
  const [data] = useState(catalog);
  const [search, setSearch] = useState("");
  const [typeSorting, setTypeSorting] = useState({
    type: "",
  });

  const filterCatalog = data.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  const handlerInput = (e) => {
    setSearch(e.target.value);
  };
  const handlerSelectTypeSorting = (value) => {
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
