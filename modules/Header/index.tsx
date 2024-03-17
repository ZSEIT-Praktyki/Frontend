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
import { MdKeyboardArrowDown } from "react-icons/md";
import useAuthenticate from "@utils/hooks/useAuthenticate";
import Head from "next/head";

export default function Header() {
  const { isLoggedIn } = useSelector((state) => state.user);
  const router = useRouter();
  const [show, setShow] = useState(false);
  const { signOut } = useAuthenticate("login");

  return (
    <header className="w-full p-2 flex flex-col bg-zinc-900 justify-between items-center border-b-2 border-zinc-900 sticky top-0 z-20">
      <Head>
        <title>Home</title>
      </Head>
      <main className="flex w-full justify-between p-2 items-center">
        <section className="p-2 font-bold !text-white text-2xl flex flex-1 items-center">
          <div className="relative w-50 h-50">
            <Link href={"/"}>LOGO</Link>
          </div>
        </section>

        <section className="hidden sm:flex w-full justify-center">
          <SearchForm />
        </section>

        <section className="flex gap-2">
          <button
            name="add post"
            className="flex p-2 hover:bg-zinc-800 rounded justify-center items-center relative transition-colors cursor-pointer"
            onClick={() => router.push("/listing/create")}
          >
            <AiOutlinePlusCircle color="white" size={25} />
          </button>

          <button
            name="followed posts"
            className="flex p-2 hover:bg-zinc-800 rounded justify-center items-center relative transition-colors cursor-pointer"
            onClick={() => router.push("/user/watchlist")}
          >
            <AiOutlineHeart color="white" size={25} />
          </button>

          <button
            name="account"
            className="flex p-2 hover:bg-zinc-800 rounded justify-center items-center relative transition-colors cursor-pointer"
            onClick={() => setShow(!show)}
          >
            <AiOutlineUser color="white" size={25} />
            <MdKeyboardArrowDown
              color="white"
              size={20}
              className={`mt-1 ${show ? "rotate-180" : "rotate-0"}`}
            />
          </button>

          {show && (
            <article
              onMouseLeave={() => setShow(false)}
              className="bg-zinc-900 text-white  flex flex-col absolute p-2 rounded-md -bottom-24 right-2 w-52 shadow-2xl drop-shadow-2xl border border-zinc-700"
            >
              {isLoggedIn && (
                <>
                  <button
                    name="my account"
                    className="transition-colors p-2 hover:bg-zinc-800 rounded font-medium"
                    onClick={() => router.push("/user/account")}
                  >
                    My account
                  </button>
                  <button
                    name="sign out"
                    className="transition-colors p-2 mt-2 hover:bg-zinc-800 rounded font-medium"
                    onClick={signOut}
                  >
                    Sign out
                  </button>
                </>
              )}
              {!isLoggedIn && (
                <>
                  <button
                    onClick={() => router.push("/auth/login")}
                    name="sign out"
                    className="transition-colors p-2 mt-2 hover:bg-zinc-800 rounded font-medium"
                  >
                    Log in
                  </button>
                  <button
                    onClick={() => router.push("/auth/register")}
                    name="sign out"
                    className="transition-colors p-2 mt-2 hover:bg-gray-700 rounded font-medium"
                  >
                    Register
                  </button>
                </>
              )}
            </article>
          )}
        </section>
      </main>
      <section className="flex sm:hidden w-full">
        <SearchForm />
      </section>
    </header>
  );
}
