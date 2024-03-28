import { useSelector } from "@utils/store/store";
import useUploadListing from "@utils/hooks/useUploadListing";
import AddForm from "@modules/AddForm";
import Head from "next/head";
import NotAuthenticated from "@modules/NotAuthenticated";

export default function AddListing() {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { onSubmit } = useUploadListing();

  if (!isLoggedIn)
    return (
      <main className="w-full sm:w-10/12 mx-auto min-h-[calc(100vh-100px)] flex justify-center p-5">
        <Head>
          <title>Please log in to see this page</title>
        </Head>
        <NotAuthenticated />
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
