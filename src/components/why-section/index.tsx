import { WhyData } from "@/data";

const WhySection = () => {
  return (
    <section className="pt-[97px] pb-[100px]">
      <div className="container">
        <h1 className="text-[44px] font-semibold leading-[62px] text-center">
          Почему GoldenService?
        </h1>
        <div className="flex items-center justify-center gap-[78px] mt-14">
          {WhyData.map((el) => (
            <div key={el.id} className="flex flex-col items-center">
              <div className="w-[82px] h-[82px]">{el.icon}</div>
              <h3 className="text-primary text-center max-w-[345px] mt-9 text-xl font-normal leading-8">
                {el.text}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
