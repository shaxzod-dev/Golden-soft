import { Link } from "react-router-dom";

const CategoryCard = ({ el }: any) => {
  return (
    <Link
      to={`/catalog/${el.category}`}
      className={`p-2 hover:scale-110 transition-all duration-150 hover:shadow-2xl hover:cursor-pointer`}
    >
      <img src={el.image} alt={el.title} className="w-full" />
      <h3 className="mt-4 text-base font-normal leading-[26px]">{el.title}</h3>
      <button
        type="button"
        className="py-2 text-base font-medium leading-[26px] border-[1px] px-11 mt-4 border-[rgb(69,79,91)]"
      >
        Перейти
      </button>
    </Link>
  );
};

export default CategoryCard;
