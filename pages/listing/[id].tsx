import { Button } from '@components/index'
import Slider from '@modules/Slider'
import { API } from '@utils/assets/constants/routes'
import useAddWatchlist from '@utils/hooks/useAddWatchlist'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'

const url =
  'https://i.kym-cdn.com/entries/icons/mobile/000/025/382/Screen_Shot_2018-02-06_at_3.37.14_PM.jpg'

function Listing({ data }: { data: ListingProps }) {
  const { status, Append } = useAddWatchlist()
  const router = useRouter()

  console.log(status)

  const [image, setImage] = useState(data.images[0].filename)
  return (
    <main className='w-full flex flex-col items-center'>
      <Head>
        <title>{data.title}</title>
      </Head>
      <section className='flex flex-col w-full xl:w-2/4 sm:w-3/4'>
        <Slider images={data.images}></Slider>
        <article className='p-2'>
          <h1 className='text-2xl sm:text-4xl text-white font-bold'>
            {data.title}
          </h1>

          <h2 className='text-gray-300 mt-2 text-xl font-bold'>
            Price: &euro;{data.price / 100}
          </h2>
          <div className='mt-4 flex flex-row overflow-hidden text-gray-300 border-gray-300'>
            <span className='p-2 rounded border mr-2'>Electronic</span>
            <span className='p-2 rounded border mr-2'>Electronic</span>
            <span className='p-2 rounded border mr-2'>Electronic</span>
            <span className='p-2 rounded border mr-2'>Electronic</span>
          </div>
          <div className='flex flex-row'>
            <Button
              classes='m-0 mt-4 mr-2'
              onClick={() => Append(data.listing_id)}
            >
              Add to watchlist
            </Button>
            <Button
              classes='m-0 mt-4'
              onClick={() => router.push(`/checkout?id=${data.listing_id}`)}
            >
              Purchase now
            </Button>
          </div>
          <p className='mt-4 text-white'>{data.description}</p>
        </article>
      </section>
    </main>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`${API}/listings/ids`)
  const data = await res.json()

  const paths = data.map((listing: any) => ({
    params: {
      id: listing.listing_id.toString(),
    },
  }))

  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const res = await fetch(`${API}/listings/${params.id.toString()}`)
  const data = await res.json()

  return {
    props: { data },
    revalidate: 60,
  }
}

export default Listing
