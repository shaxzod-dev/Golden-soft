import { Icons } from "@/assets/icons";
import { ICatalogData, ISellerInfo, IWhyData } from "@/types";
import type { MenuProps } from "antd";
import { Link } from "react-router-dom";

export const DropdownItems: MenuProps["items"] = [
  {
    key: "1",
    label: <Link to={"/catalog/electric"}>Накладные электронные замки</Link>,
  },
  {
    key: "2",
    label: <Link to={"/catalog/electric"}>Врезные электронные замки</Link>,
  },
  {
    key: "3",
    label: <Link to={"/catalog/for-home"}>Замки для квартиры</Link>,
  },
  {
    key: "4",
    label: <Link to={"/catalog/for-home"}>Замки для дома</Link>,
  },
  {
    key: "5",
    label: <Link to={"/catalog/for-office"}>Замки для отелей</Link>,
  },
  {
    key: "6",
    label: <Link to={"/catalog/for-office"}>Замки для офиса</Link>,
  },
  {
    key: "7",
    label: <Link to={"/catalog/for-shelves"}>Замки для шкафчиков</Link>,
  },
  {
    key: "8",
    label: <Link to={"/catalog/for-shelves"}>Замки для раздевалок</Link>,
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

export const title = "text-[44px] font-semibold leading-[62px]";

export const CatalogData: ICatalogData[] = [
  {
    id: 0,
    desc: "Odio felis sit leo, massa, mauris, at pulvinar ultrices. Eu porttitor molestie massa porttitor. Quisque at turpis ut proin eu et magna etiam rhoncus.",
    title: "Eget quis quam metus, scelerisque.",
    reverse: false,
    img: "https://firebasestorage.googleapis.com/v0/b/uploadimage-53655.appspot.com/o/image%2Fcatalog.png?alt=media&token=5f016224-0aac-432e-901c-6706ec7b44d4",
    text: "Ac risus neque pulvinar tincidunt est. Tristique imperdiet viverra interdum in leo. Nullam ullamcorper id enim fermentum integer praesent bibendum. In ullamcorper purus scelerisque malesuada et egestas. Ac dictumst mauris sed facilisis.",
  },
  {
    id: 1,
    desc: "Odio felis sit leo, massa, mauris, at pulvinar ultrices. Eu porttitor molestie massa porttitor. Quisque at turpis ut proin eu et magna etiam rhoncus.",
    reverse: true,
    img: "https://firebasestorage.googleapis.com/v0/b/uploadimage-53655.appspot.com/o/image%2Fcatalog-2.png?alt=media&token=ca56b099-15da-4486-a284-9e88a27d08ad",
    text: "Ac risus neque pulvinar tincidunt est. Tristique imperdiet viverra interdum in leo. Nullam ullamcorper id enim fermentum integer praesent bibendum. In ullamcorper purus scelerisque malesuada et egestas. Ac dictumst mauris sed facilisis.",
    title: "Eget quis quam metus, scelerisque.",
  },
];
