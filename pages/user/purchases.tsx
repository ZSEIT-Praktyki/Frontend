import { H1 } from "@components/UI/Text";
import UserLayout from "@utils/Layout/User";
import { useGetPurchasesQuery } from "@utils/services/accountService";
import Listing from "@modules/Listing";

export default function Purchases() {
  const { data = [] } = useGetPurchasesQuery({});
  return (
    <UserLayout>
      <article className="flex flex-col w-full">
        <H1>My purchases</H1>
        <section className="w-full flex flex-col mt-5">
          {data.map((listing: any) => (
            <article key={listing.listing_id}>
              <div className="flex justify-between w-full">
                <h3 className="text-white font-bold text-xl pb-2">
                  Purchased at:{" "}
                  {new Date(listing.purchased_at).toLocaleDateString()}
                </h3>
              </div>
              <Listing {...listing} horizontal />
            </article>
          ))}
        </section>
      </article>
    </UserLayout>
  );
}
