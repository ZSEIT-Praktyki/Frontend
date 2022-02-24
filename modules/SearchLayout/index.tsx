interface SearchLayoutProps {
  data: SearchProps;
  setPage: (page: number) => void;
  page: number;
}

import { Button, Input } from "@components/index";
import Listing from "@modules/Listing";
import PagingTab from "@modules/PagingTab";
import { SearchProps } from "pages/search";

export default function SearchLayout({
  data,
  page,
  setPage,
}: SearchLayoutProps) {
  return (
    <main className="flex max-w-7xl ">
      <div className="hidden md:flex max-h-full flex-col w-80 p-4 m-2 mr-5 bg-gray-800 rounded">
        <h2 className="text-white text-2xl font-medium">Categories</h2>
        <hr className="w-full mt-2 border-gray-700" />
        <ul className="p-2">
          {Array(10)
            .fill({})
            .map((_, i) => (
              <li
                key={i}
                className="pt-2 text-gray-200 text-xl items-center font-medium flex justify-between"
              >
                <p>Element</p>
                <span className="bg-gray-700 p-1 px-2 rounded">6</span>
              </li>
            ))}
        </ul>

        <hr className="w-full mt-2 border-gray-700" />

        <h2 className="text-white text-2xl font-medium mt-2">Cities</h2>
        <Input classes="w-full !m-0 !mt-2" placeholder="All contry" />

        <hr className="w-full mt-2 border-gray-700" />

        <h2 className="text-white text-2xl font-medium mt-2">Listing type</h2>

        <ul className="p-2">
          <li className="flex flex-row items-center text-gray-300 font-medium">
            <input type="checkbox" className="w-6 h-6" />
            <p className="pl-2">Buy now</p>
          </li>
        </ul>
        <hr className="w-full mt-2 border-gray-700" />

        <h2 className="text-white text-2xl font-medium mt-2">Condition</h2>

        <ul className="p-2">
          <li className="flex flex-row items-center mb-2 text-gray-300 font-medium">
            <input type="checkbox" className="w-6 h-6" />
            <p className="pl-2">New</p>
          </li>
          <li className="flex flex-row items-center mb-2 text-gray-300 font-medium">
            <input type="checkbox" className="w-6 h-6" />
            <p className="pl-2">Well</p>
          </li>
          <li className="flex flex-row items-center mb-2 text-gray-300 font-medium">
            <input type="checkbox" className="w-6 h-6" />
            <p className="pl-2">Used</p>
          </li>
        </ul>

        <hr className="w-full mt-2 border-gray-700" />

        <h2 className="text-white text-2xl font-medium mt-2">Price</h2>

        <section className="flex flex-row w-full justify-between">
          <input
            type="number"
            placeholder="From"
            className="bg-gray-900 text-white first:mr-2 p-2 w-1/2 py-2 rounded mb-2 mt-2 border-2 border-zinc-600"
          />
          <input
            type="number"
            placeholder="To"
            className="bg-gray-900 text-white first:mr-2 p-2 w-1/2 py-2 rounded mb-2 mt-2 border-2 border-zinc-600"
          />
        </section>

        <Button variants="fire" classes="py-3 !m-0 !mt-2">
          Apply filters
        </Button>
      </div>
      <main className="flex flex-col flex-1">
        <PagingTab
          amount={data.amount}
          hasMore={data.hasMore}
          page={page}
          setPage={setPage}
        />
        <section className="p-2 w-full grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-4">
          {data.results.map((listing) => (
            <Listing key={listing.listing_id} {...listing} />
          ))}
        </section>

        <PagingTab
          amount={data.amount}
          hasMore={data.hasMore}
          page={page}
          setPage={setPage}
        />
      </main>
    </main>
  );
}
