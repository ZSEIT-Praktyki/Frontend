import Navbar from "@modules/Navbar";
import Product from "@modules/Product";
import Searchbar from "@modules/SearchBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <div className="w-full flex justify-center p-2">
        <Image src={require("../public/logo.svg")} />
      </div>
      <Searchbar></Searchbar>

      <Navbar></Navbar>
    </main>
  );
}
