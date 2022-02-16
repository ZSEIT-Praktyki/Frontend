import useFetch from "@utils/hooks/useFetch";
import Head from "next/head";

export default function Watchlist() {
  const { data } = useFetch("/watchlist");

  console.log(data);

  return (
    <main className="w-full">
      <Head>
        <title>Watchlist</title>
      </Head>
    </main>
  );
}
