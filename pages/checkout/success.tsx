import useFetch from "@utils/hooks/useFetch";
import { AddressProps } from "@utils/services/addressService";
import clsx from "clsx";
import { NextPageContext } from "next";
import Head from "next/head";
import Link from "next/link";

export async function getServerSideProps(ctx: NextPageContext) {
  return {
    props: {
      status: ctx.query.redirect_status,
      orderId: ctx.query.orderId,
    },
  };
}

interface OrderProps {
  status: string;
  payment_intent_id: string;
  orderId: string;
  total: number;
  quantity: number;
  purchased_at: string;
  listing_id: ListingProps;
  address_id: AddressProps;
}

export default function Success({ status, orderId }: any) {
  const { data } = useFetch<OrderProps>("/orders/order/" + orderId);

  return (
    <main className="w-full h-[calc(100vh-100px)] p-3 relative flex justify-center items-center">
      <Head>
        <title>Payment {status === "succeeded" ? "succeeded" : "failed"}</title>
      </Head>
      <article className="bg-zinc-900 text-white p-5 rounded-md w-full md:w-3/5">
        <h1 className="text-4xl font-bold">Order details</h1>

        {data !== undefined && (
          <>
            <section className="flex items-center text-zinc-200 justify-between mt-5">
              <h2 className="text-xl font-semibold">Order ID</h2>
              <p className="text-xl font-semibold">{orderId}</p>
            </section>

            <section className="flex items-center text-zinc-200 justify-between mt-5">
              <h2 className="text-xl font-semibold">Payment status</h2>
              <p
                className={clsx(
                  "text-xl font-semibold text-white px-3 py-1 rounded-full",
                  {
                    "bg-green-600": status === "succeeded",
                    "bg-red-600": status === "failed",
                  }
                )}
              >
                {status}
              </p>
            </section>

            <section className="flex items-center text-zinc-200 justify-between mt-5">
              <h2 className="text-xl font-semibold">Date</h2>
              <p className="text-xl font-semibold">
                {new Date(data.purchased_at).toLocaleDateString()}
              </p>
            </section>

            <section className="flex items-center text-zinc-200 justify-between mt-5">
              <h2 className="text-xl font-semibold">Total charge of</h2>
              <p className="text-xl font-semibold">
                {(data?.total / 100).toFixed(2)} (Euro)
              </p>
            </section>

            <section className="flex items-center text-zinc-200 justify-between mt-5">
              <h2 className="text-xl font-semibold">Quantity</h2>
              <p className="text-xl font-semibold">{data?.quantity}</p>
            </section>

            <section className="flex items-center text-zinc-200 justify-between mt-5">
              <h2 className="text-xl font-semibold">Product</h2>
              <p className="text-xl font-semibold bg-zinc-950 px-3 py-1 rounded-md">
                <Link href={`/listing/${data.listing_id.listing_id}`}>
                  <a>{data.listing_id.title}</a>
                </Link>
              </p>
            </section>

            <section className=" text-zinc-200 justify-between mt-5 cursor-pointer">
              <h2 className="text-xl font-semibold">Address</h2>
              <Link href={"/user/account"}>
                <div className="flex flex-row flex-wrap gap-5 text-zinc-300 bg-zinc-950 px-3 py-2 rounded-md mt-2">
                  <p className="text-lg font-semibold">
                    {data.address_id.name} {data.address_id.surname}
                  </p>

                  <p className="text-lg font-semibold">
                    {data.address_id.phone}
                  </p>
                  <p className="text-lg font-semibold">
                    {data.address_id.state}
                  </p>
                  <p className="text-lg font-semibold">
                    {data.address_id.street}, {data.address_id.street_number},{" "}
                    {data.address_id.city}
                  </p>
                </div>
              </Link>
            </section>
          </>
        )}
      </article>
    </main>
  );
}
