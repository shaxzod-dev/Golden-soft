import { Icons } from "@/assets/icons";
import { ISellerInfo, IWhyData } from "@/types";
import type { MenuProps } from "antd";
import { Link } from "react-router-dom";
export const DropdownItems: MenuProps["items"] = [
  {
    key: "1",
    label: "Накладные электронные замки",
  },
  {
    key: "2",
    label: "Врезные электронные замки",
  },
  {
    key: "3",
    label: "Замки для квартиры",
  },
  {
    key: "4",
    label: "Замки для дома",
  },
  {
    key: "5",
    label: "Замки для отелей",
  },
  {
    key: "6",
    label: "Замки для офиса",
  },
  {
    key: "7",
    label: "Замки для шкафчиков",
  },
  {
    key: "8",
    label: "Замки для раздевалок",
  },
  {
    key: "9",
    label: (
      <Link to={"/catalog"} className="">
        Смотреть все
      </Link>
    ),
  },
];

export const SellerData: ISellerInfo[] = [
  {
    id: 0,
    quantity: 5567,
    desc: "Счастливых клиентов",
  },
  {
    id: 1,
    quantity: 1245,
    desc: "Продуктов на выбор",
  },
  {
    id: 2,
    quantity: 372,
    desc: "Продаж в день",
  },
  {
    id: 3,
    quantity: 20,
    desc: "Лет на рынке",
  },
];

export const WhyData: IWhyData[] = [
  {
    id: 0,
    icon: <Icons.ProductReturnIcon />,
    text: "Возврат удвоенной стоимости каждого замка в случае брака. ",
  },
  {
    id: 1,
    icon: <Icons.PraiseIcon />,
    text: "Наносим ваш логотип компании на наш продукт",
  },
  {
    id: 2,
    icon: <Icons.ProductReturnIcon />,
    text: "Возврат удвоенной стоимости каждого замка в случае брака. ",
  },
];
