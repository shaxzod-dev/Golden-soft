import {
  Banner,
  Category,
  Contact,
  Footer,
  Header,
  PopularProducts,
  SellerInfo,
  WhySection,
} from "@/components";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <SellerInfo />
      <WhySection />
      <Category />
      <PopularProducts pt={false} view={false} />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
