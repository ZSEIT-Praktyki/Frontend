import { useSelector } from "@utils/store/store";
import useUploadListing from "@utils/hooks/useUploadListing";
import AddForm from "@modules/AddForm";
import Head from "next/head";

export default function AddListing() {
  const { isLoggedIn } = useSelector((state) => state.user);

  const { onSubmit } = useUploadListing();

  if (!isLoggedIn)
    return (
      <main className="flex h-full justify-center p-2">
        <Head>
          <title>Post a listing</title>
        </Head>
        <h1 className="text-9xl text-white text-center">Sign in first</h1>
      </main>
    );

  return (
    <main className="w-full h-full flex justify-center">
      <Head>
        <title>Post a listing</title>
      </Head>
      <AddForm onSubmit={onSubmit} />
    </main>
  );
}
