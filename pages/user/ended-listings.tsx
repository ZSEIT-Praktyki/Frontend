import UserLayout from "@utils/Layout/User";
import { useGetNotActiveListingsQuery } from "@utils/services/accountService";
import ListingSettings from "@modules/ListingSettings";
import { H1 } from "@components/UI/Text";

export default function EndedListings() {
  const { data = [] } = useGetNotActiveListingsQuery({});
  return (
    <UserLayout>
      <section className="flex flex-col w-full">
        <div className="ml-4">
          <H1>Ended listings</H1>
        </div>

        {data.map((arg) => (
          <ListingSettings key={arg.listing_id} {...arg} activate />
        ))}
      </section>
    </UserLayout>
  );
}
