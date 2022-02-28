import ListingSettings from '@modules/ListingSettings'
import UserLayout from '@utils/Layout/User'
import { useGetActiveListingsQuery } from '@utils/services/accountService'

export default function ActiveListings() {
  const { data = [] } = useGetActiveListingsQuery({})
  return (
    <UserLayout>
      <section className='flex flex-col w-full m-2'>
        <h1 className='text-white text-5xl  font-bold p-2 italic '>
          Active listings
        </h1>
        {data.map((arg) => (
          <ListingSettings key={arg.listing_id} {...arg} />
        ))}
      </section>
    </UserLayout>
  )
}
