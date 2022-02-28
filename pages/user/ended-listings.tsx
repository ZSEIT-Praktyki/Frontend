import UserLayout from '@utils/Layout/User'
import { useGetNotActiveListingsQuery } from '@utils/services/accountService'
import ListingSettings from '@modules/ListingSettings'

export default function EndedListings() {
  const { data = [] } = useGetNotActiveListingsQuery({})
  return (
    <UserLayout>
      <section className='flex flex-col w-full'>
        <h1 className='text-white text-5xl font-bold p-2 italic'>
          Ended listings
        </h1>
        {data.map((arg) => (
          <ListingSettings key={arg.listing_id} {...arg} />
        ))}
      </section>
    </UserLayout>
  )
}
