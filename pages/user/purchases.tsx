import { H1 } from "@components/UI/Text";
import UserLayout from "@utils/Layout/User";
import { useGetPurchasesQuery } from "@utils/services/accountService";
import Head from "next/head";
import { API } from "@utils/assets/constants/routes";
import { price } from "@utils/helpers/price";

export default function Purchases() {
  const { data = [] } = useGetPurchasesQuery<any>({});

  return (
    <UserLayout>
      <Head>
        <title>Purchases</title>
      </Head>
      <article className="flex flex-col w-full">
        <H1>My purchases</H1>
        <section className="w-full">
          {data.map((listing: any) => (
            <article
              key={listing.order_id}
              className="flex justify-between w-full flex-col mt-5"
            >
              <h3 className="text-white font-bold text-xl pb-2">
                Purchased at:{" "}
                {new Date(listing.purchased_at).toLocaleDateString()}
              </h3>
              <section className="flex flex-col sm:flex-row">
                <img
                  src={
                    listing.listing?.image !== null
                      ? `${API}/listings/images/${listing.listing?.image?.filename}`
                      : "https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400005/99776312-fehler-404-seite-nicht-gefunden-fehler-mit-glitch-effekt-auf-dem-bildschirm-vektor-illustration-f%C3%BCr-.jpg"
                  }
                  alt="product"
                  className="h-40 rounded-sm object-cover"
                />
                <section className="p-2 text-white">
                  <h2
                    className="font-medium text-2xl"
                    style={{ textOverflow: "..." }}
                  >
                    {(listing.listing.title as string).substring(0, 25)}
                  </h2>
                  <p className="font-medium">${price(listing.listing.price)}</p>
                </section>
              </section>
            </article>
          ))}
        </section>
      </article>
    </UserLayout>
  );
}
