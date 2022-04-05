import { AiOutlineBars } from "react-icons/ai";
import { RiLayoutGridLine } from "react-icons/ri";

type Layout = "block" | "horizontal";

interface ToggleProps {
  onLayoutChange: (layout: Layout) => void;
  layout: Layout;
}

export default function ToggleLayout({ onLayoutChange, layout }: ToggleProps) {
  return (
    <section className="hidden sm:flex flex-1">
      <button
        name="grid layout"
        className="p-2"
        onClick={() => onLayoutChange("block")}
      >
        <RiLayoutGridLine
          color={layout === "block" ? "purple" : "white"}
          size={25}
        />
      </button>
      <button
        name="bar layout"
        className="p-2"
        onClick={() => onLayoutChange("horizontal")}
      >
        <AiOutlineBars
          color={layout === "horizontal" ? "purple" : "white"}
          size={25}
        />
      </button>
    </section>
  );
}
