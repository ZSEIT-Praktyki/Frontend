import { AiOutlinePlus } from "react-icons/ai";

export default function FloatingButton() {
  return (
    <button className="rounded-full z-50 p-4 fixed bottom-5 right-5 transition hidden sm:visible bg-purple-700 active:bg-purple-900">
      <AiOutlinePlus size={25} color="white" />
    </button>
  );
}
