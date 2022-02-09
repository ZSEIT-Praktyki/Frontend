import {
  AiOutlineHome,
  AiOutlineGroup,
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";

export default function Navbar() {
  return (
    <header className="w-full fixed bottom-0 left-0 flex flex-row bg-white justify-between border-t-2 border-black sm:hidden">
      <button className="flex flex-col p-2 items-center text-sm w-1/5">
        <AiOutlineHome color="black" size={25} />
        Home
      </button>
      <button className="flex flex-col p-2 items-center text-sm w-1/5">
        <AiOutlineGroup color="black" size={25} />
        Categories
      </button>
      <button className="flex flex-col p-2 items-center text-sm w-1/5">
        <AiOutlineShoppingCart color="black" size={25} />
        Cart
      </button>
      <button className="flex flex-col p-2 items-center text-sm w-1/5">
        <AiOutlineHeart color="black" size={25} />
        List
      </button>
      <button className="flex flex-col p-2 items-center text-sm w-1/5">
        <AiOutlineUser color="black" size={25} />
        Account
      </button>
    </header>
  );
}
