import { useContext, useEffect, useState } from "react";
import "./ModalView.css";
import axios from "axios";
import { detailedCardProps } from "../../types";
import { MainContext } from "../../mainContext";

const ModalView = ({ id }: { id: number | null }) => {
  const [item, setItem] = useState<detailedCardProps>();
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => setItem(res.data));
  });

  const { setIsModalActive } = useContext(MainContext);

  const handleModal = () => {
    setIsModalActive(false);
  };
  return (
    <div className="modal-container" onClick={() => handleModal()}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <p className="item-name">{item?.name}</p>
        <img src={item?.image} alt="item-image" className="item-image" />
        <p className="item-text">Species: {item?.species}</p>
        <p className="item-text">Gender: {item?.gender}</p>
        <p className="item-text">Status: {item?.status}</p>
      </div>
    </div>
  );
};

export default ModalView;
