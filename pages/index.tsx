import { Button } from "@components/index";
import FloatingButton from "@components/FloatingButton";
import Listing from "@modules/Listing";
import { API } from "@utils/assets/constants/routes";
import Head from "next/head";
import Categories from "@modules/Categories";
import HomeButtons from "@modules/HomeButtons/HomeButtons";
import { axiosbase } from "@utils/helpers/axiosbase";

export async function getStaticProps() {
  // const res = await fetch(`${API}/listings`);
  // const data = await res.json();

  const { data } = await axiosbase.get(`${API}/listings`);

  return {
    props: {
      data: data ?? [],
    },
    revalidate: 120,
  };
}

export default function Home({ data }: { data: ListingMinified[] }) {
  return (
    <main className="w-full min-h-screen flex flex-col items-center mb-5">
      <Head>
        <title>Buy & Sell with US!</title>
      </Head>

      <section className="min-h-[calc(100vh-80px)] flex flex-col lg:flex-row w-full md:w-10/12 mb-10 bg-zinc-950 gap-10">
        <article className="flex-[2] flex flex-col mt-10 md:mt-0 justify-center items-start p-5">
          <h1 className="text-5xl text-start xl:text-7xl font-bold text-white">
            Unleash Your Potential.{" "}
            <span className="bg-gradient-to-r from-pink-600 to-red-600 rounded inline-block text-transparent bg-clip-text">
              Buy & Sell
            </span>{" "}
            with Ease.
          </h1>
          <p className="text-gray-300 font-regular mt-10 w-full lg:w-3/4 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            vel tempore iPlaceat praesentium ipsa odit laudantium non nisi,
            blanditiis excepturi autem similique, fuga ab deleniti temporibus.{" "}
            <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laboriosam, vel tempore illo non molestiae aperiam! Placeat
            praesentium ipsa temporibus. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
          <div className="flex flex-col xs:flex-row w-full mt-10 lg:w-3/4">
            <HomeButtons />
          </div>
        </article>
        <article className="flex flex-1 justify-center items-center lg:justify-end lg:items-center">
          <img
            src="/Online_shopping_SVG.svg"
            className="w-1/2 lg:w-full"
            alt="decorative image of online shopping"
          />
        </article>
      </section>

      <section className="flex flex-col justify-center md:flex-row md:min-h-screen lg:w-10/12">
        <Categories />

        {data.length === 0 && (
          <article className="md:h-screen p-10 w-3/5 flex justify-center items-center mt-2">
            <img src="/Empty.svg" className="w-4/5" />
          </article>
        )}
        {data.length !== 0 && (
          <div className="w-full h-full grid p-2 grid-cols-1 sm:grid-cols-2 gap-2 grid-flow-row-dense lg:grid-cols-3 xl:grid-cols-4 ">
            {data.map((listing) => (
              <Listing key={listing.listing_id} {...listing} />
            ))}
          </div>
        )}
      </section>

      <FloatingButton />
    </main>
  );
}
