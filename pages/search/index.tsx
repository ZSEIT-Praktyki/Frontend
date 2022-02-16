import useFetch from "@utils/hooks/useFetch";
import { useRouter } from "next/router";

export default function Search() {
  const { query } = useRouter();

  console.log(query);

  const { data } = useFetch(`/listings/search?query=${query.q}`);

  console.log(data);

  return (
    <>
      <h1>Search</h1>
    </>
  );
}
