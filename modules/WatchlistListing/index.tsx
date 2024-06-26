import { Button } from "@components/index";
import { API } from "@utils/assets/constants/routes";
import { FiTrash2 } from "react-icons/fi";
import { BsCashCoin } from "react-icons/bs";
import { useRemoveWatchlistMutation } from "@utils/services/watchlistService";
import { useRouter } from "next/router";

import { motion } from "framer-motion";

const nt =
  "https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400005/99776312-fehler-404-seite-nicht-gefunden-fehler-mit-glitch-effekt-auf-dem-bildschirm-vektor-illustration-f%C3%BCr-.jpg";

interface WatchlistProps extends ListingMinified {
  index: number;
}

export default function WatchlistListing({
  images,
  title,
  added_date,
  price,
  listing_id,
  index,
}: WatchlistProps) {
  const [Remove] = useRemoveWatchlistMutation();
  const router = useRouter();
  return (
    <article className="w-full flex-col p-3 md:p-5 flex sm:flex-row bg-zinc-950 mb-2 rounded-xl">
      <img
        src={images ? `${API}/listings/images/${images.filename}` : nt}
        alt="Thumbnail"
        style={{ maxHeight: 200 }}
        className="h-full rounded-md sm:w-64 sm:h-56 object-cover"
      />
      <section className="pl-2 flex flex-col justify-between">
        <div>
          <h2 className="text-white font-medium text-2xl mt-2 sm:mt-0">
            {title}
          </h2>

          <p className="text-gray-300">
            Olsztyn at {new Date(added_date).toLocaleDateString()} <br />
            <strong className="font-medium text-xl">&euro;{price / 100}</strong>
          </p>
        </div>

        <section className="flex mt-2">
          <Button
            variants="error"
            classes="m-0 !border-0 mr-2 w-full"
            onClick={() => Remove(listing_id)}
          >
            <FiTrash2 color="white" />
            <span className="ml-2">Remove</span>
          </Button>
          <Button
            variants="fire"
            classes="m-0 w-full"
            onClick={() => router.push("/checkout?id=" + listing_id)}
          >
            <BsCashCoin color="white" />
            <span className="ml-2">Purchase</span>
          </Button>
        </section>
      </section>
    </article>
  );
}
