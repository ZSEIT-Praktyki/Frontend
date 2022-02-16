import AddWatchlist from "@modules/AddWatchlist";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Listing({
  title,
  price,
  added_date,
  listing_id,
}: ListingProps) {
  const router = useRouter();
  return (
    <section className="bg-gray-800 text-white flex flex-col justify-between rounded">
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

      <h2 className="font-bold p-2 text-xl">{title}</h2>

      <p className="p-2 font-medium">
        {new Date(added_date).toLocaleDateString()}
      </p>

      <div className="flex flex-row justify-between m-2">
        <p className=" font-medium text-xl">&euro;{price / 100}</p>

        <AddWatchlist listing_id={listing_id} />
      </div>
    </section>
  );
}
