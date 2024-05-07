import useShoppingCart from "../contexts/ShoppingCartContext";
import FormatCurrency from "../utilities/FormatCurrency";

type storeItemProps = {
  id: number
  name: string;
  imgUrl: string;
  price: number;
};

function StoreItem({ id, name, imgUrl, price }: storeItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    // removeFromCart,
   } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <div className="flex flex-col items-center m-w-[300px]">
      <div>
        <img
          src={imgUrl}
          className="w-[300px] h-[300px] object-cover rounded-sm"
          alt={name}
        />
      </div>
      <div className="flex flex-col items-center gap-2 my-2 mx-4 flex-nowrap">
        <span className="font-bold text-sm md:text-base">{name}</span>
        <span className="text-[#939191] text-sm md:text-base">
          {FormatCurrency(price)}
        </span>
      </div>
      <div className="w-full">
        {quantity === 0 ? (
          <button 
          onClick={()=> increaseCartQuantity(id)}
          className="bg-[#f6ede2cf] text-[#121212] border hover:border-[#f6ede2cf] hover:bg-transparent hover:text-[#f6ede2cf] py-2 w-full">
            Add to Cart
          </button>
        ) : (
          <div className="flex flex-row justify-around px-10">
            <button 
            onClick={()=> decreaseCartQuantity(id)}
            className="font-bold bg-[#f6ede2cf] text-[#121212] hover:bg-[#d3c9bdcf] px-5">
              -
            </button>
            <span className="px-2">{quantity}</span>
            <button 
            onClick={()=> increaseCartQuantity(id)}
            className="font-bold bg-[#f6ede2cf] text-[#121212] hover:bg-[#d3c9bdcf] px-5">
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default StoreItem;