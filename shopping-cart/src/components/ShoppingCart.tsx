import useShoppingCart from "../contexts/ShoppingCartContext";
import { IoClose } from "react-icons/io5";
import CartItems from "./CartItems";
import StoreItems from "../data/items.json";
import FormatCurrency from "../utilities/FormatCurrency";

type ShoppingCartProps = {
  isOpen: boolean;
};

function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <div>
      <div
        className={
          isOpen
            ? "flex gap-[20px] overflow-auto fixed right-0 top-0 z-10 flex-col w-[100%] lg:w-[50%] md:w-[70%] h-full border-r border-gray-600 ease-in duration-200 bg-black transform translate-x-0"
            : "flex gap-[20px] overflow-auto fixed right-0 top-0 z-10 flex-col w-[100%] lg:w-[50%] md:w-[70%] h-full border-r border-gray-600 ease-in duration-200 bg-black transform translate-x-full"
        }
      >
        <div className="flex flex-row justify-between px-5 items-center mt-10 h-[100px]">
          <span className="font-bold uppercase">Cart</span>
          <button className="w-10 absolute right-0" onClick={closeCart}>
            <IoClose size={30} />
          </button>
        </div>

        <div>
          {cartItems.map((item) => (
            <CartItems key={item.id} {...item} />
          ))}
        </div>
        <div className="flex flex-row flex-wrap justify-between items-center m-5 gap-5">
          {cartItems.length === 0 ? (
            <p className="text-sm md:text-lg uppercase text-center">Cart is empty!</p>
          ) : (
            <>
              <p className="text-sm md:text-lg uppercase">Subtotal</p>
              <span className="font-bold text-sm md:text-lg uppercase">
                {FormatCurrency(
                  cartItems.reduce((total, cartItem) => {
                    const item = StoreItems.find((i) => i.id === cartItem.id);
                    return total + (item?.price || 0) * cartItem.quantity;
                  }, 0)
                )}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
