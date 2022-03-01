import Head from 'next/head'
import UserLayout from '@utils/Layout/User'

export default function Account() {
  return (
    <UserLayout>
      <h1 className='text-white text-5xl font-bold p-2 italic text-center'>
        Account
      </h1>
    </UserLayout>
  )
}
