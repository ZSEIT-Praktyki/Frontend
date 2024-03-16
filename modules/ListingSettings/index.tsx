import { API } from "@utils/assets/constants/routes";
import {
  useActivateListingMutation,
  useRemoveListingMutation,
} from "@utils/services/accountService";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { MdEdit } from "react-icons/md";

const nt =
  "https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400005/99776312-fehler-404-seite-nicht-gefunden-fehler-mit-glitch-effekt-auf-dem-bildschirm-vektor-illustration-f%C3%BCr-.jpg";

interface ListingProps extends ListingMinified {
  remove?: boolean;
  activate?: boolean;
  onOpenModal: (id: number) => void;
  index?: number;
}

export default function ListingSettings({
  images,
  title,
  listing_id,
  price,
  added_date,
  remove,
  activate,
  onOpenModal,
  index = 1,
}: ListingProps) {
  const [onRemove] = useRemoveListingMutation();
  const [onActivate] = useActivateListingMutation();
  const router = useRouter();

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        delay: index * 0.05,
      }}
      className="w-full flex flex-col p-2 rounded-lg xs:flex-row bg-zinc-950 mt-2"
    >
      <button
        onClick={() => router.push(`/listing/${listing_id}`)}
        disabled={router.asPath === "/user/ended-listings"}
      >
        <img
          style={{ maxHeight: 200 }}
          src={images ? `${API}/listings/images/${images.filename}` : nt}
          alt="Thumbnail"
          className="rounded-md w-full xs:w-72 object-cover"
        />
      </button>
      <section className="flex flex-col w-full md:ml-2">
        <header className="flex flex-row justify-between w-full items-center">
          <h2 className="text-orange-500 font-medium text-2xl ml-2">
            {title.substring(0, 30)}...
          </h2>
          <section className="flex flex-col items-end">
            <h2 className="text-white font-medium text-2xl">
              &euro;{price / 100}
            </h2>
          </section>
        </header>

        <h2 className="text-white font-medium text-xl mt-2 ml-2 mb-2">
          Added date:{" "}
          <span className="text-orange-500">
            {new Date(added_date).toLocaleDateString()}
          </span>
        </h2>
        <div className="flex">
          {remove && (
            <button
              onClick={() => onRemove(listing_id)}
              className="text-white bg-red-600 m-2 p-2 rounded"
            >
              Remove
            </button>
          )}
          {activate && (
            <button
              onClick={() => onActivate(listing_id)}
              className="text-white bg-green-600 m-2 p-2 rounded"
            >
              Activate
            </button>
          )}
          <button
            onClick={() => onOpenModal(listing_id)}
            className="p-2 rounded-full bg-zinc-900 m-2 w-10 h-10 flex justify-center items-center"
          >
            <MdEdit color="white" />
          </button>
        </div>
      </section>
    </motion.article>
  );
}
