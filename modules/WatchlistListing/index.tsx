import { Button } from "@components/index";
import { API } from "@utils/assets/constants/routes";
import { FiTrash2 } from "react-icons/fi";
import { BsCashCoin } from "react-icons/bs";
import { useRemoveWatchlistMutation } from "@utils/services/watchlistService";
import { useRouter } from "next/router";

const nt =
  "https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400005/99776312-fehler-404-seite-nicht-gefunden-fehler-mit-glitch-effekt-auf-dem-bildschirm-vektor-illustration-f%C3%BCr-.jpg";

export default function WatchlistListing({
  images,
  title,
  added_date,
  price,
  listing_id,
}: ListingMinified) {
  const [Remove] = useRemoveWatchlistMutation();
  const router = useRouter();
  return (
    <article className="w-full p-2 h-44 flex flex-row bg-gray-800 mb-2 rounded-xl">
      <img
        src={images ? `${API}/listings/images/${images.filename}` : nt}
        alt="Thumbnail"
        className="h-full rounded-md"
      />
      <section className="pl-2 flex flex-col justify-between">
        <h2 className="text-white font-medium text-2xl">{title}</h2>

        <p className="text-gray-300">
          Olsztyn at {new Date(added_date).toLocaleDateString()} <br />
          <strong className="font-medium text-xl"> &euro;{price / 100}</strong>
        </p>

        <section className="flex">
          <Button
            variants="error"
            classes="m-0 !border-0"
            onClick={() => Remove(listing_id)}
          >
            <FiTrash2 color="white" />
            <span className="hidden ml-2 sm:block">Remove</span>
          </Button>
          <Button
            variants="fire"
            classes="m-0"
            onClick={() => router.push("/checkout?id=" + listing_id)}
          >
            <BsCashCoin color="white" />
            <span className="hidden ml-2 sm:block">Purchase</span>
          </Button>
        </section>
      </section>
    </article>
  );
}
