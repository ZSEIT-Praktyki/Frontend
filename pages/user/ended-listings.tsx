<<<<<<< HEAD
import UserLayout from '@utils/Layout/User'
import { useGetNotActiveListingsQuery } from '@utils/services/accountService'
import ListingSettings from '@modules/ListingSettings'
=======
import UserLayout from "@utils/Layout/User";
import { useGetNotActiveListingsQuery } from "@utils/services/accountService";
import ListingSettings from "@modules/ListingSettings";
import { H1 } from "@components/UI/Text";
>>>>>>> f88e5c12f8bfe73fb9e96d53b3e37c204d42a799

export default function EndedListings() {
  const { data = [] } = useGetNotActiveListingsQuery({})
  return (
    <UserLayout>
<<<<<<< HEAD
      <section className='flex flex-col w-full'>
        <h1 className='text-white text-5xl font-bold p-2 italic'>
          Ended listings
        </h1>
=======
      <section className="flex flex-col w-full">
        <div className="ml-4">
          <H1>Ended listings</H1>
        </div>
>>>>>>> f88e5c12f8bfe73fb9e96d53b3e37c204d42a799
        {data.map((arg) => (
          <ListingSettings key={arg.listing_id} {...arg} activate />
        ))}
      </section>
    </UserLayout>
  )
}
