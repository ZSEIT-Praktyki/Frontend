import { categories } from "@utils/assets/constants/categories";
import clsx from "clsx";
import { useRouter } from "next/router";
import { SearchContext } from "pages/search";
import { useContext } from "react";

export default function Categories() {
  const { params, setParams } = useContext(SearchContext);

  const router = useRouter();

  return (
    <ul>
      {categories.map(({ icon, text }, index) => (
        <li key={text} className="items-center">
          <button
            className={clsx(
              "flex items-center font-medium gap-3 hover:bg-zinc-800 w-full p-3 rounded-md active:bg-zinc-700 text-white transition cursor-pointer justify-start",
              {
                "bg-zinc-800":
                  (params?.subcategory_id ||
                    Number(router.query.subcategory_id)) ===
                  index + 1,
              }
            )}
            onClick={() => {
              if (params.subcategory_id === index + 1) {
                setParams({
                  ...params,
                  subcategory_id: 0,
                });
                router.push({
                  pathname: "/search",
                  query: { ...router.query, subcategory_id: null },
                });
              } else {
                setParams((p: any) => ({ ...p, subcategory_id: index + 1 }));
                router.push({
                  pathname: "/search",
                  query: { ...router.query, subcategory_id: index + 1 },
                });
              }
            }}
          >
            {icon}
            {text}
          </button>
        </li>
      ))}
    </ul>
  );
}
