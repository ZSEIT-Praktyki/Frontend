import { Button } from "@components/index";
import Footer from "@modules/Footer";
import Slider from "@modules/Slider";
import { API } from "@utils/assets/constants/routes";
import useAddWatchlist from "@utils/hooks/useAddWatchlist";
import useFetch from "@utils/hooks/useFetch";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";

function Listing({ data }: { data: ListingProps }) {
  const { Append, Remove } = useAddWatchlist();
  const router = useRouter();

  const { data: status } = useFetch<{ isIn: boolean }>(
    `/watchlist/check?listing_id=${data.listing_id}`,
    [],
    { isIn: false }
  );

  return (
    <>
      <main className="w-full flex flex-col items-center">
        <Head>
          <title>{data.title}</title>
        </Head>
        <section className="flex flex-col w-full xl:w-2/4 sm:w-3/4">
          <Slider images={data.images} />
          <article className="p-10 flex w-full justify-between items-center bg-gray-800 rounded-lg mt-5">
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
                  <span className="font-bold">
                    {data.subcategory_id.category_id.category_name}
                    {"  "} &gt; {data.subcategory_id.name}
                  </span>
                </span>
                <span className="p-2 rounded border mr-2 mt-2">
                  Condition:{" "}
                  <span className="font-bold">
                    {/* Possibly it should be all around, but someone who did backend fucked up enums */}
                    {data.condition ? "New" : "Used"}
                  </span>
                </span>
                <span className="p-2 rounded border mr-2 mt-2">
                  Quantity: <span className="font-bold">{data.quantity}</span>
                </span>
              </div>
            </section>

            {/* Price and buttons */}
            <section className="flex flex-col">
              <h2 className="text-white mt-2 text-2xl sm:text-4xl font-bold">
                &euro;
                {Number.parseFloat(`${data.price / 100}`).toFixed(2)}
              </h2>
              {/* Purchase button */}
              <Button
                classes="m-0 mt-4"
                onClick={() => router.push(`/checkout?id=${data.listing_id}`)}
              >
                <AiOutlineShoppingCart className="text-xl mr-1" />
                <span>Purchase now</span>
              </Button>
              {/* watchlist button */}
              <Button
                classes="m-0 mt-2"
                variants="outlinedPrimary"
                onClick={() =>
                  status.isIn
                    ? Remove(data.listing_id)
                    : Append(data.listing_id)
                }
              >
                {!status.isIn ? (
                  <>
                    <AiOutlineHeart className="text-xl mr-1" />
                    <span>Add to watchlist</span>
                  </>
                ) : (
                  <>
                    <AiFillHeart className="text-xl mr-1" />
                    <span>
                      Remove from
                      <br />
                      watchlist
                    </span>
                  </>
                )}
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
          <section className="bg-gray-800 p-10 mt-4 rounded-lg flex items-baseline justify-between">
            <span className="text-xl sm:text-3xl text-white font-bold">
              Seller: {data.seller_id.owners_name}
            </span>
            <a
              href=""
              className="text-lg sm:text-lg transition text-gray-300 hover:text-gray-200 font-bold"
            >
              See seller&apos;s other items
            </a>
          </section>
        </section>
      </main>
    </>
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
