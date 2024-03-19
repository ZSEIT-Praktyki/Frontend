import ListingSettings from "@modules/ListingSettings";
import UserLayout from "@utils/Layout/User";
import { useGetActiveListingsQuery } from "@utils/services/accountService";
import { H1 } from "@components/UI/Text";
import EditModal from "@modules/EditModal";
import { useState } from "react";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";

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
      <Head>
        <title>Active listings</title>
      </Head>
      <EditModal
        vissible={modal.open}
        title="Edit Listing "
        onClose={onClose}
        listing_id={modal.listing_id}
      />

      <UserLayout>
        <section className="flex flex-col w-full relative md:p-5">
          <div className="mb-10 p-3">
            <H1>Active listings</H1>
          </div>

          <AnimatePresence>
            {data.map((arg, index) => (
              <ListingSettings
                onOpenModal={onModalOpen}
                key={arg.listing_id}
                index={index}
                remove
                {...arg}
              />
            ))}
          </AnimatePresence>
        </section>
      </UserLayout>
    </>
  );
}
