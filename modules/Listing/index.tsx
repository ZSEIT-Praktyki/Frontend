import { Button } from "@components/index";
import { H2, H3, Paragraph } from "@components/UI/Text";
import { API } from "@utils/assets/constants/routes";
import { useAddWatchlistMutation } from "@utils/services/watchlistService";
import { useRouter } from "next/router";

interface ListingProps extends ListingMinified {
  horizontal?: boolean;
}

export default function Listing({
  title,
  price,
  listing_id,
  images,
  added_date,
  horizontal,
}: ListingProps) {
  const router = useRouter();
  const [Append, status] = useAddWatchlistMutation();

  if (!horizontal)
    return (
      <article className="bg-gray-800 overflow-hidden text-white flex flex-col justify-between rounded mb-2 relative h-96">
        <section className="h-1/2 w-full">
          <img
            style={{ maxHeight: 180 }}
            onClick={() => router.push("/listing/" + listing_id)}
            src={
              images
                ? `${API}/listings/images/${images.filename}`
                : "https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400005/99776312-fehler-404-seite-nicht-gefunden-fehler-mit-glitch-effekt-auf-dem-bildschirm-vektor-illustration-f%C3%BCr-.jpg"
            }
            alt="image"
            className="cursor-pointer rounded h-full object-cover w-full"
          />
        </section>

        <h2 className="font-medium p-2 text-xl">
          {title.length > 50 ? `${title.substring(0, 30)}...` : title}
        </h2>
        <div className="flex flex-row text-gray-400 p-2 font-medium justify-between text-md">
          <p>
            Olsztyn at <br />
            {new Date(added_date).toLocaleDateString()}
          </p>
          <p>&euro;{Number.parseFloat(`${price / 100}`).toFixed(2)}</p>
        </div>

        <div className="p-2">
          <Button
            variants={status.isSuccess ? "ok" : "fire"}
            classes=" w-full !py-3 !m-0 text-center"
            disabled={status.isSuccess || status.isError}
            onClick={() => Append(listing_id)}
          >
            {status.isSuccess ? "Added" : "Follow"}
          </Button>
        </div>
      </article>
    );
  return (
    <article className="w-full mb-4 flex bg-gray-800 rounded-md overflow-hidden">
      <section className="h-full flex-1">
        <img
          onClick={() => router.push("/listing/" + listing_id)}
          src={
            images
              ? `${API}/listings/images/${images.filename}`
              : "https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400005/99776312-fehler-404-seite-nicht-gefunden-fehler-mit-glitch-effekt-auf-dem-bildschirm-vektor-illustration-f%C3%BCr-.jpg"
          }
          alt={title}
          style={{ maxHeight: "20rem" }}
          className="cursor-pointer rounded h-full  object-cover w-full"
        />
      </section>
      <section className="flex-[3] p-2 flex flex-col">
        <section className="flex justify-between items-center">
          <H2>{title}</H2>
          <Button
            variants={status.isSuccess ? "ok" : "fire"}
            classes="w-full w-24 m-0 text-center"
            disabled={status.isSuccess || status.isError}
            onClick={() => Append(listing_id)}
          >
            {status.isSuccess ? "Added" : "Follow"}
          </Button>
        </section>
        <section className="mt-5 h-full mb-2 ">
          <Paragraph>
            Olsztyn at: {new Date(added_date).toLocaleDateString()}
          </Paragraph>
          <p className="text-gray-400">BUY NOW</p>

          <H3>&euro;{Number.parseFloat(`${price / 100}`).toFixed(2)}</H3>
        </section>
      </section>
    </article>
  );
}
