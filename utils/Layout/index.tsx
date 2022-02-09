import Header from "@modules/Header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="w-full min-h-full flex justify-center flex-col">
      <Header></Header>
      {children}
    </main>
  );
}
