import { useState } from "react";
import { Icons } from "@/assets/icons";
import { Flex, Rate } from "antd";
import { Link } from "react-router-dom";

const CatalogCard = ({ el }: { el: any }) => {
  const [value, setValue] = useState(3);
  return (
    <div
      key={el.id}
      className="group hover:scale-110 transition-all duration-200 hover:cursor-pointer hover:shadow-2xl mt-10 relative border-[rgb(196,205,213)] max-w-[288px] w-full"
    >
      <img className="w-full h-[320px]" src={el.image} alt={el.title} />
      <Link
        to={`/info/${el.id}`}
        className="text-base absolute top-[150px] leading-[26px] font-medium text-blue-500 py-3 px-12 border-[1px] border-blue-500 bg-opacity-90 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 left-[10%] rounded-lg"
      >
        Посмотреть товар
      </Link>
      <div className="absolute top-3 right-3 left-3 flex flex-col">
        <div className="flex justify-between items-center">
          {el.stock ? (
            <div className="flex items-center gap-2 bg-white p-[6px]">
              <div className="w-[20px] h-[20px]">
                <Icons.YesIcon className="w-full h-full" />
              </div>
              <h3 className="text-sm font-normal leading-[17px]">В наличии</h3>
            </div>
          ) : (
            <div className="flex items-center gap-2 bg-white p-[6px]">
              <Icons.XIcon />
              <h3 className="text-sm font-normal leading-[17px]">
                Нет в наличии
              </h3>
            </div>
          )}
          <button
            type="button"
            className="text-xs font-medium leading-[14px] py-2 px-[10px] bg-white"
          >
            SALE
          </button>
        </div>
        <div className="flex items-center w-max mt-[10px] gap-[10px] bg-white p-[6px]">
          <div className="w-3 h-3">
            <Icons.GiftIcon className="w-full h-full" />
          </div>
          <h3 className="text-xs font-normal leading-[14px]">Подарок</h3>
        </div>
      </div>
      <div className="h-[133px] bg-white py-[10px] px-3 border-[1px] border-[rgb(196,205,213)] shadow-[-1px,0px,0px,0px,rgb(234,234,234),inset,1px,0px,0px,0px,rgb(234,234,234),inset,0px,-1px,0px,0px,rgb(234,234,234)]">
        <div className="flex flex-col">
          <div className="flex items-center gap-3 h-4">
            <Flex gap="middle" vertical className="h-full">
              <Rate onChange={setValue} value={value} />
            </Flex>
            <span className="text-[13px] font-normal leading-[21px] text-text_color">
              (12) отзывов
            </span>
          </div>
          <h2 className="mt-2 text-base font-normal leading-[26px] text-text_color">
            {el.title}
          </h2>
          <div className="flex items-center gap-3 mt-3">
            <span className="text-xl font-semibold leading-6">{el.price}₽</span>
            <span className="text-lg font-light leading-[21px] text-text_color line-through">
              {el.old_price}₽
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogCard;
