import { Button } from "@components/index";
import FloatingButton from "@components/FloatingButton";
import Listing from "@modules/Listing";
import { API } from "@utils/assets/constants/routes";
import { useSelector } from "@utils/store/store";
import Head from "next/head";
import { useRouter } from "next/router";

export async function getStaticProps() {
  const res = await fetch(`${API}/listings`);
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
}

export default function Home({ data }: { data: ListingMinified[] }) {
  const router = useRouter();

  const { isLoggedIn } = useSelector((state) => state.user);

  return (
    <main className="w-full min-h-screen flex flex-col items-center">
      <Head>
        <title>Home</title>
      </Head>

      <section className="min-h-screen flex flex-col md:flex-row w-full mb-10 bg-gray-900">
        <article className="w-full md:w-1/2 p-2 h-full flex flex-col items-center md:pt-24">
          <h1 className="text-6xl text-center md:text-7xl xl:text-9xl font-bold p-4 text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-700">
            Start Shopping
          </h1>
          <p className="text-gray-300 font-regular text-center mt-2 mb-2 w-full p-4 md:w-3/4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            vel tempore illo non molestiae aperiam! Placeat praesentium ipsa
            odit laudantium non nisi, blanditiis excepturi autem similique, fuga
            ab deleniti temporibus.
          </p>
          <div className="flex flex-row w-full justify-center">
            {isLoggedIn ? (
              <>
                <Button
                  variants="fire"
                  classes="!py-3 w-2/3 sm:w-1/2 font-medium hover:scale-[1.1] "
                  onClick={() => router.push("/add")}
                >
                  START SELLING
                </Button>
              </>
            ) : (
              <>
                <Button
                  variants="fire"
                  classes="w-1/4 !py-3 font-medium"
                  onClick={() => router.push("/auth/login")}
                >
                  LOGIN
                </Button>
                <Button
                  variants="fire"
                  classes="w-1/4 font-medium"
                  onClick={() => router.push("/auth/register")}
                >
                  REGISTER
                </Button>
              </>
            )}
          </div>
        </article>
        <article className="w-full min-h-full md:w-1/2 p-2 flex items-center justify-center">
          <img src="/Online_shopping_SVG.svg" className="w-4/5" />
        </article>
      </section>

      <div className="p-2 w-full grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-4 xl:w-2/3 ">
        {data.map((listing) => (
          <Listing key={listing.listing_id} {...listing} />
        ))}
      </div>

      <FloatingButton />
    </main>
  );
}
