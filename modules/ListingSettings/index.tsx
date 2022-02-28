import { Button } from "@components/index";
import { API } from "@utils/assets/constants/routes";

const nt =
  "https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400005/99776312-fehler-404-seite-nicht-gefunden-fehler-mit-glitch-effekt-auf-dem-bildschirm-vektor-illustration-f%C3%BCr-.jpg";

export default function ListingSettings({
  images,
  title,
  price,
  added_date,
}: ListingMinified) {
  return (
    <article className="w-full m-2 flex flex-row p-2 bg-gray-700 rounded-lg">
      <img
        src={images ? `${API}/listings/images/${images.filename}` : nt}
        alt="Thumbnail"
        className="rounded-md h-32 w-64 object-cover"
      />
      <section className="flex flex-col w-full">
        <header className="flex flex-row justify-between w-full items-center">
          <h2 className="text-orange-500 font-medium text-2xl ml-2">{title}</h2>
          <section className="flex flex-col items-end">
            <h2 className="text-orange-500 font-bold text-md ml-2">Price</h2>
            <p className="text-white font-medium text-2xl">
              &euro;{price / 100}
            </p>
          </section>
        </header>

        <h2 className="text-white font-medium text-xl ml-2">
          Added date:{" "}
          <span className="text-orange-500">
            {new Date(added_date).toLocaleDateString()}
          </span>
        </h2>
        <div className="flex ">
          <button className="text-red-700 border-2 border-red-700 p-1 px-2 m-2 rounded">
            Remove
          </button>
        </div>
      </section>
    </article>
  );
}
