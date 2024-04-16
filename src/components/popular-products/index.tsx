import { useEffect, useState } from "react";
import { title } from "@/data";
import { CatalogCard } from "..";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { IGoldenData } from "@/types";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const PopularProducts = ({ view, pt }: { view: boolean; pt: boolean }) => {
  const [data, setData] = useState<IGoldenData[]>([]);
  async function getData() {
    return await fetch(`${import.meta.env.VITE_API_URL}/golden-data`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }
  useEffect(() => {
    getData();
  }, []);
  let fakeArray: never[] = Array.from({ length: 11 });
  return (
    <section className={pt ? `pt-[100px] pb-[100px]` : "pt-[50px] pb-[100px]"}>
      <div className="container">
        <h1 className={`${title}`}>
          {view ? "Вы недавно просмотрели" : "Наши популярные продукты"}
        </h1>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mt-16 h-[550px] p-[25px]"
        >
          {data.length
            ? data.map((el) => (
                <SwiperSlide key={el.id} className="w-[288px] h-[426px]">
                  <CatalogCard el={el} />
                </SwiperSlide>
              ))
            : fakeArray.map((i) => (
                <SwiperSlide key={i} className="w-[288px] h-[426px]">
                  <Skeleton width={288} height={500} key={i} />
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PopularProducts;
