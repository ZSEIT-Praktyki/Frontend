interface PagingTabProps {
  hasMore: boolean;
  amount: number;

  layout: "block" | "horizontal";
  onLayoutChange: (type: "block" | "horizontal") => void;
}

import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { ChangeEvent, useContext, useEffect } from "react";
import { useState } from "react";
import { SearchContext } from "pages/search";
import Dropdown, { Item } from "@components/Dropdown";
import ToggleLayout from "./components/toggle-layout";
import { useRouter } from "next/router";

export default function PagingTab({
  hasMore,
  amount,
  layout,
  onLayoutChange,
}: PagingTabProps) {
  const { page, setPage, setParams, params } = useContext(SearchContext);
  const [input, setInput] = useState<number>(1);
  const router = useRouter();

  useEffect(() => {
    if (page) setInput(page);
  }, [page]);

  function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (input > 0 && input <= amount) {
      setPage(input);
    }
  }

  const route = (p: number | string) =>
    router.push({
      pathname: "/search",
      query: {
        ...router.query,
        page: p,
      },
    });

  function onNext() {
    setPage(page + 1);
    route(page + 1);
  }

  function onPrev() {
    setPage(page - 1);
    route(page - 1);
  }

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    if (+e.target.value >= 0) {
      setInput(+e.target.value);
    }
  }

  return (
    <nav className="bg-zinc-900 items-center flex flex-col sm:flex-row justify-between p-2 rounded">
      <ToggleLayout onLayoutChange={onLayoutChange} layout={layout} />
      <section className="flex flex-1 items-center justify-center mb-2 sm:mb-0">
        <p className="text-white font-medium text-md mr-5">Sort by:</p>

        <Dropdown value={params.sort}>
          <Item
            onClick={(v) => setParams((p: any) => ({ ...p, sort: v }))}
            value="ASC"
            text="ASC"
          />
          <Item
            value="DESC"
            text="DESC"
            onClick={(v) => setParams((p: any) => ({ ...p, sort: v }))}
          />
        </Dropdown>
      </section>
      <section className="flex-1 flex flex-row items-center justify-end">
        <button
          role="button"
          name="previous page"
          className="p-1 px-2"
          onClick={onPrev}
          disabled={page - 1 === 0}
        >
          <BiChevronLeft color="white" size={30} />
        </button>
        <form onSubmit={onSubmit}>
          <input
            name="current page"
            value={input}
            onChange={onChange}
            type="text"
            className="bg-zinc-950 p-2 rounded w-12 text-white text-center"
          />
        </form>
        <span className="text-white px-4 font-medium text-xl">of</span>
        <span className="text-white font-medium text-xl">{amount}</span>
        <button
          role="button"
          name="next page"
          className="p-1 px-2"
          onClick={onNext}
          disabled={!hasMore}
        >
          <BiChevronRight color="white" size={30} />
        </button>
      </section>
    </nav>
  );
}
