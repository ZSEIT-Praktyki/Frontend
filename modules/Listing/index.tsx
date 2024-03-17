import { Button } from "@components/index";
import { H2, H3, H4, Paragraph } from "@components/UI/Text";
import { API } from "@utils/assets/constants/routes";
import { useAddWatchlistMutation } from "@utils/services/watchlistService";
import Image from "next/image";
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

  const message = status.isError
    ? (status as any).error.status === 403
      ? "Sign in first"
      : "Already following"
    : "Follow";

  // make it button for accesibility

  if (!horizontal)
    return (
      <article className="bg-zinc-900 overflow-hidden text-white flex flex-col justify-between rounded-lg p-3 pb-3 mb-2 relative hover:bg-zinc-800">
        <section className="h-1/2 w-full">
          <button
            onClick={() =>
              router.push({
                pathname: "/listing/" + listing_id,
                query: { name: title },
              })
            }
          >
            <Image
              width={300}
              height={200}
              priority
              src={
                images
                  ? `${API}/listings/images/${images.filename}`
                  : "https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400005/99776312-fehler-404-seite-nicht-gefunden-fehler-mit-glitch-effekt-auf-dem-bildschirm-vektor-illustration-f%C3%BCr-.jpg"
              }
              alt="image"
              className="rounded h-full object-cover w-full max-h-64"
            />
          </button>
        </section>

        <div className="flex-1 flex flex-col mt-2">
          <h2 className="font-semibold p-2 text-xl">
            {title.length > 30 ? `${title.substring(0, 30)}...` : title}
          </h2>
          <div className="flex flex-row text-zinc-500 p-2 font-medium justify-between text-md">
            <p>
              Olsztyn at <br />
              {new Date(added_date).toLocaleDateString()}
            </p>
            <p>&euro;{Number.parseFloat(`${price / 100}`).toFixed(2)}</p>
          </div>
        </div>

        <Button
          variants={status.isSuccess ? "ok" : "fire"}
          classes=" w-full !py-3 !m-0 text-center"
          disabled={status.isSuccess || status.isError}
          onClick={() => Append(listing_id)}
        >
          {status.isSuccess ? "Added" : message}
        </Button>
      </article>
    );
  return (
    <article className="w-full mb-4 flex bg-zinc-900 rounded-lg overflow-hidden h-56 p-3 hover:bg-zinc-800">
      <section className="flex-1">
        <button
          onClick={() =>
            router.push({
              pathname: "/listing/" + listing_id,
              query: { name: title },
            })
          }
        >
          <Image
            priority
            width={300}
            height={200}
            onClick={() =>
              router.push({
                pathname: "/listing/" + listing_id,
                query: { name: title },
              })
            }
            src={
              images
                ? `${API}/listings/images/${images.filename}`
                : "https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400005/99776312-fehler-404-seite-nicht-gefunden-fehler-mit-glitch-effekt-auf-dem-bildschirm-vektor-illustration-f%C3%BCr-.jpg"
            }
            alt={title}
            className="cursor-pointer rounded-md h-full object-cover w-full max-h-64"
          />
        </button>
      </section>
      <section className="flex-[3] p-2 flex flex-col">
        <H2>{title}</H2>

        <p className="text-zinc-400">
          Olsztyn at: {new Date(added_date).toLocaleDateString()}
        </p>

        <H4>&euro;{Number.parseFloat(`${price / 100}`).toFixed(2)}</H4>

        <div className="w-full flex justify-end flex-1 items-end p-2">
          <Button
            variants={status.isSuccess ? "ok" : "fire"}
            classes="w-full w-24 m-0 text-center max-w-[12rem] p-4"
            disabled={status.isSuccess || status.isError}
            onClick={() => Append(listing_id)}
          >
            {status.isSuccess ? "Added" : message}
          </Button>
        </div>
      </section>
    </article>
  );
}
