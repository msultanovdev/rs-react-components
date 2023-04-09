import { createContext } from "react";
import { IResType } from "./types";

interface IContext {
  items: IResType[];
  setItems: (items: never[]) => void;
}

export const MainContext = createContext<IContext>({
  items: [],
  setItems: function (items: IResType[]): void {
    throw new Error("Function not implemented.");
  },
});
