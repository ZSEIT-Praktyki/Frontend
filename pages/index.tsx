import { Button } from "@components/index";
import FloatingButton from "@components/FloatingButton";
import Listing from "@modules/Listing";
import { API } from "@utils/assets/constants/routes";
import { useSelector } from "@utils/store/store";
import Head from "next/head";
import { useRouter } from "next/router";
import Categories from "@modules/Categories";
import Image from "next/image";

export async function getStaticProps() {
  let data = [];
  try {
    const res = await fetch(`${API}/listings`);
    data = await res.json();
  } catch (error) {}

  return {
    props: {
      data: data ?? [],
    },
    revalidate: 120,
  };
}

export default function Home({ data }: { data: ListingMinified[] }) {
  const router = useRouter();

  const { isLoggedIn } = useSelector((state) => state.user);

  return (
    <main className="w-full min-h-screen flex flex-col items-center mb-5">
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
        <article className="w-full min-h-full h-96 sm:h-screen md:w-1/2 p-2  flex items-center justify-center relative">
          <Image
            src="/Online_shopping_SVG.svg"
            className="w-4/5"
            alt=""
            layout="fill"
            priority
          />
        </article>
      </section>

      <section className="flex flex-col justify-center md:flex-row md:min-h-screen w-full ">
        <Categories />

        {data.length === 0 && (
          <article className="w-full md:h-screen p-10 flex justify-center items-center mt-2">
            <img src="/Empty.svg" className="w-full " />
          </article>
        )}
        {data.length !== 0 && (
          <div className="w-full h-full grid p-2 grid-cols-2 gap-2 grid-flow-row-dense lg:grid-cols-3 xl:grid-cols-4">
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
