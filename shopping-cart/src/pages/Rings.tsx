import StoreItem from "../components/StoreItem";
import StoreItems from "../data/items.json";

function Rings() {
  return (
    <div>
      <div className="bg-cover w-full bg-center h-screen bg-[url('./assets/background-ring.png')]">
        <div className="flex flex-col pt-[70px] md:pt-[100px] items-center px-10 bg-[#121212b0] text-[#faf7f3cf] w-full h-screen text-center">
          <h1 className="text-[1.5rem] md:text-[2.8rem] font-medium uppercase">
            Rings
          </h1>
          <p className="md:w-[900px] text-sm sm:text-lg md:text-lg">
            Welcome to were you'll find a treasure trove of exquisite jewelry
            that's crafted with passion and precision. Our collection showcases
            some of the finest pieces, each designed to enchant and inspire.
            Dive into a world of elegance and craftsmanship right at your
            fingertips.
          </p>
        </div>
      </div>

      <div className="md:mx-20 mx-10 mt-10 grid lg:grid-cols-3 place-items-center sm:grid-cols-2 gap-10">
        {StoreItems.filter(
          (item) => item.category === "ring").map((item) => (
          <div key={item.id}>
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rings;
