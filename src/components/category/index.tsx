import { title } from "@/data";
import { ICategoryData } from "@/types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CategoryCard } from "..";
import Skeleton from "react-loading-skeleton";

const Category = ({ btn }: { btn: boolean }) => {
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
          {categories ? (
            categories.map((el) => <CategoryCard key={el.id} el={el} />)
          ) : (
            <div className="bg-red-500">
              <h1>hiiii</h1>
              <Skeleton  className="bg-red-500 w-[300px] h-[200px]" />
            </div>
          )}
        </div>
        {btn ? (
          <Link
            to={"/products"}
            className="bg-blue-500 text-white mt-[50px] block text-center mx-auto w-max text-base font-medium leading-[26px] py-3 px-[60px]"
          >
            Смотреть все
          </Link>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default Category;
