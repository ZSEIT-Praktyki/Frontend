import { useRouter } from "next/router";
import {
  AiOutlineHome,
  AiOutlineGroup,
  AiOutlineHeart,
  AiOutlineUser,
} from "react-icons/ai";

import { BiPlus } from "react-icons/bi";

export default function BottomTab() {
  const router = useRouter();

  return null;

  /* return (
    <nav className="w-full fixed bottom-0 left-0 flex flex-row bg-gray-900 justify-between border-t-2 border-gray-800 sm:hidden text-gray-400">
      <button
        className="flex flex-col p-2 items-center text-sm w-1/5 "
        onClick={() => router.push("/")}
      >
        <AiOutlineHome color="white" size={25} />
        Home
      </button>
      <button
        className="flex flex-col p-2 items-center text-sm w-1/5"
        onClick={() => router.push("/categories")}
      >
        <AiOutlineGroup color="white" size={25} />
        Categories
      </button>
      <button
        className="flex flex-col p-2 items-center text-sm w-1/5"
        onClick={() => router.push("/add")}
      >
        <BiPlus color="white" size={25} />
        Add
      </button>
      <button
        className="flex flex-col p-2 items-center text-sm w-1/5"
        onClick={() => router.push("/watchlist")}
      >
        <AiOutlineHeart color="white" size={25} />
        List
      </button>
      <button
        className="flex flex-col p-2 items-center text-sm w-1/5"
        onClick={() => router.push("/user/account")}
      >
        <AiOutlineUser color="white" size={25} />
        Account
      </button>
    </nav>
  ); */
}
