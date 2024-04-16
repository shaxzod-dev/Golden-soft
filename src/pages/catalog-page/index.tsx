import { useEffect, useState } from "react";
import {
  CatalogCard,
  CatalogSection,
  Contact,
  Footer,
  Header,
  PopularProducts,
} from "@/components";
import { IGoldenData } from "@/types";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Pagination } from "antd";
const CatalogPage = () => {
  const [data, setData] = useState<IGoldenData[]>([]);
  async function getData() {
    return await fetch(`${import.meta.env.VITE_API_URL}/golden-data`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }
  useEffect(() => {
    getData();
  }, []);
  let fakeArray: never[] = Array.from({ length: 1 });

  console.log(data[0]);

  return (
    <>
      <Header />
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
        <Pagination className="mt-[30px]" defaultCurrent={1} total={50} />
      </div>
      <PopularProducts view={true} pt={true} />
      <CatalogSection />
      <Contact />
      <Footer />
    </>
  );
};

export default CatalogPage;
