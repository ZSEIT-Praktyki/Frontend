import { Button } from "@components/index";
import Image from "next/image";

import { AiOutlineHeart } from "react-icons/ai";

export default function Product() {
  return (
    <section className="bg-gray-800 text-white">
      <Image
        src={require("../../utils/assets/images/placeholder.png")}
        layout="responsive"
        alt="image"
      />

      <h2 className="font-bold text-white p-2 text-xl">Title</h2>

      <p className="p-2 font-medium">Olsztyn at 9:40</p>

      <div className="flex flex-row justify-between m-2">
        <p className="text-white font-medium text-xl">$1000</p>

        <button>
          <AiOutlineHeart color="white" size={25} />
        </button>
      </div>
    </section>
  );
}
