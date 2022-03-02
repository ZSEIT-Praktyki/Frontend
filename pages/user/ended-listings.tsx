import UserLayout from "@utils/Layout/User";
import { useGetNotActiveListingsQuery } from "@utils/services/accountService";
import ListingSettings from "@modules/ListingSettings";
import { H1 } from "@components/UI/Text";
import { useState } from "react";
import EditModal from "@modules/EditModal";

export default function EndedListings() {
  const { data = [] } = useGetNotActiveListingsQuery({});

  const [modal, setModal] = useState({ listing_id: -1, open: false });

  function onModalOpen(id: number) {
    setModal({ listing_id: id, open: true });
  }
  function onClose() {
    setModal({ listing_id: -1, open: false });
  }

  return (
    <>
      <EditModal
        vissible={modal.open}
        title="Edit your listing"
        onClose={onClose}
        listing_id={modal.listing_id}
      />

      <UserLayout>
        <section className="flex flex-col w-full">
          <div className="ml-4">
            <H1>Ended listings</H1>
          </div>

          {data.map((arg) => (
            <ListingSettings
              onOpenModal={onModalOpen}
              key={arg.listing_id}
              activate
              {...arg}
            />
          ))}
        </section>
      </UserLayout>
    </>
  );
}
