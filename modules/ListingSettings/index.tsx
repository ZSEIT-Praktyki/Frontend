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
    <article className="w-full flex flex-col p-3 md:p-5 rounded-xl xs:flex-row bg-zinc-950 mt-2 gap-5">
      <button onClick={() => router.push(`/listing/${listing_id}`)}>
        <img
          style={{ maxHeight: 200 }}
          src={images ? `${API}/listings/images/${images.filename}` : nt}
          alt="Thumbnail"
          className="rounded-md w-full xs:w-80 object-cover h-56 flex-shrink-0"
        />
      </button>
      <section className="w-full flex flex-col">
        <div className="flex-1">
          <div className="flex flex-row justify-between w-full items-center">
            <h2 className="text-purple-500 text-3xl font-bold">{title}</h2>

            <h2 className="text-white font-medium text-2xl">
              &euro;{price / 100}
            </h2>
          </div>

          <p className="text-white font-medium text-sm flex flex-col">
            Added date:{" "}
            <span className="text-purple-500 text-xl">
              {new Date(added_date).toLocaleDateString()}
            </span>
          </p>
        </div>
        <div className="flex flex-row w-full justify-between items-center mt-2 h-10">
          {remove && (
            <button
              onClick={() => onRemove(listing_id)}
              className="text-white bg-red-600 px-4 py-2 rounded-md"
            >
              Remove from sale
            </button>
          )}
          {activate && (
            <button
              onClick={() => onActivate(listing_id)}
              className="text-white bg-green-600 p-2 rounded"
            >
              Activate
            </button>
          )}
          <button
            onClick={() => onOpenModal(listing_id)}
            className="p-2 rounded-full bg-zinc-900 w-10 h-10 flex justify-center items-center"
          >
            <MdEdit color="white" />
          </button>
        </div>
      </section>
    </article>
  );
}
