import SearchForm from "@modules/SearchForm";
import { useSelector } from "@utils/store/store";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";
import useAuthenticate from "@utils/hooks/useAuthenticate";

export default function Header() {
  const { isLoggedIn } = useSelector((state) => state.user);
  const router = useRouter();

  const [show, setShow] = useState(false);

  const { signOut } = useAuthenticate("login");

  return (
    <header className="w-full p-2 flex flex-col bg-gray-900 justify-between items-center border-b-2 border-gray-800 sticky top-0 z-10">
      <section className="flex w-full justify-between p-2 items-center">
        <p className="p-2 font-bold !text-rose-600 text-2xl flex flex-1 items-center">
          <button className="hidden sm:flex">
            <GiHamburgerMenu size={30} color="white" className="mr-2" />
          </button>
          <Link href={"/"}>LOGO</Link>
        </p>

        <section className="hidden sm:flex w-full justify-center">
          <button className="flex sm:hidden">
            <GiHamburgerMenu size={30} color="white" />
          </button>
          <SearchForm />
        </section>

        <section className="flex">
          <button
            className="p-2 flex justify-center"
            onClick={() => router.push("/add")}
          >
            <AiOutlinePlusCircle color="white" size={25} />
          </button>

          <button
            className="p-2 flex justify-center"
            onClick={() => router.push("/watchlist")}
          >
            <AiOutlineHeart color="white" size={25} />
          </button>

          <button className="flex p-2" onClick={() => setShow(!show)}>
            <AiOutlineUser color="white" size={25} />
            <MdKeyboardArrowDown
              color="white"
              size={20}
              className={`mt-1 ${show ? "rotate-180" : "rotate-0"}`}
            />
          </button>

          {show && (
            <article className="bg-gray-800 text-white  flex flex-col absolute p-2 rounded-md -bottom-24 right-2 w-52">
              {isLoggedIn && (
                <>
                  <button
                    className="transition-colors p-2 hover:bg-gray-700 rounded font-medium"
                    onClick={() => router.push("/user/account")}
                  >
                    My account
                  </button>
                  <button
                    className="transition-colors p-2 mt-2 hover:bg-gray-700 rounded font-medium"
                    onClick={signOut}
                  >
                    Sign out
                  </button>
                </>
              )}
            </article>
          )}
        </section>
      </section>
      <section className="flex sm:hidden w-full">
        <button>
          <GiHamburgerMenu size={30} color="white" />
        </button>
        <SearchForm />
      </section>
    </header>
  );
}
