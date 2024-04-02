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
