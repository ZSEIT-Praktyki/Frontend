import { AiOutlineShop, AiOutlineRight } from "react-icons/ai";

function Category() {
  return (
    <button className=" flex items-center justify-between p-2 mb-2 rounded-md text-white">
      <AiOutlineShop size={30} />
      <span className="font-normal text-xl hover:text-emerald-500">Home</span>
      <AiOutlineRight size={20} />
    </button>
  );
}

export default function Categories() {
  return (
    <aside className="flex w-96 flex-col p-2 bg-gray-800 m-2 rounded-md mb-4">
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
    </aside>
  );
}
