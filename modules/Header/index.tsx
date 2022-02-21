import { Button, Input } from '@components/index'
import { useSelector } from '@utils/store/store'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from 'react-icons/ai'

export default function Header() {
  const router = useRouter()

  const [query, setQuery] = useState('')

  function onSearch() {
    router.push('/search', {
      pathname: '/search',
      query: {
        q: query,
      },
    })
  }

  const { isLoggedIn } = useSelector((state) => state.user)

  return (
    <header className='w-full p-2 flex flex-row bg-gray-900 justify-between items-center border-b-2 border-gray-800 sticky top-0 z-10'>
      <p className='p-2 font-bold !text-rose-600 text-2xl hidden sm:flex w-1/6'>
        <Link href={'/'}>LOGO</Link>
      </p>

      <div className='w-full sm:w-4/6 justify-center flex m-0'>
        <Input
          value={query}
          onChange={({ target }) => setQuery(target.value)}
          classes="bg-gray-800 "
          placeholder="Search anything, we may have it"

        />
        <Button
          variants='text'
          classes='border-gray-800 bg-gray-800 hover:bg-gray-900 m-2'
          onClick={onSearch}
        >
          <AiOutlineSearch color='white' />
        </Button>
      </div>

      {isLoggedIn && (
        <section className='hidden flex-row sm:flex w-1/6'>
          <Button
            variants='text'
            classes='font-medium flex flex-row border-gray-800 bg-gray-800 hover:bg-gray-900 px-2'
            onClick={() => router.push('/user/account')}
          >
            <AiOutlineUser color='white' size={20} />
          </Button>
          <Button
            variants='text'
            classes='font-medium flex flex-row border-gray-800 bg-gray-800 hover:bg-gray-900 px-2'
            onClick={() => router.push('/watchlist')}
          >
            <AiOutlineShoppingCart color='white' size={20} />
          </Button>
        </section>
      )}
    </header>
  )
}
