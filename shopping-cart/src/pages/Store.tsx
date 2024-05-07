import _, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import StoreItem from "../components/StoreItem";
import StoreItems from "../data/items.json";

interface Item {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
}

function Store() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    setItems(shuffleArray(StoreItems));
  }, []);

  const shuffleArray = (array: Item[]): Item[] => {
    const shuffledArray = [...array];
    shuffledArray.sort(() => Math.random() - 0.5);
    return shuffledArray;
  };

  return (
    <div>
      <div className="bg-cover w-full bg-center h-screen bg-[url('./assets/background-store.jpg')]">
        <div className="flex flex-col pt-[70px] md:pt-[100px] items-center px-10 bg-[#121212b0] text-[#faf7f3cf] w-full h-screen text-center">
          <h1 className="text-[1.5rem] md:text-[2.8rem] font-medium uppercase">
            Store
          </h1>
          <p className="md:w-[900px] text-sm sm:text-lg md:text-lg">
            Welcome to were you'll find a treasure trove of exquisite jewelry
            that's crafted with passion and precision. Our collection showcases
            some of the finest pieces, each designed to enchant and inspire.
            Dive into a world of elegance and craftsmanship right at your
            fingertips.
          </p>
          <div
            className="mt-[25px] sm:mt-[80px] md:mt-[120px]"
            title="scroll down"
          >
            <div className="bouncing-icon">
              <IoIosArrowDown size={40} />
            </div>
          </div>
        </div>
      </div>

      <div className="md:mx-20 mx-10 mt-10 grid lg:grid-cols-3 place-items-center sm:grid-cols-2 gap-10">
        {items.map((item) => (
          <div key={item.id}>
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Store;
