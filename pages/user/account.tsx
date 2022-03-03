import UserLayout from "@utils/Layout/User";

import Modal from "@components/Modal";
import { useState } from "react";
import { useGetAddressesQuery } from "@utils/services/addressService";
import AddAddress from "@modules/AddAddress";
import Image from "next/image";
import { IoMdAdd } from "react-icons/io";
import Head from "next/head";

export default function Account() {
  const [show, setShow] = useState(false);

  const { data = [] } = useGetAddressesQuery({});

  return (
    <>
      <Modal
        title="Create new address"
        onClose={() => setShow(false)}
        vissible={show}
      >
        <AddAddress onClose={() => setShow(false)} />
      </Modal>

      <button
        onClick={() => setShow(true)}
        className="fixed bottom-10 right-10 bg-purple-700 p-2 h-14 w-14 flex justify-center items-center rounded-full shadow-xl"
      >
        <IoMdAdd color="white" size={30} />
      </button>

      <UserLayout>
        <Head>
          <title>Account Settings</title>
        </Head>
        <section className="flex flex-col w-full h-full">
          <article className=" w-full">
            <ul className="w-full p-2">
              <h2 className="text-white font-bold my-5 text-5xl">
                Available addresses
              </h2>
              {data.map(
                ({ name, address_id, surname, city, phone, state, street }) => (
                  <li
                    key={address_id}
                    className=" bg-gray-900 p-3 rounded-2xl w-full flex flex-row mb-3"
                  >
                    <div className="relative h-24 w-24">
                      <Image
                        src="/default-user-image.png"
                        layout="fill"
                        className="rounded-full"
                      />
                    </div>
                    <div className="ml-5 flex flex-col">
                      <h2 className="text-gray-300 font-medium text-2xl">
                        {name} {surname}
                      </h2>
                      <h2 className="text-gray-300 font-medium text-2xl">
                        {city} {phone}
                      </h2>
                      <h2 className="text-gray-300 font-medium text-2xl">
                        {state} {street}
                      </h2>
                    </div>
                  </li>
                )
              )}
            </ul>
          </article>
        </section>
      </UserLayout>
    </>
  );
}
