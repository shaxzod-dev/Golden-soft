import { Link } from "react-router-dom";
import { Icons } from "@/assets/icons";
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { DropdownItems } from "@/data";

const Footer = () => {
  const items = DropdownItems;
  return (
    <section className="pt-[55px] pb-[25px] bg-[rgb(13,36,54)]">
      <div className="container">
        <div className="grid grid-cols-5">
          <div className="flex flex-col justify-between gap-[30px]">
            <div className="w-[105px] h-[88px]">
              <Icons.FooterLogoIcon className="w-full h-full" />
            </div>
            <div className="flex items-center gap-6">
              <a
                className="hover:scale-125 transition-all duration-300"
                href="https://vk.com/"
                target="_blank"
              >
                <Icons.VKIcon />
              </a>
              <a
                className="hover:scale-125 transition-all duration-300"
                href="https://twitter.com/"
                target="_blank"
              >
                <Icons.TwitterIcon />
              </a>
              <a
                className="hover:scale-125 transition-all duration-300"
                href="https://www.facebook.com/"
                target="_blank"
              >
                <Icons.FaceBookIcon />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-normal text-lg leading-7">
              Навигация
            </h3>
            <nav className="flex flex-col gap-4">
              <Link
                to={"/"}
                className="text-base font-light leading-[26px] text-white"
              >
                Главная
              </Link>
              <Link
                to={"/catalog"}
                className="text-base font-light leading-[26px] text-white flex items-center gap-x-2"
              >
                Каталог{" "}
                <Dropdown menu={{ items }}>
                  <DownOutlined className="rotate-180" />
                </Dropdown>
              </Link>
              <Link
                to={"/products"}
                className="text-base font-light leading-[26px] text-white"
              >
                Оптовая продажа
              </Link>
              <Link
                to={"/about"}
                className="text-base font-light leading-[26px] text-white"
              >
                О нас
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-normal text-lg leading-7">
              Наши контакты
            </h3>
            <div className="flex flex-col gap-4">
              <h4 className="text-[rgb(196,205,213)] text-sm font-light leading-6">
                Телефоны
              </h4>
              <div className="flex flex-col gap-3">
                <span className="text-[rgb(255,255,255)] text-base font-light leading-[26px]">
                  +7 (988) 565 00 38
                </span>
                <span className="text-[rgb(255,255,255)] text-base font-light leading-[26px]">
                  +375 33 662 82 56
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-[rgb(196,205,213)] text-sm font-light leading-6">
                Email
              </h4>
              <div className="flex flex-col gap-3">
                <span className="text-[rgb(255,255,255)] text-base font-light leading-[26px]">
                  vladpertcev@mail.ru
                </span>
                <span className="text-[rgb(255,255,255)] text-base font-light leading-[26px]">
                  korobko416@gmail.com
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-normal text-lg leading-7">
              Наш адрес
            </h3>
            <p className="max-w-[182px] w-full text-white text-base font-light leading-[26px]">
              Россия, Ростов-на-Дону ул. Богачева, 16
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-normal text-lg leading-7">
              Информация
            </h3>
            <div className="flex flex-col gap-4">
              <span className="text-white text-base font-light leading-[26px]">
                Доставка и оплата
              </span>
              <span className="text-white text-base font-light leading-[26px]">
                Гарантии
              </span>
              <span className="text-white text-base font-light leading-[26px]">
                Возврат товара
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
