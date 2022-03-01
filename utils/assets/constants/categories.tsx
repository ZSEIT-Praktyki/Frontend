import { RiArtboardLine, RiFirstAidKitLine, RiBaiduLine } from "react-icons/ri";
import { GiAmpleDress } from "react-icons/gi";
import { MdOutlineChildFriendly } from "react-icons/md";
import * as ai from "react-icons/ai";

export const categories = [
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
