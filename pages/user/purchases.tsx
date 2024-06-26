import { H1 } from "@components/UI/Text";
import UserLayout from "@utils/Layout/User";
import { useGetPurchasesQuery } from "@utils/services/accountService";
import Head from "next/head";
import { API } from "@utils/assets/constants/routes";
import { price } from "@utils/helpers/price";
import { Button } from "@components/index";
import { useRouter } from "next/router";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Purchases() {
  const { data = [] } = useGetPurchasesQuery({});

  const router = useRouter();

  return (
    <UserLayout>
      <Head>
        <title>Purchases</title>
      </Head>
      <article className="flex flex-col w-full md:p-5">
        <div className="mb-10 p-3">
          <H1>Purchase history</H1>
        </div>
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-5 gap-2">
          {data.map((listing: any, index: number) => (
            <motion.article
              key={listing.order_id}
              className="w-full bg-zinc-950 rounded-xl p-4 flex flex-col"
            >
              <Link href={"/listing/" + listing.listing.listing_id}>
                <img
                  src={
                    listing.listing?.image !== null
                      ? `${API}/listings/images/${listing.listing?.image?.filename}`
                      : "https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400005/99776312-fehler-404-seite-nicht-gefunden-fehler-mit-glitch-effekt-auf-dem-bildschirm-vektor-illustration-f%C3%BCr-.jpg"
                  }
                  alt="product"
                  className="h-52 md:h-40 w-full object-cover rounded-md cursor-pointer"
                  tabIndex={2}
                />
              </Link>
              <section className=" text-white flex-1 flex flex-col justify-between">
                <h4 className="text-white font-bold text-sm mt-1">
                  Purchased at:{" "}
                  {new Date(listing.purchased_at).toLocaleDateString()}
                </h4>
                <h2
                  className="font-medium text-2xl"
                  style={{ textOverflow: "..." }}
                >
                  {(listing.listing.title as string).substring(0, 23)}...
                </h2>
                <p className="font-medium">
                  <span style={{ color: "#0097FB" }}>
                    ${price(listing.listing.price)}
                  </span>{" "}
                  x 1
                </p>
              </section>
              <Button
                variants="fire"
                classes="w-full !m-0 !mt-3 py-3"
                onClick={() =>
                  router.push("/checkout?id=" + listing.listing.listing_id)
                }
              >
                Buy again
              </Button>
            </motion.article>
          ))}
        </section>
      </article>
    </UserLayout>
  );
}
