import { axiosbase } from "@utils/helpers/axiosbase";
import { useState } from "react";

export default function useAddWatchlist() {
  const [status, setStatus] = useState<"Failed" | "OK" | "">("");

  async function Append(listing_id: number) {
    try {
      await axiosbase.post("/watchlist", { listing_id });
      setStatus("OK");
    } catch (error) {
      setStatus("Failed");
    }
  }

  async function Remove(listing_id: number) {
    try {
      await axiosbase.post(`/watchlist/${listing_id}`);
      setStatus("OK");
    } catch (error) {
      setStatus("Failed");
    }
  }

  return { Append, Remove, status };
}
