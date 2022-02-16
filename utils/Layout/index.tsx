import Footer from "@modules/Footer";
import Header from "@modules/Header";
import useCheckCookie from "@utils/hooks/useCheckCookie";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { cookie } = useCheckCookie();
  return (
    <main className="w-full h-full bg-gray-900 min-h-screen">
      <Header></Header>
      <section>{children}</section>
      <Footer></Footer>
    </main>
  );
}
