import { Button, Input } from "@components/index";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";

export default function Header() {
  return (
    <header className="w-full p-2 flex flex-row bg-white justify-between items-center ">
      <p className="p-2 font-bold text-purple-800 text-2xl">LOGO</p>

      <div className="w-1/2 flex justify-center">
        <Input
          classes="w-3/4 hidden sm:flex border-white bg-gray-200 mr-0"
          placeholder="Search anything, we may have it"
        />
        <Button variants="text" classes="border-white bg-gray-200">
          <AiOutlineSearch />
        </Button>
      </div>

      <section className="hidden flex-row sm:flex">
        <Button
          variants="text"
          classes="text-gray-900 font-medium flex flex-row"
        >
          <AiOutlineUser color="black" size={20} style={{ marginRight: 5 }} />
          Account
        </Button>
        <Button
          variants="text"
          classes="text-gray-900 font-medium flex flex-row"
        >
          <AiOutlineShoppingCart
            color="black"
            size={20}
            style={{ marginRight: 5 }}
          />
          Cart
        </Button>
      </section>
    </header>
  );
}
