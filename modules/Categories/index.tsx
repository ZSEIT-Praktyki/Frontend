import { ReactNode } from "react";
import * as ai from "react-icons/ai";
import { categories } from "@utils/assets/constants/categories";
import React from "react";
import { useRouter } from "next/router";
import clsx from "clsx";

interface CategoryProps {
  icon: ReactNode;
  text: string;
  categoriesExtended: boolean;
  index: number;
}

function Category(props: CategoryProps) {
  const router = useRouter();
  return (
    <li>
      <button
        style={{ minWidth: 250 }}
        onClick={() =>
          router.push({
            pathname: "/search",
            query: {
              q: "",
              min: 0,
              max: 99999,
              page: 1,
              subcategory_id: props.index + 1,
            },
          })
        }
        className={clsx(
          "flex items-center justify-start text-white p-3 gap-5 text-lg rounded-md w-full transition-colors hover:bg-zinc-800 hover:text-white",
          {
            hidden: !props.categoriesExtended,
          }
        )}
      >
        {props.icon}
        {props.text}
      </button>
    </li>
  );
}

export default function Categories() {
  const [categoriesExtended, setCategoriesExtended] = React.useState(false);

  return (
    <aside
      style={{ minWidth: 300, maxHeight: "45rem" }}
      className="flex flex-col md:sticky top-28 p-4 bg-zinc-900 mt-2 rounded-md mb-4 m-2 max-h-screen"
    >
      <section className="flex justify-between items-center mb-5">
        <h2 className="text-3xl text-white font-bold">Categories</h2>
        <ai.AiOutlineBars
          className="text-white text-2xl md:hidden cursor-pointer transition-color hover:text-purple-500"
          onClick={() => setCategoriesExtended((prevState) => !prevState)}
        />
      </section>
      <ul className="md:hidden">
        {categories.map((category, index) => (
          <Category
            index={index}
            key={category.text}
            icon={category.icon}
            text={category.text}
            categoriesExtended={categoriesExtended}
          />
        ))}
      </ul>
      <ul className="hidden md:block">
        {categories.map((category, index) => (
          <Category
            index={index}
            key={category.text}
            icon={category.icon}
            text={category.text}
            categoriesExtended
          />
        ))}
      </ul>
    </aside>
  );
}
