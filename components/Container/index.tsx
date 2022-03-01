import { ReactNode } from "react";

const variants = {
  "center-vertical": "items-center",
  "center-horizontal": "justify-center",
  "center-all": "justify-center items-center",
};

interface ContainerProps {
  children: ReactNode;
  type?: keyof typeof variants;
}

export default function Container({ children, type }: ContainerProps) {
  return (
    <main
      className={`w-full min-h-screen flex relative  ${type && variants[type]}`}
    >
      {children}
    </main>
  );
}
