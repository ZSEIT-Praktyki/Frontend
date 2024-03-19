import { ReactNode } from "react";
import Link from "next/link";
import { useSelector } from "@utils/store/store";
import NotAuthenticated from "@modules/NotAuthenticated";
import clsx from "clsx";
import { useRouter } from "next/router";
import path from "path";

interface UserLayoutProps {
  children: ReactNode;
}

export default function UserLayout({ children }: UserLayoutProps) {
  const { isLoggedIn } = useSelector((state) => state.user);

  const router = useRouter();

  const style = (path: string) =>
    clsx("mt-2 ml-2 px-5 p-3 text-white font-medium rounded-md", {
      "bg-zinc-800": router.pathname.endsWith(path),
    });

  return (
    <main className="w-full min-h-screen flex justify-center">
      <section className="flex flex-col w-full  md:flex-row">
        <aside className="flex flex-1 flex-col m-3 bg-zinc-900 rounded md:sticky top-28">
          <nav className="w-full p-2">
            <ul>
              <h2 className="text-white font-bold mb-2 p-2 text-2xl rounded-md">
                MY SALES
              </h2>
              <li className={style("/user/active-listings")}>
                <Link href="/user/active-listings">Active listings</Link>
              </li>
              <li className={style("/user/ended-listings")}>
                <Link href="/user/ended-listings">Ended listings</Link>
              </li>
              <li className={style("/user/customer-purchases")}>
                <Link href="/user/customer-purchases">Customer purchases</Link>
              </li>
              <h2 className="text-white font-bold mb-2 p-2 text-2xl rounded-md">
                MY PURCHASES
              </h2>
              <li className={style("/user/purchases")}>
                <Link href="/user/purchases">Purcharsed</Link>
              </li>

              <h2 className="text-white font-bold mb-2 p-2 text-2xl rounded-md">
                Watchlist
              </h2>
              <li className={style("/user/watchlist")}>
                <Link href="/user/watchlist">Watchlist</Link>
              </li>
              <li className={style("/user/account")}>
                <Link href="/user/account">Account</Link>
              </li>
            </ul>
          </nav>
        </aside>
        <article
          className={clsx("flex flex-[3] m-3  rounded p-2", {
            "bg-zinc-900": isLoggedIn,
          })}
        >
          {isLoggedIn ? children : <NotAuthenticated />}
        </article>
      </section>
    </main>
  );
}
