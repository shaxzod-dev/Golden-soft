import { useState, useEffect } from "react";
import { Header } from "@/components";
import { IGoldenData } from "@/types";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState<IGoldenData[]>([]);
  async function getData() {
    return await fetch(`${import.meta.env.VITE_API_URL}/golden-data`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }
  useEffect(() => {
    getData();
  }, []);
  console.log(data);

  return (
    <>
      <Header />
      <section>
        <div className="container">
          <h1 className="mt-16 text-[44px] font-semibold leading-[62px] text-center">
            Категории
          </h1>
          <div className="mt-16 grid grid-cols-4 gap-10">
            {data.map((el) => {
              return (
                <Link
                  to={`/catalog/${el.category}`}
                  className={`p-2 hover:scale-110 transition-all duration-150 hover:shadow-2xl hover:cursor-pointer`}
                >
                  <img src={el.image} alt={el.title} className="w-full" />
                  <h3 className="mt-4 text-base font-normal leading-[26px]">
                    {el.title}
                  </h3>
                  <button
                    type="button"
                    className="py-2 text-base font-medium leading-[26px] border-[1px] px-11 mt-4 border-[rgb(69,79,91)]"
                  >
                    Перейти
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
