import Footer from "@modules/Footer";
import Header from "@modules/Header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="w-full h-full flex justify-center flex-col bg-gray-900">
      <Header></Header>
      {children}
      <Footer></Footer>
    </main>
  );
}
