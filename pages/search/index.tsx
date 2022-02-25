import Head from "next/head";
import { useRouter } from "next/router";
import useFetch from "@utils/hooks/useFetch";
import { createContext, useEffect, useState } from "react";
import SearchLayout from "@modules/SearchLayout";
import { URLSearchParams } from "url";

export interface SearchProps {
  hasMore: boolean;
  results: ListingMinified[];
  amount: number;
}

const init = {
  hasMore: false,
  results: [],
};

export const SearchContext = createContext({
  page: 0,
  params: {},
  setPage: (arg: any) => {},
  setParams: (arg: any) => {},
});

export default function Search() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [params, setParams] = useState({
    min: 0,
    max: 9999 * 100,
  });

  const { data } = useFetch<SearchProps>(
    `/listings/search?query=${router.query.q ?? ""}&page=${page}&min=${
      params.min * 100
    }&max=${params.max * 100}`,
    [page, params],
    init
  );

  useEffect(() => {
    router.push("search", {
      query: {
        min: params.min,
        max: params.max,
        page: page,
        q: router.query.q,
      },
    });
  }, [params, page]);

  return (
    <SearchContext.Provider
      value={{
        page,
        setPage,
        params,
        setParams,
      }}
    >
      <main className="p-2 flex flex-col items-center">
        <Head>
          <title>Search</title>
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
