import UserLayout from "@utils/Layout/User";
import { useGetNotActiveListingsQuery } from "@utils/services/accountService";
import ListingSettings from "@modules/ListingSettings";
import { H1 } from "@components/UI/Text";
import { useState } from "react";
import EditModal from "@modules/EditModal";
import Head from "next/head";

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
      <Head>
        <title>Ended listings</title>
      </Head>
      <EditModal
        vissible={modal.open}
        title="Edit your listing"
        onClose={onClose}
        listing_id={modal.listing_id}
      />

      <UserLayout>
        <section className="flex flex-col w-full md:p-5">
          <div className="mb-10 p-3">
            <H1>Out of stock products</H1>
          </div>

          {data.map((arg, index) => (
            <ListingSettings
              onOpenModal={onModalOpen}
              key={arg.listing_id}
              activate
              index={index}
              {...arg}
            />
          ))}
        </section>
      </UserLayout>
    </>
  );
}
