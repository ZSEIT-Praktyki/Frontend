import { useState } from "react";
import { useRouter } from "next/router";
import { Input, Button } from "@components/index";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchForm() {
  const router = useRouter();

  const [query, setQuery] = useState("");

  function onSearch(e: any) {
    e.preventDefault();
    router.push(`/search?q=${query}&min=0&max=99999&page=1`, {
      pathname: "/search",

      query: {
        q: query,
        page: 1,
        min: 0,
        max: 99999,
      },
    });
  }

  return (
    <form
      className="w-full flex-[3] justify-center flex m-0 max-w-6xl"
      onSubmit={onSearch}
    >
      <Input
        value={query}
        onChange={({ target }) => setQuery(target.value)}
        classes="bg-gray-800 mr-0 py-3 !text-white border-0"
        placeholder="Search anything, we may have it"
      />
      <Button
        variants="text"
        classes="border-gray-800 bg-gray-800 hover:bg-gray-800 m-2"
        type="submit"
        name="search"
      >
        <AiOutlineSearch color="white" />
      </Button>
    </form>
  );
}
