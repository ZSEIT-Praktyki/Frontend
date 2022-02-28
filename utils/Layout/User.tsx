import { ReactNode } from "react";
import Link from "next/link";

interface UserLayoutProps {
  children: ReactNode;
}

export default function UserLayout({ children }: UserLayoutProps) {
  return (
    <main className="w-full min-h-screen flex justify-center">
      <section className="flex flex-row w-4/5">
        <aside className="flex flex-1 flex-col m-3 bg-gray-800 rounded">
          <nav className="w-full p-2">
            <ul className="bg-gray-900 rounded">
              <h2 className="text-white font-bold mb-2 p-2 text-2xl rounded-md">
                MY SALES
              </h2>
              <li className="mt-2 ml-2 p-2 text-white font-medium">
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
                <Link href="/user/active-listings">Purcharsed</Link>
              </li>
            </ul>
          </nav>
        </aside>
        <article className="flex flex-[3] m-3 bg-gray-800 rounded p-2">
          {children}
        </article>
      </section>
    </main>
  );
}
