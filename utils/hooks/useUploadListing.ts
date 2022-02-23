import { axiosbase } from "@utils/helpers/axiosbase";
import { useRouter } from "next/router";

interface ListingProps {
  title: string;
  description: string;
  quantity: number;
  subcategory_id: number;
  price: number;
  condition: string;
  files: File[];
}

export default function useUploadListing() {
  const router = useRouter();

  async function onSubmit(listing: ListingProps) {
    try {
      const { data } = await axiosbase.post("/listings/managment", {
        ...listing,
        price: +listing.price * 100,
        subcategory_id: +listing.subcategory_id,
      });

      await onUploadImages(listing.files, data.listing_id);

      router.push("/listing/" + data.listing_id);
    } catch (error: any) {
      console.warn(error.response.data);
    }
  }

  async function onUploadImages(images: File[], listing_id: number) {
    try {
      const form = new FormData();

      images.forEach((img) => {
        form.append("image", img);
      });

      const { data } = await axiosbase.post(
        `/listings/images/${listing_id}`,
        form
      );

      return data;
    } catch (error: any) {
      console.warn(error.response.data);
    }
  }

  return { onSubmit, onUploadImages };
}
