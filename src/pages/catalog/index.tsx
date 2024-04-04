import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components";
import BreadcrumbAntd from "@/components/antd";
import { IGoldenData } from "@/types";
import { Icons } from "@/assets/icons";
import { Flex, Rate } from "antd";
const Catalog = () => {
  const { category } = useParams();
  const [value, setValue] = useState(3);
  const [data, setData] = useState<IGoldenData[]>([]);
  async function getData() {
    return await fetch(
      `${import.meta.env.VITE_API_URL}/golden-data?category=${category}`
    )
      .then((res) => res.json())
      .then((json) => setData(json));
  }
  useEffect(() => {
    getData();
  }, [category]);
  console.log(category);

  return (
    <>
      <Header />
      <BreadcrumbAntd linker={category} title={category?.toUpperCase()} />
      <div className="container">
        <div className="flex gap-[30px] mt-8">
          <div className="max-w-[288px] w-full max-h-[940px] h-[940px] p-6 border-[rgb(196,205,213)] border-[1px] rounded-[2px]"></div>
          <div className="grid grid-cols-3 gap-[30px]">
            {data.map((el) => (
              <div
                key={el.id}
                className="relative border-[rgb(196,205,213)] max-w-[288px] w-full"
              >
                <img className="w-full" src={el.image} alt={el.title} />
                <div className="absolute top-3 right-3 left-3 flex flex-col">
                  <div className="flex justify-between items-center">
                    {el.stock ? (
                      <div className="flex items-center gap-2 bg-white p-[6px]">
                        <div className="w-[20px] h-[20px]">
                          <Icons.YesIcon className="w-full h-full" />
                        </div>
                        <h3 className="text-sm font-normal leading-[17px]">
                          В наличии
                        </h3>
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
                    <h3 className="text-xs font-normal leading-[14px]">
                      Подарок
                    </h3>
                  </div>
                </div>
                <div className="bg-white py-[10px] px-3 border-[1px] border-[rgb(196,205,213)] shadow-[-1px,0px,0px,0px,rgb(234,234,234),inset,1px,0px,0px,0px,rgb(234,234,234),inset,0px,-1px,0px,0px,rgb(234,234,234)]">
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
                      <span className="text-xl font-semibold leading-6">
                        {el.price}₽
                      </span>
                      <span className="text-lg font-light leading-[21px] text-text_color line-through">
                        {el.old_price}₽
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
