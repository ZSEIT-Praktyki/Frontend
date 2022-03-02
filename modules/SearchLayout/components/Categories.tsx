import { categories } from "@utils/assets/constants/categories";
import { SearchContext } from "pages/search";
import { useContext } from "react";

export default function Categories() {
  const { params, setParams } = useContext(SearchContext);

  return (
    <ul>
      {categories.map(({ icon, text }, index) => (
        <li key={text} className="p-2 items-center">
          <button
            className={`flex ${
              params?.subcategory_id === index + 1
                ? "text-purple-600"
                : "text-white"
            }`}
            onClick={() =>
              setParams((p: any) => ({ ...p, subcategory_id: index + 1 }))
            }
          >
            <span className="pr-2">{icon}</span>
            <p className="font-medium">{text}</p>
          </button>
        </li>
      ))}
    </ul>
  );
}
