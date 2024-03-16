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

const initParams = {
  min: 0,
  max: 9999 * 100,
  subcategory_id: null,
  condition: [],
  sort: "ASC" as "ASC" | "DESC",
  city: "",
};
export default function Search() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [params, setParams] = useState(initParams);

  const { data = init, isLoading } = useGetSearchResultsQuery({
    ...params,
    page,
    query: router.query.q as string,
    subcategory_id:
      params.subcategory_id ?? Number(router.query.subcategory_id),
  });

  function onClear() {
    setParams(initParams);
    router.query.subcategory_id = undefined;
    router.push(router);
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

        <div className="flex w-10/12">
          <h1 className="text-white my-10 text-5xl font-bold text-left">
            Looking for &quot;{router.query.q}&quot;.
          </h1>
        </div>

        <SearchLayout data={data} loading={isLoading} />
      </main>
    </SearchContext.Provider>
  );
}
