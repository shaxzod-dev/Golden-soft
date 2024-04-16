import { useState } from "react";
import { Flex, Rate } from "antd";
import { Icons } from "@/assets/icons";

const InfoCard = ({ el }: { el: any }) => {
  const [value, setValue] = useState(3);
  return (
    <section className="py-10">
      <div className="container">
        <div key={el?.id} className="gap-[30px] flex items-center">
          <div className="max-w-[605px] w-full">
            <img
              src={el?.image}
              alt={el?.title}
              className="max-w-[605px] w-full h-[500px]  object-contain"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <Flex gap="middle" vertical className="h-full">
                <Rate onChange={setValue} value={value} />
              </Flex>
              <span className="text-[13px] font-normal leading-[21px] text-text_color">
                (12) отзывов
              </span>
            </div>
            <h1 className="text-[24px] font-semibold leading-[30px] mt-4">
              {el?.title}
            </h1>
            <h3 className="text-sm font-semibold leading-6 mt-3">
              Подходит для установки на:
            </h3>
            <form className="flex items-center gap-3 mt-2">
              <input type="checkbox" id="select" checked />
              <label htmlFor="select" className="text-sm font-normal leading-6">
                Деревянную дверь
              </label>
              <input type="checkbox" id="select" checked />
              <label htmlFor="select" className="text-sm font-normal leading-6">
                Деревянную дверь
              </label>
            </form>
            <div className="flex items-center gap-[30px]">
              <div className="flex flex-col">
                <h2 className="text-base font-semibold leading-6 mt-6">
                  Комплектация
                </h2>
                <form className="mt-2">
                  <select
                    name="locks"
                    id="locks"
                    className="flex items-center border-[1px] border-[rgb(196,205,213)] py-2 px-4"
                  >
                    <option value="Smart замок без приложения">
                      Smart замок без приложения
                    </option>
                    <option value="Smart замок с приложением">
                      Smart замок с приложением
                    </option>
                  </select>
                </form>
              </div>
              <div className="flex flex-col">
                <h2 className="text-base font-semibold leading-6 mt-6">Цвет</h2>
                <div className="flex items-center gap-3 mt-2">
                  <div className="w-10 h-10 bg-black"></div>
                  <div className="w-10 h-10 bg-yellow-500"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <span className="text-[22px] font-semibold leading-[26px]">
                {el?.price}₽
              </span>
              <span className="line-through text-[20px] leading-6 font-light text-text_color">
                {el?.old_price}₽
              </span>
            </div>
            <div className="flex items-center gap-[30px] mt-4">
              <button
                type="button"
                // onClick={() => {
                //   card ? removeFromCard(data?.id) : addToCard(data);
                // }}
                className="py-4 px-20 bg-blue-500 text-white text-base font-medium leading-[19px]"
              >
                Купить
              </button>
              <button
                // onClick={() =>
                //   like ? removeFromLike(data.id) : addToLike(data)
                // }
                className="flex items-center gap-2 text-sm font-normal leading-6 text-text_color"
              >
                <Icons.LikeIcon />В избранное
              </button>
            </div>
            <div className="mt-8 w-full p-4 bg-[rgb(246,247,249)]">
              <h3 className="text-base font-medium leading-[26px]">Оплата</h3>
              <p className="text-sm font-normal leading-6 text-text_color">
                Оплата при получении товара, Картой онлайн, Google Pay,
                Акционная оплата картой Visa, Безналичными для юридических лиц,
                Безналичными для физических лиц, Apple Pay, PrivatPay, Оплата
                картой в отделении
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCard;
