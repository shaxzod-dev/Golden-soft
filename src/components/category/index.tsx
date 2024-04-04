import { title } from "@/data";
import { IGoldenData } from "@/types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CategoryCard } from "..";

const Category = () => {
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
    <section className="pb-[50px]">
      <div className="container">
        <h1 className={`${title} text-center`}>Категории</h1>
        <div className="grid grid-cols-4 gap-[30px] mt-16">
          {data.map((el) => (
            <CategoryCard el={el} />
          ))}
        </div>
        <Link
          to={"/products"}
          className="bg-blue-500 text-white mt-[50px] block text-center mx-auto w-max text-base font-medium leading-[26px] py-3 px-[60px]"
        >
          Смотреть все
        </Link>
      </div>
    </section>
  );
};

export default Category;
