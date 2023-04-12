import { createContext } from "react";
import { IResType } from "./types";

interface IContext {
  items: IResType[];
  setItems: (items: never[]) => void;
  isModalActive: boolean;
  setIsModalActive: (active: boolean) => void;
}

export const MainContext = createContext<IContext>({
  items: [],
  setItems: function (): void {
    throw new Error("Function not implemented.");
  },
  isModalActive: false,
  setIsModalActive: function (): void {
    throw new Error("Function not implemented.");
  },
});
