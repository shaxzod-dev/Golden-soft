import { SellerData } from "@/data";

const SellerInfo = () => {
  return (
    <section className="bg-[rgb(242,248,255)]">
      <div className="container">
        <div className="flex items-center justify-center py-10 gap-[82px]">
          {SellerData.map(({ id, quantity, desc }) => {
            return (
              <div key={id} className="flex flex-col items-center gap-4">
                <h3 className="text-[32px] font-semibold leading-[38px]">
                  {quantity}
                </h3>
                <p className="text-base font-semibold leading-[26px] text-primary">
                  {desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SellerInfo;
