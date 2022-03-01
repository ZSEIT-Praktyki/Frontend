<<<<<<< HEAD
import ListingSettings from '@modules/ListingSettings'
import UserLayout from '@utils/Layout/User'
import { useGetActiveListingsQuery } from '@utils/services/accountService'
=======
import ListingSettings from "@modules/ListingSettings";
import UserLayout from "@utils/Layout/User";
import { useGetActiveListingsQuery } from "@utils/services/accountService";
import { H1 } from "@components/UI/Text";
>>>>>>> f88e5c12f8bfe73fb9e96d53b3e37c204d42a799

export default function ActiveListings() {
  const { data = [] } = useGetActiveListingsQuery({})
  return (
    <UserLayout>
<<<<<<< HEAD
      <section className='flex flex-col w-full m-2'>
        <h1 className='text-white text-5xl  font-bold p-2 italic '>
          Active listings
        </h1>
=======
      <section className="flex flex-col w-full">
        <div className="ml-4">
          <H1>Active listings</H1>
        </div>
>>>>>>> f88e5c12f8bfe73fb9e96d53b3e37c204d42a799
        {data.map((arg) => (
          <ListingSettings key={arg.listing_id} {...arg} remove />
        ))}
      </section>
    </UserLayout>
  )
}
