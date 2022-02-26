import WatchlistListing from "@modules/WatchlistListing";
import { useGetWatchlistQuery } from "@utils/services/watchlistService";
import Head from "next/head";
import Image from "next/image";

export default function Watchlist() {
  const { data = [] } = useGetWatchlistQuery({}, {});

  return (
    <main className="w-full bg-gray-900 flex justify-center">
      <Head>
        <title>Watchlist</title>
      </Head>

      <main className="p-2 w-full min-h-screen sm:w-3/4 xl:w-1/2 ">
        {data.map((props) => (
          <WatchlistListing key={props.watchlist_id} {...props} />
        ))}

        {data.length === 0 && (
          <section className=" w-4/5 h-4/5">
            <h1 className="text-white text-9xl w-full font-bold text-center">
              Empty List
            </h1>
            <div className="relative w-full h-full">
              <Image src="/Empty.svg" alt="" layout="fill" />
            </div>
          </section>
        )}
      </main>
    </main>
  );
}
