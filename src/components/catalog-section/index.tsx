import { CatalogData } from "@/data";

const CatalogSection = () => {
  return (
    <section className="pb-[100px]">
      <div className="container">
        <div className="flex flex-col gap-20">
          {CatalogData.map((el) => (
            <div
              key={el.id}
              className={
                el.reverse
                  ? "flex gap-[30px] flex-row-reverse items-center"
                  : "flex gap-[30px] items-center"
              }
            >
              <div className="flex flex-col justify-center">
                <h1 className="text-[32px] font-semibold leading-[42px]">
                  {el.title}
                </h1>
                <p className="mt-6 text-lg text-text_color font-normal leading-8">
                  {el.desc}
                </p>
                <p className="mt-4 text-lg text-text_color font-normal leading-8">
                  {el.text}
                </p>
              </div>
              <div className="max-w-[605px] w-full">
                <img
                  className="w-full h-auto object-contain"
                  src={el.img}
                  alt={el.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
