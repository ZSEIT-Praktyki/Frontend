import ListingSettings from "@modules/ListingSettings";
import UserLayout from "@utils/Layout/User";
import { useGetActiveListingsQuery } from "@utils/services/accountService";
import { H1 } from "@components/UI/Text";

export default function ActiveListings() {
  const { data = [] } = useGetActiveListingsQuery({});
  return (
    <UserLayout>
      <section className="flex flex-col w-full">
        <div className="ml-4">
          <H1>Active listings</H1>
        </div>
        {data.map((arg) => (
          <ListingSettings key={arg.listing_id} {...arg} remove />
        ))}
      </section>
    </UserLayout>
  );
}
