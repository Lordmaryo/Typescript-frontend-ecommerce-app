// import { useEffect } from "react";
import { useParams } from "react-router-dom";
import StoreItem from "../components/StoreItem";
import StoreItems from "../data/items.json";

function Searched() {
  const { params } = useParams();

  return (
    <div className="flex flex-col justify-center">
      <h1 className="md:text-2xl sm:text-xl text-base font-bold my-5 ml-5">
        {StoreItems.filter(
          (item) => item.category === params || item.name === params
        ).length > 0 ? (
          params?.toUpperCase()
        ) : (
          <>
            <span className="font-extralight">No results for</span>
            <span className="font-bold text-red-400"> { params }</span>
          </>
        )}
      </h1>

      <div className="md:mx-20 mx-10 mt-10 grid lg:grid-cols-3 place-items-center sm:grid-cols-2 gap-10">
        {StoreItems.filter(
          (item) => item.category === params || item.name === params
        ).map((item) => (
          <div key={item.id}>
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Searched;
