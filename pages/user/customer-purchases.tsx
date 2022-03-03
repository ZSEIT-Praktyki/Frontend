import { H1, H2, Paragraph } from "@components/UI/Text";
import UserLayout from "@utils/Layout/User";
import { SoldProps, useGetSoldQuery } from "@utils/services/accountService";
import { API } from "@utils/assets/constants/routes";

export default function CustomerPurchases() {
  const { data = [] as SoldProps[] } = useGetSoldQuery({});

  return (
    <UserLayout>
      <article className="flex flex-col w-full">
        <H1>Customer purchases</H1>
        <section className="w-full flex flex-col mt-5">
          {data.map(({ listing, order_id, purchased_at, buyer_address }) => (
            <article
              key={order_id}
              className="rounded-xl mb-5 items-center bg-gray-700 flex flex-col sm:flex-row"
            >
              <img
                className="rounded-md sm:h-60 m-2"
                alt=""
                src={
                  listing.images
                    ? `${API}/listings/images/${listing.images.filename}`
                    : "https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400005/99776312-fehler-404-seite-nicht-gefunden-fehler-mit-glitch-effekt-auf-dem-bildschirm-vektor-illustration-f%C3%BCr-.jpg"
                }
              />
              <section className="ml-2 flex flex-col">
                <H2>{listing.title}</H2>
                <Paragraph>
                  purchased at: {new Date(purchased_at).toLocaleDateString()}
                </Paragraph>
                <div className="p-2">
                  <span className="text-white mr-2">Quantity</span>
                  <input
                    value={listing.quantity}
                    className="bg-gray-800 text-white rounded text-center w-8 h-8 p-2"
                    disabled
                  />
                </div>
                <div className="ml-2">
                  <H2>Delivery address</H2>
                </div>
                <div className="p-2 flex flex-row flex-wrap">
                  {Object.entries(buyer_address).map(([key, value]) => (
                    <section
                      key={key}
                      className="flex p-2 bg-gray-800 m-1 rounded  text-white"
                    >
                      <p className="mr-1">{key}: </p>
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
