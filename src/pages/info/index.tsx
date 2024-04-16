import { useEffect, useState, useContext } from "react";
import {
  BreadcrumbAntd,
  CatalogSection,
  Contact,
  Footer,
  Header,
  InfoCard,
  PopularProducts,
} from "@/components";
import { IGoldenData } from "@/types";
import { useParams } from "react-router-dom";

const Info = () => {
  const { id } = useParams();
  const [data, setData] = useState<IGoldenData[]>([]);

  async function getData() {
    return await fetch(`${import.meta.env.VITE_API_URL}/golden-data?id=${id}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }
  useEffect(() => {
    getData();
  }, [id]);
  console.log(data[0], id);

  return (
    <>
      <Header />
      <BreadcrumbAntd linker={id} page={"info"} title={"INFO"} />
      <InfoCard el={data[0]} />
      <PopularProducts view={true} pt={false} />
      <CatalogSection />
      <Contact />
      <Footer />
    </>
  );
};

export default Info;
