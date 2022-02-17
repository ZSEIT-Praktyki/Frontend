import { Button } from "@components/index";
import useAddWatchlist from "@utils/hooks/useAddWatchlist";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Listing({
  title,
  price,
  added_date,
  listing_id,
}: ListingProps) {
  const router = useRouter();

  const { Append, status } = useAddWatchlist();

  return (
    <section className="bg-gray-800 text-white flex flex-col justify-between rounded mb-2 relative">
      {/* <span className="absolute -top-3 right-0 text-xs bg-green-600 z-10 p-1 rounded">
        In Watchlist
      </span> */}
      <div>
        <Image
          onClick={() => router.push("/listing/" + listing_id)}
          src={require("../../utils/assets/images/placeholder.png")}
          layout="responsive"
          alt="image"
          className="cursor-pointer rounded"
          priority={false}
        />
      </div>

      <h2 className="font-medium p-2 text-xl">{title}</h2>
      <div className="flex flex-row text-gray-400 p-2 font-medium justify-between text-md">
        <p> Olsztyn at {new Date(added_date).toLocaleDateString()}</p>
        <p>&euro;{price / 100}</p>
      </div>

      <div className="p-2">
        <Button
          variants={status === "OK" ? "ok" : "fire"}
          classes="!border-0 !w-full py-3 !m-0"
          disabled={status === "OK" || status === "Failed"}
          onClick={() => Append(listing_id)}
        >
          {status === "OK" ? "Added" : "Follow"}
        </Button>
      </div>
    </section>
  );
}
