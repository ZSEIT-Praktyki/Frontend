import { H1, H2 } from "@components/UI/Text";
import UserLayout from "@utils/Layout/User";
import { SoldProps, useGetSoldQuery } from "@utils/services/accountService";

export default function CustomerPurchases() {
  const { data = [] as SoldProps[] } = useGetSoldQuery({});

  return (
    <UserLayout>
      <article className="flex flex-col w-full md:p-5">
        <div className="mb-10 p-3">
          <H1>Customer purchases</H1>
        </div>
        <section className="w-full flex flex-col mt-5">
          {data.map(({ listing, order_id, purchased_at, buyer_address }) => (
            <article
              key={order_id}
              className="rounded p-2 mb-5 items-center bg-gray-700 flex flex-col sm:flex-row"
            >
              <section className=" flex flex-col">
                <p className="text-sm text-gray-300">
                  purchased at: {new Date(purchased_at).toLocaleDateString()}
                </p>
                <H2>
                  <span className="text-gray-300">Product: </span>
                  {listing.title}
                </H2>

                <div className="pt-2 pb-2">
                  <span className="text-white mr-2">Quantity</span>
                  <input
                    value={listing.quantity}
                    className="bg-zinc-900 text-white rounded text-center w-8 h-8 p-2"
                    disabled
                  />
                </div>

                <H2>Delivery address</H2>

                <div className="flex flex-row flex-wrap mt-2">
                  {Object.entries(buyer_address).map(([key, value]: any) => (
                    <section
                      key={key}
                      className="p-2  bg-zinc-900 m-1 rounded text-white"
                    >
                      <span>{key} </span>
                      <span className="text-purple-400">{value}</span>
                    </section>
                  ))}
                </div>
              </section>
            </article>
          ))}
        </section>
      </article>
    </UserLayout>
  );
}
