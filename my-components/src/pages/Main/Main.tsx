import { useContext, useEffect, useState } from "react";
import "./Main.css";
import Card from "../../components/Card/Card";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";
import { IResType } from "../../types";
import { MainContext } from "../../mainContext";
import ModalView from "../../components/ModalView/ModalView";

const Main = () => {
  const { items } = useContext(MainContext);
  const [list, setList] = useState(items);
  const [isLoading, setIsLoading] = useState(true);
  const [currentId, setCurrentId] = useState<number>(0);

  const { isModalActive, setIsModalActive } = useContext(MainContext);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => setList(res.data.results))
      .then(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    setList(items);
  }, [items]);
  console.log(list);

  return (
    <div className={`main ${isModalActive ? "modal-active" : ""}`}>
      <SearchBar data-testid="search-input" />
      <div className="main-cards" data-testid="card-block">
        {isLoading
          ? "Progressing..."
          : list.length
          ? list.map((item: IResType) => (
              <div
                key={item.id}
                onClick={() => {
                  setIsModalActive(true);
                  setCurrentId(item.id);
                }}
              >
                <Card
                  name={item.name}
                  image={item.image}
                  species={item.species}
                  id={item.id}
                />
              </div>
            ))
          : "Not data found..."}
        {isModalActive ? <ModalView id={currentId} /> : ""}
      </div>
    </div>
  );
};

export default Main;
