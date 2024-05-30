import { Button } from "@components/index";
import Slider from "@modules/Slider";
import { API, API_SERVER } from "@utils/assets/constants/routes";
import { axiosbase } from "@utils/helpers/axiosbase";
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
        <section className="flex flex-col w-full xl:w-3/4 md:w-3/4 sm:w-4/5 bg-zinc-900 rounded-md mt-5 mb-10">
          <Slider images={data.images} />
          <article className="px-5 pb-5">
            <h1 className="text-3xl sm:text-5xl text-white font-bold">
              {data.title}
            </h1>

            <div className="w-full flex-col md:flex-row flex gap-1 md:gap-10 mt-3">
              <p className="text-zinc-400 pt-2">
                Category (
                {`${data.subcategory_id.name} / ${data.subcategory_id.category_id.category_name}`}
                )
              </p>

              <p className="text-zinc-400 pt-2">Available ({data.quantity})</p>

              <p className="text-zinc-400 pt-2">
                Product's condition ({data.condition})
              </p>

              <p className="text-zinc-400 pt-2">
                Contant to the seller: ({data.seller_id.owners_name}{" "}
                {data.seller_id.owners_surname} {data.seller_id.owners_phone})
              </p>
            </div>

            <div className="w-full flex flex-col md:flex-row justify-between my-10">
              <h2 className="text-white mr-5 md:m-0 mt-2 text-2xl sm:text-4xl font-bold">
                &euro;
                {Number.parseFloat(`${data.price / 100}`).toFixed(2)}
              </h2>

              {isLoggedIn && data.isActive && (
                <section className="flex flex-col md:flex-row gap-2 mt-5 md:mt-0 md:gap-5">
                  <Button
                    variants="ok"
                    classes="m-0 !px-4"
                    onClick={() =>
                      router.push(`/checkout?id=${data.listing_id}`)
                    }
                  >
                    <AiOutlineShoppingCart className="text-xl mr-1" />
                    <span>Purchase now for &euro;{data.price} </span>
                  </Button>

                  <Button
                    classes="m-0 !px-4 gap-2 border-none"
                    variants={status?.isIn ? "error" : "primary"}
                    onClick={() =>
                      status?.isIn
                        ? Remove(data.listing_id)
                        : Append(data.listing_id)
                    }
                  >
                    {status?.isIn ? <AiFillHeart /> : <AiOutlineHeart />}
                    {!status?.isIn
                      ? "Follow this listing"
                      : "Remove from watchlist"}
                  </Button>
                </section>
              )}
            </div>
            <h3 className="text-xl sm:text-3xl text-white font-bold mt-5">
              Description
            </h3>
            <p className="mt-4 text-white">{data.description}</p>
          </article>
        </section>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_SERVER}/listings/ids`);
  const data = await res.json();

  // const { data } = await axiosbase.get(`${API}/listings/ids`);

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
    const res = await fetch(`${API_SERVER}/listings/${params.id.toString()}`);
    const data = await res.json();

    // const { data } = await axiosbase.get(
    //   `${API}/listings/${params.id.toString()}`
    // );

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
