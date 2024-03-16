import { memo } from "react";

interface PriceFiltersProps {
  min: string;
  max: string;
  setMin: (str: string) => void;
  setMax: (str: string) => void;
}

function PriceFilters({ max, min, setMax, setMin }: PriceFiltersProps) {
  return (
    <>
      <section className="flex flex-row w-full justify-between">
        <input
          value={min}
          onChange={({ target }) => setMin(target.value)}
          type="number"
          placeholder="From"
          className="bg-zinc-950 text-white first:mr-2 p-2 w-1/2 py-2 rounded mb-2 mt-2 border-2 border-zinc-600"
        />
        <input
          value={max}
          onChange={({ target }) => setMax(target.value)}
          type="number"
          placeholder="To"
          className="bg-zinc-950 text-white first:mr-2 p-2 w-1/2 py-2 rounded mb-2 mt-2 border-2 border-zinc-600"
        />
      </section>
    </>
  );
}

export default memo(PriceFilters);
