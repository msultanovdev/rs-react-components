import { useEffect, useState } from "react";
import "./Main.css";
import Card from "../../components/Card/Card";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";
import { IResType } from "../../types";

const Main = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => setItems(res.data.results));
  }, []);

  console.log(items);

  return (
    <div className="main">
      <SearchBar data-testid="search-input" />
      <div className="main-cards" data-testid="card-block">
        {items.map((item: IResType) => (
          <Card
            key={item.id}
            name={item.name}
            image={item.image}
            species={item.species}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
