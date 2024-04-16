import { Link } from "react-router-dom";
import { Icons } from "../../assets/icons";
import HeaderTop from "./header-top";
import { DownOutlined } from "@ant-design/icons";
import { Badge, Dropdown } from "antd";
import { DropdownItems } from "@/data";
import { useState } from "react";
import { CartModal, LikeModal } from "..";

const Header = () => {
  const [likeModal, setLikeModal] = useState(false),
    [shopModal, setShopModal] = useState(false);

  function handleLike() {
    setLikeModal(!likeModal);
  }

  function handleShop() {
    setShopModal(!shopModal);
  }
  const items = DropdownItems;
  return (
    <header>
      <HeaderTop />
      <div className="container">
        <div className="flex items-center justify-between py-5">
          <div className="flex items-center gap-x-[105px]">
            <button type="button" name="button" className="w-14 h-11 ">
              <Icons.Logo className="w-full h-full object-contain" />
            </button>
            <nav className="flex items-center gap-x-8">
              <Link to={"/"}>Главная</Link>
              <Link to={"/catalog"} className="flex items-center gap-x-2">
                Каталог{""}
                <Dropdown menu={{ items }}>
                  <DownOutlined />
                </Dropdown>
              </Link>
              <Link to={"/products"}>Оптовая продажа</Link>
              <Link to={"/about"}>О нас</Link>
            </nav>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center">
              <button name="button" type="button">
                <Icons.CallIcon />
              </button>
              <a href="tel:+7 (966) 55 88 499">+7 (966) 55 88 499</a>
            </div>
            <button onClick={() => handleLike()} name="button" type="button">
              <Icons.LikeIcon />
            </button>
            <button onClick={() => handleShop()} name="button" type="button">
              {/* {cardItems.length ? ( */}
              {/* // <Badge count={cardItems.length}> */}
              <Icons.CartIcon />
              {/* </Badge> */}
              {/* ) : ( */}
              {/* <Icons.CartIcon /> */}
              {/* )} */}
            </button>
          </div>
          <CartModal handleShop={handleShop} open={shopModal} />
          <LikeModal handleLike={handleLike} open={likeModal} />
        </div>
      </div>
    </header>
  );
};

export default Header;
