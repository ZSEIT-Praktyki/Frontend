import { categories } from "@utils/assets/constants/categories";
import clsx from "clsx";
import { SearchContext } from "pages/search";
import { useContext } from "react";

export default function Categories() {
  const { params, setParams } = useContext(SearchContext);

  return (
    <ul>
      {categories.map(({ icon, text }, index) => (
        <li key={text} className="items-center">
          <button
            className={clsx(
              "flex items-center font-medium gap-3 hover:bg-zinc-800 w-full p-3 rounded-md",
              {
                "text-purple-600": params?.subcategory_id === index + 1,
                "text-white": params?.subcategory_id !== index + 1,
              }
            )}
            onClick={() =>
              setParams((p: any) => ({ ...p, subcategory_id: index + 1 }))
            }
          >
            {icon}
            {text}
          </button>
        </li>
      ))}
    </ul>
  );
}
