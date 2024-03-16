import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useState } from "react";

interface DropdownProps {
  children: ReactNode;
  value: string;
}

export default function Dropdown({ value, children }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="bg-zinc-950 p-2 px-3 rounded relative">
      <button
        name="options"
        onClick={() => setIsOpen(!isOpen)}
        className="bg-zinc-950 text-white font-medium z-20"
      >
        {value}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="absolute z-10 left-0 w-full bg-zinc-950 min-w-14 p-2 px-3 text-white"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.1 }}
          >
            {children}
          </motion.ul>
        )}
      </AnimatePresence>
    </section>
  );
}

interface ItemProps {
  text: string;
  value: string;
  onClick: (v: string) => void;
}

export const Item = ({ text, value, onClick }: ItemProps) => (
  <motion.li
    className="py-2 font-medium whitespace-nowrap overflow-hidden cursor-pointer"
    onClick={() => onClick(value)}
  >
    {text}
  </motion.li>
);
