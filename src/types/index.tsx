import { ReactNode } from "react";

export interface ISellerInfo {
  id: number;
  quantity: number;
  desc: string;
}

export interface IWhyData extends Pick<ISellerInfo, "id"> {
  icon: ReactNode;
  text: string;
}

export interface IGoldenData {
  id: number;
  category: string;
  price: number;
  old_price: number;
  image: string;
  stock: boolean;
  title: string;
}

export interface ICategoryData extends Pick<IGoldenData, "id"> {
  category: string;
  image: string;
  title: string;
}

export interface ICatalogData extends Pick<ISellerInfo, "id"> {
  title: string;
  desc: string;
  img: string;
  reverse: boolean;
  text: string;
}
