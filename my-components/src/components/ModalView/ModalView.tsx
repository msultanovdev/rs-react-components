import { useContext, useEffect, useState } from "react";
import "./ModalView.css";
import axios from "axios";
import { IResType } from "../../types";
import { MainContext } from "../../mainContext";

const ModalView = ({ id }: { id: number | null }) => {
  const [item, setItem] = useState<IResType>();
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
        <p className="item-species">{item?.species}</p>
      </div>
    </div>
  );
};

export default ModalView;
