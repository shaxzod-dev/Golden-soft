import { Link } from "react-router-dom";

const CategoryCard = ({ el }: any) => {
  return (
    <Link
      key={el.id}
      to={`/catalog/${el.category}`}
      className="p-2 max-w-[288px] hover:scale-110 transition-all duration-150 hover:shadow-2xl hover:cursor-pointer"
    >
      <div className="w-full">
        <img className="w-full h-auto" src={el.image} alt={el.title} />
      </div>
      <h3 className="mt-4 text-base font-normal leading-[26px]">{el.title}</h3>
    </Link>
  );
};

export default CategoryCard;
