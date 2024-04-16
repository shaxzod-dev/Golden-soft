import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BreadcrumbAntd, CatalogCard, Header } from "@/components";
import { IGoldenData } from "@/types";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const CatalogCategory = () => {
  const { category } = useParams<string>();

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
  let fakeArray: never[] = Array.from({ length: 6 });

  return (
    <>
      <Header />
      <BreadcrumbAntd
        page={"catalog"}
        linker={category}
        title={category?.toUpperCase()}
      />
      <div className="container">
        <div className="flex flex-wrap gap-[30px]">
          {fakeArray.map(() => (
            <>
              {data.length
                ? data.map((el) => <CatalogCard key={el.id} el={el} />)
                : fakeArray.map((i) => (
                    <Skeleton width={288} height={342} key={i} />
                  ))}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default CatalogCategory;
