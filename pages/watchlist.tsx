import WatchlistListing from "@modules/WatchlistListing";
import useFetch from "@utils/hooks/useFetch";
import Head from "next/head";

interface WatchlistProps extends ListingMinified {
  watchlist_id: number;
}

export default function Watchlist() {
  const { data, setState } = useFetch<WatchlistProps[]>("/watchlist", [], []);

  return (
    <main className="w-full bg-gray-900 flex justify-center">
      <Head>
        <title>Watchlist</title>
      </Head>

      <main className="p-2 w-full sm:w-3/4 xl:w-1/2">
        {data.map((props) => (
          <WatchlistListing key={props.watchlist_id} {...props} />
        ))}
      </main>
    </main>
  );
}
