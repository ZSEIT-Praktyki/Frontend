import WatchlistListing from "@modules/WatchlistListing";
import UserLayout from "@utils/Layout/User";
import { useGetWatchlistQuery } from "@utils/services/watchlistService";
import Head from "next/head";
import Image from "next/image";

export default function Watchlist() {
  const { data = [] as WatchListProps[] } = useGetWatchlistQuery({}, {});

  return (
    <UserLayout>
      <main className="w-full flex justify-center">
        <Head>
          <title>Watchlist</title>
        </Head>

        <main className="p-2 w-full min-h-screen flex flex-col items-center ">
          {data.map((props, index) => (
            <WatchlistListing
              index={index}
              key={props.watchlist_id}
              {...props}
            />
          ))}

          {data.length === 0 && (
            <section className=" w-4/5 h-4/5">
              <h1 className="text-white text-4xl mb-2 md:text-8xl w-full font-bold text-center">
                Empty List
              </h1>
              <div className="relative w-full h-full">
                <Image src="/Empty.svg" alt="" layout="fill" />
              </div>
            </section>
          )}
        </main>
      </main>
    </UserLayout>
  );
}
