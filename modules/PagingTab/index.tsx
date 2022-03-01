interface PagingTabProps {
  hasMore: boolean;
  amount: number;

  layout: "block" | "horizontal";
  onLayoutChange: (type: "block" | "horizontal") => void;
}

import { AiOutlineBars } from "react-icons/ai";
import { RiLayoutGridLine } from "react-icons/ri";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { ChangeEvent, useContext, useEffect } from "react";
import { useState } from "react";
import { SearchContext } from "pages/search";
import Dropdown from "@components/Dropdown";

export default function PagingTab({
  hasMore,
  amount,
  layout,
  onLayoutChange,
}: PagingTabProps) {
  const { page, setPage } = useContext(SearchContext);
  const [input, setInput] = useState<number>(1);

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
        <button className="p-2" onClick={() => onLayoutChange("block")}>
          <RiLayoutGridLine
            color={layout === "block" ? "purple" : "white"}
            size={25}
          />
        </button>
        <button className="p-2" onClick={() => onLayoutChange("horizontal")}>
          <AiOutlineBars
            color={layout === "horizontal" ? "purple" : "white"}
            size={25}
          />
        </button>
      </section>
      <section className="flex flex-1 items-center justify-center mb-2 sm:mb-0">
        <p className="text-white font-medium text-md mr-5">Sort by:</p>

        <Dropdown value="Cheapest">
          <Dropdown.Item value="" text="Dearest" />
          <Dropdown.Item value="" text="Cheapest" />
          <Dropdown.Item value="" text="Latest" />
          <Dropdown.Item value="" text="Oldest" />
        </Dropdown>
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
