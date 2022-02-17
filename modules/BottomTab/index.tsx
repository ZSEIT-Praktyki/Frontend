import {
  AiOutlineHome,
  AiOutlineGroup,
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";

export default function BottomTab() {
  return (
    <nav className="w-full fixed bottom-0 left-0 flex flex-row bg-gray-900 justify-between border-t-2 border-gray-800 sm:hidden text-gray-400">
      <button className="flex flex-col p-2 items-center text-sm w-1/5 ">
        <AiOutlineHome color="white" size={25} />
        Home
      </button>
      <button className="flex flex-col p-2 items-center text-sm w-1/5">
        <AiOutlineGroup color="white" size={25} />
        Categories
      </button>
      <button className="flex flex-col p-2 items-center text-sm w-1/5">
        <AiOutlineShoppingCart color="white" size={25} />
        Cart
      </button>
      <button className="flex flex-col p-2 items-center text-sm w-1/5">
        <AiOutlineHeart color="white" size={25} />
        List
      </button>
      <button className="flex flex-col p-2 items-center text-sm w-1/5">
        <AiOutlineUser color="white" size={25} />
        Account
      </button>
    </nav>
  );
}
