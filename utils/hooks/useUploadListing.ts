import { axiosbase } from "@utils/helpers/axiosbase";

interface ListingProps {
  title: string;
  description: string;
  quantity: number;
  subcategory_id: number;
  price: number;
  condition: string;
}

export default function useUploadListing() {
  async function onSubmit(listing: ListingProps) {
    try {
      const { data } = await axiosbase.post("/listings/managment", {
        ...listing,
        price: +listing.price * 100,
        subcategory_id: +listing.subcategory_id,
      });
      console.log(data);
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

      console.log(data);
    } catch (error: any) {
      console.warn(error.response.data);
    }
  }

  return { onSubmit, onUploadImages };
}
