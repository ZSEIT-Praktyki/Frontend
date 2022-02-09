import { Input } from "@components/index";

export default function Searchbar() {
  return (
    <header className="w-full flex flex-col sticky ">
      <Input classes="w-full  pl-5" placeholder="Search something" />
    </header>
  );
}
