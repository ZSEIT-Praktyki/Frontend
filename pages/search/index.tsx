import Head from "next/head";
import Listing from "@modules/Listing";
import { NextPageContext } from "next";
import { API } from "@utils/assets/constants/routes";

export async function getServerSideProps(ctx: NextPageContext) {
  const res = await fetch(`${API}/listings/search?query=${ctx.query.q}`);
  const data = await res.json();

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
  query: { q: string };
  data: ListingMinified[];
}) {
  return (
    <main className="p-2 flex flex-col items-center relative">
      <Head>
        <title>
          Search query: {query.q} results:{data.length}
        </title>
      </Head>

      <h1 className=" text-center text-rose-600 text-5xl md:text-7xl font-bold mb-10">
        Matching text: {query.q}
      </h1>

      <div className="p-2 w-full grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-4 xl:w-2/3">
        {data.map((listing) => (
          <Listing key={listing.listing_id} {...listing} />
        ))}
      </div>

      {data.length === 0 && <></>}
    </main>
  );
}
