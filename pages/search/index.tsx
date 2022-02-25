import Head from "next/head";
import { useRouter } from "next/router";
import useFetch from "@utils/hooks/useFetch";
import { useState } from "react";
import SearchLayout from "@modules/SearchLayout";

export interface SearchProps {
  hasMore: boolean;
  results: ListingMinified[];
  amount: number;
}

const init = {
  hasMore: false,
  results: [],
};

export default function Search() {
  const router = useRouter();
  const [page, setPage] = useState(1);

  const { data } = useFetch<SearchProps>(
    `/listings/search?query=${router.query.q ?? ""}&page=${page}`,
    [page],
    init
  );

  return (
    <main className="p-2 flex flex-col items-center">
      <Head>
        <title>Search</title>
      </Head>

      <div className="flex w-full max-w-7xl">
        <h1 className="text-white my-10 text-5xl font-bold text-left">
          Looking for &quot;{router.query.q}&quot;.
        </h1>
      </div>

      <SearchLayout data={data} setPage={setPage} page={page} />
    </main>
  );
}
