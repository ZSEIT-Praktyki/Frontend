import { H3 } from "@components/UI/Text";
import { AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

interface ModalProps {
  onClose: () => void;
  clickAway?: boolean;
  title?: string;
  children: ReactNode;
  vissible: boolean;
}

export default function Modal({
  clickAway = false,
  onClose,
  title,
  children,
  vissible,
}: ModalProps) {
  return (
    <AnimatePresence>
      {vissible && (
        <motion.main
          tabIndex={1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => clickAway && onClose()}
          className="fixed top-0 left-0 p-2 w-full h-full z-50 backdrop-blur-sm flex justify-center items-center"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <article
            onClick={(e) => e.stopPropagation()}
            className="max-w-xl rounded-md p-2 bg-gray-900  w-full"
          >
            <header className="flex justify-between w-full p-3 border-b-2 border-b-gray-800 ">
              <H3>{title}</H3>
              <button
                className="bg-gray-800 p-2 rounded-full w-8 h-8"
                onClick={onClose}
              >
                <AiOutlineClose className="text-gray-200" />
              </button>
            </header>
            <section className="p-2">{children}</section>
          </article>
        </motion.main>
      )}
    </AnimatePresence>
  );
}
