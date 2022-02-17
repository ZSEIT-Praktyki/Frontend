import { Button } from "@components/index";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Listing({
  title,
  price,
  added_date,
  listing_id,
  condition,
}: ListingProps) {
  const router = useRouter();
  return (
    <section className="bg-gray-800 text-white flex flex-col justify-between rounded mb-5">
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

      <h2 className="font-medium p-2 text-xl">{title}</h2>
      <div className="flex flex-row text-gray-400 p-2 font-medium justify-between text-md">
        <p> {new Date(added_date).toLocaleDateString()}</p>
        <p>&euro;{price / 100}</p>
      </div>
      <div className="p-2 text-gray-400">
        <p>Olsztyn</p>
      </div>
      <div className="p-2">
        <Button variants="fire" classes="border-0 !w-full py-3 !m-0">
          Follow
        </Button>
      </div>
    </section>
  );
}
