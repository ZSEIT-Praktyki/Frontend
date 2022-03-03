import { H1, H2 } from "@components/UI/Text";
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
          {data.map(({ images, listing_id, order_id, title }) => (
            <article key={order_id} className="rounded mb-5 flex">
              <img
                className="h-60 rounded-md"
                alt=""
                src={
                  images
                    ? `${API}/listings/images/${images.filename}`
                    : "https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400005/99776312-fehler-404-seite-nicht-gefunden-fehler-mit-glitch-effekt-auf-dem-bildschirm-vektor-illustration-f%C3%BCr-.jpg"
                }
              />
              <section className="ml-2 flex flex-col">
                <H2>{title}</H2>
              </section>
            </article>
          ))}
        </section>
      </article>
    </UserLayout>
  );
}
