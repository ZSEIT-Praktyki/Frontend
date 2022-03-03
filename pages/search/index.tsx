import Head from "next/head";
import { useRouter } from "next/router";
import { createContext, useState } from "react";
import SearchLayout from "@modules/SearchLayout";
import { useGetSearchResultsQuery } from "@utils/services/searchService";

export interface SearchProps {
  hasMore: boolean;
  results: ListingMinified[];
  amount: number;
}

const init = {
  hasMore: false,
  results: [],
  amount: 1,
};

export const SearchContext = createContext({
  page: 0,
  params: {
    min: 0,
    max: 9999 * 100,
    subcategory_id: null,
    sort: "",
    city: "",
  },
  setPage: (arg: any) => {},
  setParams: (arg: any) => {},
  onClear: () => {},
});

export default function Search() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [params, setParams] = useState({
    min: 0,
    max: 9999 * 100,
    subcategory_id: null,
    condition: [],
    sort: "ASC" as "ASC" | "DESC",
    city: "",
  });

  const { data = init } = useGetSearchResultsQuery({
    max: params.max,
    min: params.min,
    page,
    city: params.city,
    sort: params.sort,
    query: router.query.q as string,
    subcategory_id:
      params.subcategory_id ?? Number(router.query.subcategory_id),
  });

  function onClear() {
    setParams({
      city: "",
      sort: "ASC",
      min: 0,
      max: 9999 * 100,
      subcategory_id: null,
      condition: [],
    });
  }

  return (
    <SearchContext.Provider
      value={{
        page,
        setPage,
        params,
        setParams,
        onClear,
      }}
    >
      <main className="p-2 flex flex-col items-center">
        <Head>
          <title>Search {router.query.q ?? ""}</title>
          <meta
            name="description"
            content="Page containing listings based on params"
          />
        </Head>

        <div className="flex w-full max-w-7xl">
          <h1 className="text-white my-10 text-5xl font-bold text-left">
            Looking for &quot;{router.query.q}&quot;.
          </h1>
        </div>

        <SearchLayout data={data} />
      </main>
    </SearchContext.Provider>
  );
}
