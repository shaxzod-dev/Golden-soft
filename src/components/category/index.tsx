import { title } from "@/data";
import { ICategoryData } from "@/types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CategoryCard } from "..";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Category = () => {
  const [categories, setCategories] = useState<ICategoryData[]>([]);

  async function getCategory() {
    await fetch(`${import.meta.env.VITE_API_URL}/categories`)
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <section className="pb-[50px]">
      <div className="container">
        <h1 className={`${title} text-center`}>Категории</h1>
        <div className="grid grid-cols-4 gap-10 mt-16">
          {categories.length
            ? categories.map((el) => <CategoryCard key={el.id} el={el} />)
            : Array.from({ length: 4 }).map((el: any) => (
                <Skeleton width={288} height={342} key={el} />
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
