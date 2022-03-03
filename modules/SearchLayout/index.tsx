interface SearchLayoutProps {
  data: SearchProps;
}

import Listing from "@modules/Listing";
import PagingTab from "@modules/PagingTab";
import { SearchContext, SearchProps } from "pages/search";
import { memo, useContext, useState } from "react";
import Categories from "./components/Categories";
import PriceFilters from "./components/PriceFilters";
import { Input, Button } from "@components/index";

const LAYOUT = {
  block:
    "p-2 w-full grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4 ",
  horizontal: "flex flex-col w-full p-2",
};

function SearchLayout({ data }: SearchLayoutProps) {
  const { onClear, setParams } = useContext(SearchContext);
  const [layout, setLayout] = useState<"block" | "horizontal">("block");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [city, setCity] = useState("");

  function onApply() {
    setParams((p: any) => ({
      ...p,
      city: city || "",
      min: +min || 0,
      max: +max || 9999,
    }));
  }

  function onLayoutChange(type: "block" | "horizontal") {
    setLayout(type);
  }

  return (
    <main className="flex max-w-7xl ">
      <aside
        className="hidden md:flex flex-col w-80 p-4 m-2 mr-5 bg-gray-800 rounded"
        style={{ maxHeight: "100vh" }}
      >
        <Categories />

        <hr className="w-full mt-2 border-gray-700" />

        <h2 className="text-white text-2xl font-medium mt-2 mb-2">City</h2>
        <Input
          classes="!m-0"
          value={city}
          onChange={({ target }) => setCity(target.value)}
        />

        <hr className="w-full mt-2 border-gray-700" />

        <h2 className="text-white text-2xl font-medium mt-2">Price</h2>

        <PriceFilters max={max} min={min} setMax={setMax} setMin={setMin} />

        <Button variants="fire" classes="py-4 !m-0 !mt-2" onClick={onApply}>
          Apply filters
        </Button>

        <button onClick={onClear} className="mt-2 text-white">
          Clear filters
        </button>
      </aside>
      <main className="flex flex-col flex-1">
        <PagingTab
          amount={data.amount}
          hasMore={data.hasMore}
          layout={layout}
          onLayoutChange={onLayoutChange}
        />
        <section className={`w-full ${LAYOUT[layout]}`}>
          {data.results.map((listing) => (
            <Listing
              key={listing.listing_id}
              horizontal={layout === "horizontal"}
              {...listing}
            />
          ))}
        </section>

        {data.results.length === 0 && (
          <section className="flex flex-1">
            <img src="/404.svg" className="w-full h-full" alt="not found" />
          </section>
        )}

        <PagingTab
          amount={data.amount}
          hasMore={data.hasMore}
          layout={layout}
          onLayoutChange={onLayoutChange}
        />
      </main>
    </main>
  );
}

export default memo(SearchLayout);
