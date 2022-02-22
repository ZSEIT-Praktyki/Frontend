import { Button } from "@components/index";
import { API } from "@utils/assets/constants/routes";
import useAddWatchlist from "@utils/hooks/useAddWatchlist";
import { useRouter } from "next/router";

export default function Listing({
  title,
  price,
  added_date,
  listing_id,
  images,
}: ListingProps) {
  const router = useRouter();

  const { Append, status } = useAddWatchlist();

  return (
    <section className="bg-gray-800 text-white flex flex-col justify-between rounded mb-2 relative">
      {/* <span className="absolute -top-3 right-0 text-xs bg-green-600 z-10 p-1 rounded">
        In Watchlist
      </span> */}
      <div>
        <img
          onClick={() => router.push("/listing/" + listing_id)}
          src={
            images[0]?.filename
              ? `${API}/listings/images/${images[0].filename}`
              : "https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400005/99776312-fehler-404-seite-nicht-gefunden-fehler-mit-glitch-effekt-auf-dem-bildschirm-vektor-illustration-f%C3%BCr-.jpg"
          }
          alt="image"
          className="cursor-pointer rounded"
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
          classes="border-0 w-full py-3 m-0 text-center"
          disabled={status === "OK" || status === "Failed"}
          onClick={() => Append(listing_id)}
        >
          {status === "OK" ? "Added" : "Follow"}
        </Button>
      </div>
    </section>
  );
}
