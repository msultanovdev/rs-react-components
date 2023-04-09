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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => setList(res.data.results))
      .then(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    setList(items);
  }, [items]);

  return (
    <div className="main">
      <SearchBar data-testid="search-input" />
      <div className="main-cards" data-testid="card-block">
        {!isLoading
          ? list.map((item: IResType) => (
              <Card
                key={item.id}
                name={item.name}
                image={item.image}
                species={item.species}
                id={item.id}
              />
            ))
          : "Progressing..."}
      </div>
    </div>
  );
};

export default Main;
