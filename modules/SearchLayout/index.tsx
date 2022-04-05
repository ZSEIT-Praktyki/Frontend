interface SearchLayoutProps {
  data: SearchProps;
  loading: boolean;
}

import Listing from "@modules/Listing";
import PagingTab from "@modules/PagingTab";
import { SearchContext, SearchProps } from "pages/search";
import { memo, useContext, useState } from "react";
import Categories from "./components/Categories";
import PriceFilters from "./components/PriceFilters";
import { Input, Button } from "@components/index";
import Skeleton from "@components/Skeleton";

const LAYOUT = {
  block:
    "w-full grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4 ",
  horizontal: "flex flex-col w-full p-4",
};

const loading_grid = new Array(12)
  .fill({ id: 0 })
  .map((_, index) => ({ id: index }));

function SearchLayout({ data, loading }: SearchLayoutProps) {
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

          {loading &&
            !data.results &&
            loading_grid.map(({ id }) => (
              <article
                key={id}
                className={`h-80 bg-gray-800 rounded w-40  sm:w-52 ${
                  layout === "horizontal" && "mb-2"
                } `}
              >
                <Skeleton height={150} classes="mb-0 w-full" />
                <div className="p-2">
                  <Skeleton height={20} classes="mt-1 rounded" />
                  <Skeleton height={10} classes="p-2 mt-2 rounded" />
                  <Skeleton height={10} classes="p-2 mt-2 rounded !w-1/2" />

                  <Skeleton height={40} classes="mt-10 w-full rounded" />
                </div>
              </article>
            ))}

          {data.results.length === 0 && (
            <section className="w-full">
              <img src="/404.svg" className="w-full h-full" alt="not found" />
            </section>
          )}
        </section>

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
