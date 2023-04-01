import { NavigateFunction } from "react-router-dom";

export interface CardType {
  title: string;
  img: string;
  description: string;
}

export interface AppType {
  navigate: NavigateFunction;
  location: NavigateFunction;
}

export type NavigateType = {
  navigate: NavigateFunction;
};
export type LocationType = {
  location: NavigateFunction;
};

export type cardProps = {
  name: string;
  date: string;
  car: string;
  chooseSelection: string;
  file: Blob | MediaSource;
};
