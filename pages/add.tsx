import { useSelector } from "@utils/store/store";
import useUploadListing from "@utils/hooks/useUploadListing";
import AddForm from "@modules/AddForm";

export default function AddListing() {
  const { isLoggedIn } = useSelector((state) => state.user);

  const { onSubmit } = useUploadListing();

  if (!isLoggedIn)
    return (
      <main className="flex h-full justify-center p-2">
        <h1 className="text-9xl text-white text-center">Sign in first</h1>
      </main>
    );

  return (
    <main className="flex h-full justify-center p-2">
      <AddForm onSubmit={onSubmit} />
    </main>
  );
}
