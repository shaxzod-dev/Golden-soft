import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components";
import BreadcrumbAntd from "@/components/antd";
import { IGoldenData } from "@/types";
import { Icons } from "@/assets/icons";
import { Flex, Rate } from "antd";
import CatalogCard from "@/components/catalog-card";
const Catalog = () => {
  const { category } = useParams();

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
      <BreadcrumbAntd linker={category} title={category?.toUpperCase()} />
      <div className="container">
        <div className="flex flex-wrap gap-[30px]">
          {fakeArray.map(() => (
            <>
              {data.map((el) => (
                <CatalogCard el={el} />
              ))}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Catalog;
