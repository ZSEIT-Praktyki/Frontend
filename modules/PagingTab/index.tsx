interface PagingTabProps {
  setPage: (page: number) => void;
  page: number;
  hasMore: boolean;
  amount: number;
}

import { AiOutlineBars } from "react-icons/ai";
import { RiLayoutGridLine } from "react-icons/ri";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { ChangeEvent, useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function PagingTab({
  page,
  setPage,
  hasMore,
  amount,
}: PagingTabProps) {
  const router = useRouter();
  const [input, setInput] = useState<number>(1);

  useEffect(() => {
    router.push("/search", {
      query: {
        q: router.query.q,
        page: page === 0 ? 1 : page,
      },
    });
  }, [page]);

  useEffect(() => {
    setInput(page);
  }, [page]);

  function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (input > 0 && input <= amount) {
      setPage(input);
    }
  }

  function onNext() {
    setPage(page + 1);
  }

  function onPrev() {
    setPage(page - 1);
  }

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setInput(+e.target.value);
  }

  // TODO: Prevent inserting invalid values

  return (
    <nav className="bg-gray-800 mt-2 mb-5 items-center flex flex-col sm:flex-row  justify-between p-2 rounded">
      <section className="hidden sm:flex flex-1">
        <button className="p-2">
          <AiOutlineBars color="white" size={25} />
        </button>
        <button className="p-2 ">
          <RiLayoutGridLine color="white" size={25} />
        </button>
      </section>
      <section className="flex flex-1 items-center justify-center mb-2 sm:mb-0">
        <p className="text-white font-medium text-md mr-5">Sort by:</p>
        <select className="bg-gray-900 p-2 text-white rounded px-3">
          <option value="LATEST">Latest</option>
          <option value="CHEAPEST">Cheapest</option>
          <option value="DEAREST">Dearest</option>
          <option value="OLDEST">Oldest</option>
        </select>
      </section>
      <section className="flex-1 flex flex-row items-center justify-end">
        <button className="p-1 px-2" onClick={onPrev} disabled={page - 1 === 0}>
          <BiChevronLeft color="white" size={30} />
        </button>
        <form onSubmit={onSubmit}>
          <input
            value={input}
            onChange={onChange}
            type="text"
            className="bg-gray-900 p-2 rounded w-12 text-white text-center"
          />
        </form>
        <span className="text-white px-4 font-medium text-xl">of</span>
        <span className="text-white font-medium text-xl">{amount}</span>
        <button className="p-1 px-2" onClick={onNext} disabled={!hasMore}>
          <BiChevronRight color="white" size={30} />
        </button>
      </section>
    </nav>
  );
}
