import { SearchContext } from "pages/search";
import { memo, useContext, useState } from "react";
import { Button } from "@components/index";

function PriceFilters() {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const { setParams } = useContext(SearchContext);

  function onApply() {
    setParams((p: any) => ({
      ...p,
      min: +min || 0,
      max: +max || 9999,
    }));
  }

  return (
    <>
      <section className="flex flex-row w-full justify-between">
        <input
          value={min}
          onChange={({ target }) => setMin(target.value)}
          type="number"
          placeholder="From"
          className="bg-gray-900 text-white first:mr-2 p-2 w-1/2 py-2 rounded mb-2 mt-2 border-2 border-zinc-600"
        />
        <input
          value={max}
          onChange={({ target }) => setMax(target.value)}
          type="number"
          placeholder="To"
          className="bg-gray-900 text-white first:mr-2 p-2 w-1/2 py-2 rounded mb-2 mt-2 border-2 border-zinc-600"
        />
      </section>

      <Button variants="fire" classes="py-4 !m-0 !mt-2" onClick={onApply}>
        Apply filters
      </Button>
    </>
  );
}

export default memo(PriceFilters);
