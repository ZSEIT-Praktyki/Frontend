import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useState } from "react";

interface DropdownProps {
  children: ReactNode;
  value: string;
}

export default function Dropdown({ value, children }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="bg-gray-900 p-2 px-3 rounded relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-900 text-white font-medium z-20"
      >
        {value}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="absolute z-10 left-0 w-full bg-gray-900 p-2 px-3 text-white"
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
}

Dropdown.Item = ({ text, value }: ItemProps) => (
  <motion.li
    className="py-2 font-medium whitespace-nowrap overflow-hidden cursor-pointer"
    onClick={() => {}}
  >
    {text}
  </motion.li>
);
