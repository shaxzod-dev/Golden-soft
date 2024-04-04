import { title } from "@/data";

const Banner = () => {
  return (
    <section className="bg-banner py-[171px] bg-no-repeat bg-cover bg-center">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex flex-col max-w-[604px] w-full ms-auto">
            <h1 className={`${title} text-black`}>Golden Soft</h1>
            <h1 className="text-[44px] font-semibold leading-[62px] text-black">
              GS-200Z-5 для офиса
            </h1>
            <p className="text-primary mt-5 mb-4 max-w-[287px] w-full text-sm font-normal leading-6">
              Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный
              глянцевый блеск, четкие линии, красивые формы.
            </p>
            <p className="text-primary max-w-[280px] w-full text-sm font-normal leading-6">
              Подходит для установки на деревянную/межкомнатную дверь.
            </p>
            <div className="flex flex-col mt-8">
              <h5 className="text-xs font-normal leading-[22px] text-primary">
                Цена
              </h5>
              <div className="flex items-center mt-1 gap-3">
                <span className="text-[24px] font-semibold leading-[29px]">
                  33 000₽
                </span>
                <span className="text-[22px] font-light leading-[26px] line-through">
                  37 000₽
                </span>
              </div>
              <button className="me-auto mt-4 text-white text-base font-medium leading-[26px] py-3 px-9 bg-blue-400">
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
