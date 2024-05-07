import { CiHome, CiSearch, CiShoppingCart } from "react-icons/ci";
import { FaStore } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose, IoInformationCircleOutline } from "react-icons/io5";
import _, { useState } from "react";
import useShoppingCart from "../contexts/ShoppingCartContext";

function NavBar() {
  const [nav, setNav] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const { openCart, cartQuantity } = useShoppingCart();

  const handleNav = () => {
    setNav(!nav);
  };

  const closeMenu = () => {
    setNav(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchInput("");
    closeMenu();
    navigate("/Searched/" + searchInput);
  };

  return (
    <div className="bg-[#121212] w-full px-[20px] pt-4 z-[-999]">
      <nav className="h-[60px] md:h-[70px] border-b border-[#2b2a2a]">
        <div className="flex flex-row justify-between items-center md:flex">
          <form
            onSubmit={handleSubmit}
            className="hidden md:flex items-center border border-[#413f3f] rounded-md p-2"
          >
            <CiSearch className="h-5 w-5 text-gray-400" />
            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              type="text"
              className="pl-2 outline-none bg-transparent"
              placeholder="search something"
            />
          </form>
          <NavLink to="/">
            <div className="px-4">
              <div className="logo-name">
                <span className="tracking-[10px] text-white font-bold text-[1rem] md:text-[1.8rem] sm:text-[1.5rem]">
                  LordMaryo
                </span>
                <span className="tracking-[5px] text-md md:text-xl">
                  Jewellers
                </span>
              </div>
            </div>
          </NavLink>
          <div>
            <ul className="text-md hidden md:flex flex-row items-center justify-between gap-[30px]">
              <li>
                <div className="icon-container">
                  <button onClick={openCart}>
                    <CiShoppingCart size={30} />
                    <div
                      className={
                        cartQuantity
                          ? "absolute right-1 top-1 rounded-full text-white bg-red-500 w-4 h-4 flex items-center justify-center text-sm"
                          : ""
                      }
                    >
                      {cartQuantity || ""}
                    </div>
                  </button>
                  <span className="icon-description">Cart</span>
                </div>
              </li>
              <NavLink to="/">
                <li>
                  <div className="icon-container">
                    <CiHome className="text-[1.5rem]" />
                    <span className="icon-description">Home</span>
                  </div>
                </li>
              </NavLink>
              <NavLink to="/about">
                <li>
                  <div className="icon-container">
                    <IoInformationCircleOutline className="text-[1.5rem]" />
                    <span className="icon-description">About</span>
                  </div>
                </li>
              </NavLink>
              <NavLink to="/store">
                <li>
                  <div className="icon-container">
                    <FaStore className="text-[1.5rem]" />
                    <span className="icon-description">Store</span>
                  </div>
                </li>
              </NavLink>
            </ul>
          </div>
          <div className="flex md:hidden flex-row gap-4 font-bold absolute right-4 z-10">
            <div className="icon-container">
              <button className="relative" onClick={openCart}>
                <CiShoppingCart size={30} />
                <div
                  className={
                    cartQuantity
                      ? "absolute right-1 top-1 rounded-full text-white bg-red-500 w-4 h-4 flex items-center justify-center text-sm"
                      : ""
                  }
                >
                  {cartQuantity || ""}
                </div>
              </button>
            </div>
            <button className="" onClick={handleNav}>
              {!nav ? <GiHamburgerMenu size={20} /> : <IoClose size={20} />}
            </button>
          </div>
        </div>

        <div
          className={
            !nav
              ? "hidden"
              : "flex gap-[20px] overflow-auto fixed left-0 top-0 flex-col pt-[30px] w-[100%] h-full border-r border-gray-600 ease-in-out duration-500 bg-black"
          }
        >
          <NavLink to="/">
            <div className="relative left-[-30%]">
              <div className="logo-name pl-20">
                <span className="tracking-[10px] text-white font-bold text-[.9rem] md:text-[1.8rem]">
                  LordMaryo
                </span>
                <span className="tracking-[5px] text-md md:text-xl">
                  Jewellers
                </span>
              </div>
            </div>
          </NavLink>

          <div>
            <form
              onSubmit={handleSubmit}
              className="flex items-center border border-[#413f3f] rounded-md p-2 w-[80%] mx-auto"
            >
              <CiSearch className="h-5 w-5 text-gray-400" />
              <input
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                type="text"
                className="pl-2 outline-none bg-transparent w-full"
                placeholder="search something"
              />
            </form>
          </div>

          <ul className="text-md font-bold flex flex-col items-center justify-between gap-[30px] w-full pb-[20px]">
            <NavLink to="/" onClick={closeMenu}>
              <li className="hover:underline">
                <div>Home</div>
              </li>
            </NavLink>
            <NavLink to="/about" onClick={closeMenu}>
              <li className="hover:underline">
                <div>About</div>
              </li>
            </NavLink>
            <NavLink to="/store" onClick={closeMenu}>
              <li className="hover:underline">
                <div>Store</div>
              </li>
            </NavLink>
          </ul>

          <hr className="w-full" />

          <ul className="font-bold text-[#f6ede28c] flex flex-col items-center justify-center gap-5 text-center pb-5">
            <li className="hover:underline">
              <NavLink to="/watches" onClick={closeMenu}>
                watches
              </NavLink>
            </li>
            <li className="hover:underline">
              <NavLink to="/necklaces" onClick={closeMenu}>
                Necklaces
              </NavLink>
            </li>
            <li className="hover:underline">
              <NavLink to="/rings" onClick={closeMenu}>
                Rings
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
