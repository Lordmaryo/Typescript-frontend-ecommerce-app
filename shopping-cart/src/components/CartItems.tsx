import useShoppingCart from "../contexts/ShoppingCartContext";
import StoreItems from "../data/items.json";
import FormatCurrency from "../utilities/FormatCurrency";

type CartItemsProps = {
  id: number;
  quantity: number;
};

function CartItems({ id, quantity }: CartItemsProps) {
  const { removeFromCart } = useShoppingCart();
  const item = StoreItems.find((i) => i.id === id);
  if (!item) return null;

  return (
    <div className="flex flex-row flex-wrap sm:flex-nowrap justify-between items-center px-5 py-5 gap-5">
      <div className="flex flex-row gap-2 items-center w-full sm:w-[300px] sm:mx-0 mx-auto">
        <img
          src={item.imgUrl}
          className="w-[125px] h-[80px] object-cover"
          alt={item.name}
        />
        <div className="flex flex-col gap-2">
          <span className="font-bold text-sm md:text-base">
            {item.name} {quantity > 1 && <span>({quantity})</span>}
          </span>
          <span className="text-[#939191] text-sm md:text-base">{FormatCurrency(item.price)}</span>
        </div>
      </div>
      <div className="w-full sm:w-[180px] sm:mx-0 mx-auto">
        <div className="text-[#939191] text-sm md:text-base">{FormatCurrency(item.price * quantity)}</div>
        <button
          className="p-1 mt-2 w-full text-white bg-red-500 font-bold"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItems;
