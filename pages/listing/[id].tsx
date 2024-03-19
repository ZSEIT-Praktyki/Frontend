import { Button } from "@components/index";
import Slider from "@modules/Slider";
import { API } from "@utils/assets/constants/routes";
import {
  useAddWatchlistMutation,
  useCheckWatchlistQuery,
  useRemoveWatchlistMutation,
} from "@utils/services/watchlistService";
import { useSelector } from "@utils/store/store";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";

function Listing({ data }: { data: ListingProps }) {
  const router = useRouter();
  const { data: status } = useCheckWatchlistQuery(data.listing_id);
  const [Append] = useAddWatchlistMutation();
  const [Remove] = useRemoveWatchlistMutation();

  const { isLoggedIn } = useSelector((state) => state.user);

  if (router.isFallback) return <></>;

  return (
    <>
      <main className="w-full flex flex-col items-center">
        <Head>
          <title>{data.title}</title>
          <meta content={data?.title?.split(" ").join(", ")} name="keywords" />
          <meta name="author" content={data.seller_id.owners_name} />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content={data.description} />
        </Head>
        <section className="flex flex-col w-full xl:w-3/4 md:w-3/4 sm:w-4/5">
          <Slider images={data.images} />
          <article className="p-10 flex flex-col md:flex-row w-full justify-between items-center bg-zinc-900 rounded-lg mt-5">
            <section className="mr-5">
              {/* Auction title */}
              <h1 className="text-3xl sm:text-4xl text-white font-bold">
                {data.title}
              </h1>

              {/* Tags */}
              <div className="mt-2 w-full flex flex-col  md:flex-row flex-wrap overflow-hidden text-gray-300 border-gray-300">
                {/* Tag */}
                <span className="p-2 rounded border mr-2 mt-2">
                  Category:{" "}
                  <span className="font-bold">
                    {data.subcategory_id.category_id.category_name}
                    {"  "} &gt; {data.subcategory_id.name}
                  </span>
                </span>
                <span className="p-2 rounded border mr-2 mt-2">
                  Condition: <span className="font-bold">{data.condition}</span>
                </span>
                <span className="p-2 rounded border mr-2 mt-2">
                  Quantity: <span className="font-bold">{data.quantity}</span>
                </span>
              </div>
            </section>

            {/* Price and buttons */}
            <section className="flex items-center flex-col md:flex-row gap-5">
              <h2 className="text-white mr-5 md:m-0 mt-2 text-2xl sm:text-4xl font-bold">
                &euro;
                {Number.parseFloat(`${data.price / 100}`).toFixed(2)}
              </h2>

              {isLoggedIn && data.isActive && (
                <section className="flex flex-col">
                  <Button
                    classes="m-0 mt-4"
                    onClick={() =>
                      router.push(`/checkout?id=${data.listing_id}`)
                    }
                  >
                    <AiOutlineShoppingCart className="text-xl mr-1" />
                    <span>Purchase now</span>
                  </Button>

                  <Button
                    classes="m-0 mt-2"
                    variants="outlinedPrimary"
                    onClick={() =>
                      status?.isIn
                        ? Remove(data.listing_id)
                        : Append(data.listing_id)
                    }
                  >
                    {!status?.isIn ? (
                      <>
                        <AiOutlineHeart className="text-xl mr-1" />
                        <span>Add to watchlist</span>
                      </>
                    ) : (
                      <>
                        {/* <AiFillHeart className="text-xl mr-1" /> */}
                        <span>Remove from watchlist</span>
                      </>
                    )}
                  </Button>
                </section>
              )}
            </section>
          </article>

          <article className="bg-zinc-900 p-10 mt-4 rounded-lg">
            <header className="text-xl sm:text-3xl text-white font-bold">
              Description
            </header>
            <p className="mt-4 text-white">{data.description}</p>
          </article>
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
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: any) {
  try {
    const res = await fetch(`${API}/listings/${params.id.toString()}`);
    const data = await res.json();

    if (data.statusCode === 404) throw new Error("Not found");

    return {
      props: { data, fallback: true },
      revalidate: 3600,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default Listing;
