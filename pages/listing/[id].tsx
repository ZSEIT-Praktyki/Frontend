import { Button } from "@components/index";
import Slider from "@modules/Slider";
import { API } from "@utils/assets/constants/routes";
import useAddWatchlist from "@utils/hooks/useAddWatchlist";
import Head from "next/head";
import { useRouter } from "next/router";
import {AiOutlineShoppingCart, AiOutlineHeart} from 'react-icons/ai'

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
            <h1 className="text-2xl sm:text-4xl text-white font-bold">
              {data.title}
            </h1>

            <h2 className="text-gray-300 mt-2 text-xl font-bold">
              Price: &euro;{data.price / 100}
            </h2>
            <div className="mt-2 flex flex-row flex-wrap overflow-hidden text-gray-300 border-gray-300">
              <span className="p-2 rounded border mr-2 mt-2">Category: Electronics &gt; Computers</span>
              <span className="p-2 rounded border mr-2 mt-2">Condition: New</span>
              {/* <span className="p-2 rounded border mr-2">Electronic</span>
              <span className="p-2 rounded border mr-2">Electronic</span> */}
            </div>
          </section>
          <div className="flex flex-col">
            <Button
              classes="m-0 mt-4"
              onClick={() => router.push(`/checkout?id=${data.listing_id}`)}
            >
              <AiOutlineShoppingCart className="text-xl mr-1"/> Purchase now
            </Button>
            <Button
              classes="m-0 mt-2"
              variants="outlinedPrimary"
              onClick={() => Append(data.listing_id)}
            >
              <AiOutlineHeart className="text-xl mr-1" />Add to watchlist
            </Button>
          </div>
          
        </article>
        <p className="mt-4 text-white">{data.description}</p>
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
