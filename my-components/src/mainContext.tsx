import { createContext, useContext } from "react";
import { IResType } from "./types";

type MainContext = {
  items: IResType[];
  setItems: (items: IResType[]) => void;
};
export const MainContext = createContext<MainContext>({
  items: [],
  setItems: function (items: IResType[]): void {
    throw new Error("Function not implemented.");
  },
});
export const useGlobalContext = () => useContext(MainContext);
