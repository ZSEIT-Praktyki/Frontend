import { SearchContext } from "pages/search";
import { useContext } from "react";

export default function Conditions() {
  const { setParams, params } = useContext(SearchContext);

  function onSetCondition(type: string, checked: boolean) {
    if (!checked) {
      setParams((p: any) => ({
        ...p,
        condition: p.condition.filter((text: any) => text !== type),
      }));
    } else {
      setParams((p: any) => ({ ...p, condition: [...p.condition, type] }));
    }
  }

  return (
    <ul className="p-2">
      <li className="flex flex-row items-center mb-2 text-gray-300 font-medium">
        <input
          type="checkbox"
          className="w-6 h-6"
          onChange={(event) => onSetCondition("New", event.target.checked)}
        />
        <p className="pl-2">New</p>
      </li>
      <li className="flex flex-row items-center mb-2 text-gray-300 font-medium">
        <input
          type="checkbox"
          className="w-6 h-6"
          onChange={(event) => onSetCondition("Well", event.target.checked)}
        />
        <p className="pl-2">Well</p>
      </li>
      <li className="flex flex-row items-center mb-2 text-gray-300 font-medium">
        <input
          type="checkbox"
          className="w-6 h-6"
          onChange={(event) => onSetCondition("Used", event.target.checked)}
        />
        <p className="pl-2">Used</p>
      </li>
    </ul>
  );
}
