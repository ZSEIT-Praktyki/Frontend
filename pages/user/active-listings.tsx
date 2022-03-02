import ListingSettings from "@modules/ListingSettings";
import UserLayout from "@utils/Layout/User";
import { useGetActiveListingsQuery } from "@utils/services/accountService";
import { H1 } from "@components/UI/Text";
import EditModal from "@modules/EditModal";
import { useState } from "react";

export default function ActiveListings() {
  const { data = [] } = useGetActiveListingsQuery({});

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
            <H1>Active listings</H1>
          </div>

          {data.map((arg) => (
            <ListingSettings
              onOpenModal={onModalOpen}
              key={arg.listing_id}
              remove
              {...arg}
            />
          ))}
        </section>
      </UserLayout>
    </>
  );
}
