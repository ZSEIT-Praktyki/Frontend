import { ReactNode } from "react";
import * as ai from "react-icons/ai";
import { RiArtboardLine, RiFirstAidKitLine, RiBaiduLine } from "react-icons/ri";
import { GiAmpleDress } from "react-icons/gi";
import { MdOutlineChildFriendly } from "react-icons/md";

interface CategoryProps {
  icon: ReactNode;
  text: string;
}

function Category(props: CategoryProps) {
  return (
    <button className=" flex items-center justify-between p-2 mb-2 rounded-md text-white transition hover:text-purple-500">
      {props.icon}
      <span className="font-normal text-xl">{props.text}</span>
      <ai.AiOutlineRight size={20} />
    </button>
  );
}

export default function Categories() {
  const categories = [
    { icon: <ai.AiOutlineLaptop size={30} />, text: "Electronics" },
    { icon: <GiAmpleDress size={30} />, text: "Fashion" },
    { icon: <ai.AiOutlineHome size={30} />, text: "Home & garden" },
    { icon: <ai.AiOutlineCar size={30} />, text: "Vehicles" },
    { icon: <MdOutlineChildFriendly size={30} />, text: "Kid" },
    { icon: <RiFirstAidKitLine size={30} />, text: "Health" },
    {
      icon: <ai.AiOutlineBook size={30} />,
      text: "Culture & Entertaiment",
    },
    { icon: <ai.AiOutlineDribbble size={30} />, text: "Sports goods" },
    { icon: <RiArtboardLine size={30} />, text: "Collectibles & Art" },
    { icon: <RiBaiduLine size={30} />, text: "Animals" },
  ];

  return (
    <aside className="flex flex-col p-2 bg-gray-800 m-2 rounded-md mb-4">
      <h1 className="text-2xl text-white">Categories:</h1>
      {categories.map((category) => (
        <Category icon={category.icon} text={category.text} />
      ))}
    </aside>
  );
}
