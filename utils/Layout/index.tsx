import BottomTab from "@modules/BottomTab";
import Footer from "@modules/Footer";
import Header from "@modules/Header";
import useCheckCookie from "@utils/hooks/useCheckCookie";
import { ReactNode } from "react";
import { useEffect } from "react";
import { userActions } from "@utils/store/User/User";
import useUserCredentials from "@utils/hooks/useUserCredentials";
import store from "@utils/store/store";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  useCheckCookie();
  useUserCredentials();

  useEffect(() => {
    const val = localStorage.getItem("user");
    if (val !== null) {
      store.dispatch(userActions.setLoggedIn());
    }
  }, []);

  return (
    <main className="w-full h-full bg-zinc-950 min-h-screen">
      <Header />
      <section>{children}</section>

      <BottomTab />
      <Footer />
    </main>
  );
}
