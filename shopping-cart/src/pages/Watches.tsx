import StoreItem from "../components/StoreItem";
import StoreItems from "../data/items.json";

function Watches() {
  return (
    <div>
      <div className="bg-cover w-full bg-center h-screen bg-[url('./assets/img-4.jpg')]">
        <div className="pt-[70px] md:pt-[100px] px-10 bg-[#121212b0] text-[#faf7f3cf] w-full h-screen">
          <div className="sm:w-[400px] absolute right-0 px-5 lg:mr-20">
            <h1 className="text-[1.5rem] md:text-[2.8rem] font-medium uppercase">
              Watches
            </h1>
            <p>
              LordMaryo Jewellers carry the country's finest selection of Swiss
              timepieces. We are an official retailer for 18 brands, several of
              which are available exclusively from LordMaryo Jewellers in New
              Zealand.
            </p>
          </div>
        </div>
      </div>

      <div className="md:mx-20 mx-10 mt-10 grid lg:grid-cols-3 place-items-center sm:grid-cols-2 gap-10">
        {StoreItems.filter((item) => item.category === "watch").map((item) => (
          <div key={item.id}>
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Watches;
