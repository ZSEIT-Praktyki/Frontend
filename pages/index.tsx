import BottomTab from "@modules/BottomTab";
import Categories from "@modules/Categories";
import Listing from "@modules/Listing";
import { API } from "@utils/assets/constants/routes";
import { NextPageContext } from "next";
import Head from "next/head";

export async function getStaticProps(ctx: NextPageContext) {
  const res = await fetch(`${API}/listings`);
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
}

export default function Home({ data }: { data: ListingProps[] }) {
  return (
    <main className="w-full min-h-screen flex flex-col items-center">
      <Head>
        <title>Home</title>
      </Head>

      <section className="w-full h-64 bg-gray-800 flex items-center justify-center text-white ">
        <img src={"/781749.jpg"} className="w-full h-64 object-cover" />
      </section>

      <Categories />

      <div className="p-2 w-full grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-4 xl:w-2/3">
        {data.map((listing) => (
          <Listing key={listing.listing_id} {...listing} />
        ))}
      </div>

      <BottomTab></BottomTab>
    </main>
  );
}
