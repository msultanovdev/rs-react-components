import { useContext, useEffect, useState } from "react";
import "./Main.css";
import Card from "../../components/Card/Card";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";
import { IResType } from "../../types";
import { MainContext } from "../../mainContext";

const Main = () => {
  const { items } = useContext(MainContext);
  const [list, setList] = useState(items);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => setList(res.data.results));
  }, []);

  useEffect(() => {
    setList(items);
    console.log(items);
  }, [items]);

  return (
    <div className="main">
      <SearchBar data-testid="search-input" />
      <div className="main-cards" data-testid="card-block">
        {list &&
          list.map((item: IResType) => (
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
