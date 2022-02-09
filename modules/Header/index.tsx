import { Button, Input } from "@components/index";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";

export default function Header() {
  return (
    <header className="w-full p-2 flex flex-row bg-gray-900 justify-between items-center border-b-2 border-gray-800 sticky top-0 z-10">
      <p className="p-2 font-bold text-purple-800 text-2xl hidden sm:flex w-1/6">
        LOGO
      </p>

      <div className="w-full sm:w-4/6 justify-center flex m-0">
        <Input
          classes="w-4/5 flex border-gray-800 bg-gray-800 m-0"
          placeholder="Search anything, we may have it"
        />
        <Button
          variants="text"
          classes="border-gray-800 bg-gray-800 hover:bg-gray-900 m-0 ml-2"
        >
          <AiOutlineSearch />
        </Button>
      </div>

      <section className="hidden flex-row sm:flex w-1/6">
        <Button
          variants="text"
          classes="font-medium flex flex-row border-gray-800 bg-gray-800 hover:bg-gray-900 px-2"
        >
          <AiOutlineUser color="white" size={20} />
        </Button>
        <Button
          variants="text"
          classes="font-medium flex flex-row border-gray-800 bg-gray-800 hover:bg-gray-900 px-2"
        >
          <AiOutlineShoppingCart color="white" size={20} />
        </Button>
      </section>
    </header>
  );
}
