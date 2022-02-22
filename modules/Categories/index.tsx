const categories = {
  Electronic: 'Electronic',
  Food: 'Food',
  Computers: 'Computers',
}

export default function Categories() {
  return (
    <article className='w-full p-2 m-4 flex justify-center'>
      {Object.entries(categories).map(([name]) => {
        return (
          <span
            key={name}
            className='mr-2 p-2 px-4 text-white bg-gray-800 rounded-md'
          >
            {name}
          </span>
        )
      })}
    </article>
  )
}
