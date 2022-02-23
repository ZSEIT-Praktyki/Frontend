import { Button } from "@components/index";
import { API } from "@utils/assets/constants/routes";
import useAddWatchlist from "@utils/hooks/useAddWatchlist";
import { useRouter } from "next/router";

export default function Listing({
  title,
  price,
  listing_id,
  images,
  added_date,
}: ListingMinified) {
  const router = useRouter();
  const { Append, status } = useAddWatchlist();

  return (
    <section className="bg-gray-800 text-white flex flex-col justify-between rounded mb-2 relative">
      {/*    <span className="absolute -top-3 right-0 text-xs bg-green-600 z-10 p-1 rounded">
        In Watchlist
      </span> */}
      <div className="h-1/2 w-full">
        <img
          onClick={() => router.push("/listing/" + listing_id)}
          src={
            images
              ? `${API}/listings/images/${images.filename}`
              : "https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400005/99776312-fehler-404-seite-nicht-gefunden-fehler-mit-glitch-effekt-auf-dem-bildschirm-vektor-illustration-f%C3%BCr-.jpg"
          }
          alt="image"
          className="cursor-pointer rounded h-full object-cover w-full"
        />
      </div>

      <h2 className="font-medium p-2 text-xl">{title}</h2>
      <div className="flex flex-row text-gray-400 p-2 font-medium justify-between text-md">
        <p>
          Olsztyn at <br />
          {new Date(added_date).toLocaleDateString()}
        </p>
        <p>&euro;{price / 100}</p>
      </div>

      <div className="p-2">
        <Button
          variants={status === "OK" ? "ok" : "fire"}
          classes=" w-full !py-3 !m-0 text-center"
          disabled={status === "OK" || status === "Failed"}
          onClick={() => Append(listing_id)}
        >
          {status === "OK" ? "Added" : "Follow"}
        </Button>
      </div>
    </section>
  );
}
