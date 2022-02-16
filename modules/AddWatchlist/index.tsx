import { AiOutlineHeart } from "react-icons/ai";

interface AddWatchlistProps {
  listing_id: number;
}

export default function AddWatchlist({ listing_id }: AddWatchlistProps) {
  return (
    <button>
      <AiOutlineHeart color="white" size={25} />
    </button>
  );
}
