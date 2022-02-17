import useFetch from "@utils/hooks/useFetch";
import Head from "next/head";
import Listing from "@modules/Listing";
import { useRouter } from "next/router";
import { NextPageContext } from "next";
import { API } from "@utils/assets/constants/routes";

export async function getServerSideProps(ctx: NextPageContext) {
  const res = await fetch(`${API}/listings/search?query=${ctx.query.q}`);
  const data = await res.json();

  console.log(data);

  return {
    props: {
      query: { q: ctx.query.q },
      data: data ?? [],
    },
  };
}

export default function Search({
  query,
  data,
}: {
  query: any;
  data: ListingProps[];
}) {
  return (
    <main className="p-2 flex flex-col items-center">
      <Head>
        <title>Search</title>
      </Head>

      <h1 className="text-white text-center text-5xl md:text-8xl font-bold mb-5">
        Matching text: {query.q}
      </h1>

      <div className="p-2 w-full grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-4 xl:w-2/3">
        {data.map((listing) => (
          <Listing key={listing.listing_id} {...listing} />
        ))}
      </div>
    </main>
  );
}
