import { useContext, useEffect, useState } from "react";
import "./ModalView.css";
import axios from "axios";
import { detailedCardProps } from "../../types";
import { MainContext } from "../../mainContext";

const ModalView = ({ id }: { id: number | null }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState<detailedCardProps>();
  useEffect(() => {
    setIsLoading(true);
    const fetchItem = () =>
      axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res) => setItem(res.data))
        .then(() => setIsLoading(false));
    fetchItem();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { setIsModalActive } = useContext(MainContext);

  const handleModal = () => {
    setIsModalActive(false);
  };
  return (
    <div className="modal-container" onClick={() => handleModal()}>
      {!isLoading ? (
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <p className="item-name">{item?.name}</p>
            <button className="close-btn" onClick={() => handleModal()}>
              x
            </button>
          </div>
          <img src={item?.image} alt="item-image" className="item-image" />
          <p className="item-text">Species: {item?.species}</p>
          <p className="item-text">Gender: {item?.gender}</p>
          <p className="item-text">Status: {item?.status}</p>
        </div>
      ) : (
        "Progressing..."
      )}
    </div>
  );
};

export default ModalView;
