import { ReactNode } from "react";
import Link from "next/link";
import { useSelector } from "@utils/store/store";
import NotAuthenticated from "@modules/NotAuthenticated";

interface UserLayoutProps {
  children: ReactNode;
}

export default function UserLayout({ children }: UserLayoutProps) {
  const { isLoggedIn } = useSelector((state) => state.user);
  return (
    <main className="w-full min-h-screen flex justify-center">
      <section className="flex flex-col w-full  md:flex-row">
        <aside
          className="flex flex-1 flex-col m-3 bg-gray-800 rounded md:sticky top-28"
          style={{ maxHeight: "30rem" }}
        >
          <nav className="w-full p-2">
            <ul>
              <h2 className="text-white font-bold mb-2 p-2 text-2xl rounded-md">
                MY SALES
              </h2>
              <li className={`mt-2 ml-2 p-2 text-white font-medium `}>
                <Link href="/user/active-listings">Active listings</Link>
              </li>
              <li className="mt-2 ml-2 p-2 text-white font-medium">
                <Link href="/user/ended-listings">Ended listings</Link>
              </li>
              <li className="mt-2 ml-2 p-2 text-white font-medium">
                <Link href="/user/customer-purchases">Customer purchases</Link>
              </li>
              <h2 className="text-white font-bold mb-2 p-2 text-2xl rounded-md">
                MY PURCHASES
              </h2>
              <li className="mt-2 ml-2 p-2 text-white font-medium">
                <Link href="/user/purchases">Purcharsed</Link>
              </li>

              <h2 className="text-white font-bold mb-2 p-2 text-2xl rounded-md">
                Watchlist
              </h2>
              <li className="mt-2 ml-2 p-2 text-white font-medium">
                <Link href="/user/watchlist">Watchlist</Link>
              </li>
              <li className="mt-2 ml-2 p-2 text-white font-medium">
                <Link href="/user/account">Account</Link>
              </li>
            </ul>
          </nav>
        </aside>
        <article className="flex flex-[3] m-3 bg-gray-800 rounded p-2">
          {isLoggedIn ? children : <NotAuthenticated />}
        </article>
      </section>
    </main>
  );
}
