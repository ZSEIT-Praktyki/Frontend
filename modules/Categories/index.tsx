import { ReactNode } from "react";
import * as ai from "react-icons/ai";
import { RiArtboardLine, RiFirstAidKitLine, RiBaiduLine } from "react-icons/ri";
import { GiAmpleDress } from "react-icons/gi";
import { MdOutlineChildFriendly } from "react-icons/md";
import React from "react";

interface CategoryProps {
  icon: ReactNode;
  text: string;
  categoriesExtended: boolean;
}

function Category(props: CategoryProps) {
  return (
    <button
      className={`${
        props.categoriesExtended ? "flex" : "hidden"
      } md:flex items-center justify-between py-2 mt-2 rounded-md text-white transition hover:text-purple-500`}
    >
      {props.icon}
      <span className="font-normal text-xl">{props.text}</span>
      <ai.AiOutlineRight size={20} />
    </button>
  );
}

export default function Categories() {
  const [categoriesExtended, setCategoriesExtended] = React.useState(false);

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
    <aside className="flex flex-col p-4 bg-gray-800  rounded-md mb-4">
      <section className="flex justify-between items-center">
        <h1 className="text-3xl text-white font-bold mb-2">Categories:</h1>
        <ai.AiOutlineBars
          className="text-white text-2xl md:hidden cursor-pointer transition hover:text-purple-500"
          onClick={() => setCategoriesExtended((prevState) => !prevState)}
        />
      </section>
      {categories.map((category) => (
        <Category
          key={category.text}
          icon={category.icon}
          text={category.text}
          categoriesExtended={categoriesExtended}
        />
      ))}
    </aside>
  );
}
