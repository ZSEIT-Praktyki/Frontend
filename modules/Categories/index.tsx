import { ReactNode } from "react";
import * as ai from "react-icons/ai";
import { categories } from "@utils/assets/constants/categories";
import React from "react";
import { useRouter } from "next/router";

interface CategoryProps {
  icon: ReactNode;
  text: string;
  categoriesExtended: boolean;
  index: number;
}

function Category(props: CategoryProps) {
  const router = useRouter();
  return (
    <button
      onClick={() =>
        router.push(
          `/search?q=&min=0&max=99999&page=1&subcategory_id=${props.index + 1}`
        )
      }
      className={`${
        props.categoriesExtended ? "flex" : "hidden"
      } md:flex items-center max-w-xs justify-between py-2 mt-2 rounded-md text-white transition hover:text-purple-500`}
    >
      {props.icon}
      <span className="font-normal text-xl px-2">{props.text}</span>
      <ai.AiOutlineRight size={20} />
    </button>
  );
}

export default function Categories() {
  const [categoriesExtended, setCategoriesExtended] = React.useState(false);

  return (
    <aside
      style={{ minWidth: 300, maxHeight: "40rem" }}
      className="flex flex-col sm:sticky top-28 p-4 bg-gray-800 mt-2 rounded-md mb-4 m-2 max-h-screen"
    >
      <section className="flex justify-between items-center">
        <h2 className="text-3xl text-white font-bold mb-2">Categories:</h2>
        <ai.AiOutlineBars
          className="text-white text-2xl md:hidden cursor-pointer transition-color hover:text-purple-500"
          onClick={() => setCategoriesExtended((prevState) => !prevState)}
        />
      </section>
      {categories.map((category, index) => (
        <Category
          index={index}
          key={category.text}
          icon={category.icon}
          text={category.text}
          categoriesExtended={categoriesExtended}
        />
      ))}
    </aside>
  );
}
