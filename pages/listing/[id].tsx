import { Button } from "@components/index";
import Slider from "@modules/Slider";
import { API } from "@utils/assets/constants/routes";
import useAddWatchlist from "@utils/hooks/useAddWatchlist";
import Head from "next/head";
import { useRouter } from "next/router";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";

function Listing({ data }: { data: ListingProps }) {
  const { status, Append } = useAddWatchlist();
  const router = useRouter();

  return (
    <main className="w-full flex flex-col items-center">
      <Head>
        <title>{data.title}</title>
      </Head>
      <section className="flex flex-col w-full xl:w-2/4 sm:w-3/4">
        <Slider images={data.images}></Slider>
        <article className="p-10 flex w-full justify-between items-center bg-gray-800 rounded-lg">
          <section className="mr-5">
            {/* Auction title */}
            <h1 className="text-2xl sm:text-4xl text-white font-bold">
              {data.title}
            </h1>

            {/* Tags */}
            <div className="mt-2 flex flex-row flex-wrap overflow-hidden text-gray-300 border-gray-300">
              {/* Tag */}
              <span className="p-2 rounded border mr-2 mt-2">
                Category:{" "}
                <span className="font-bold">Electronics &gt; Computers</span>
              </span>
              <span className="p-2 rounded border mr-2 mt-2">
                Condition: <span className="font-bold">New</span>
              </span>
            </div>
          </section>

          {/* Price and buttons */}
          <section className="flex flex-col">
            <h2 className="text-white mt-2 text-4xl font-bold">
              &euro;{data.price / 100}
            </h2>
            {/* Purchase button */}
            <Button
              classes="m-0 mt-4"
              onClick={() => router.push(`/checkout?id=${data.listing_id}`)}
            >
              <AiOutlineShoppingCart className="text-xl mr-1" /> Purchase now
            </Button>
            {/* watchlist button */}
            {}
            <Button
              classes="m-0 mt-2"
              variants="outlinedPrimary"
              onClick={() => Append(data.listing_id)}
            >
              <AiOutlineHeart className="text-xl mr-1" />
              Add to watchlist
            </Button>
          </section>
        </article>
        {/* Description */}
        <article className="bg-gray-800 p-10 mt-4 rounded-lg">
          <header className="text-xl sm:text-3xl text-white font-bold">
            Description
          </header>
          <p className="mt-4 text-white">{data.description}</p>
        </article>
        {/* Seller info */}
        <article className="bg-gray-800 flex p-10 mt-4 rounded-lg"></article>
      </section>
    </main>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API}/listings/ids`);
  const data = await res.json();

  const paths = data.map((listing: any) => ({
    params: {
      id: listing.listing_id.toString(),
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const res = await fetch(`${API}/listings/${params.id.toString()}`);
  const data = await res.json();

  return {
    props: { data },
    revalidate: 60,
  };
}

export default Listing;
