import UserLayout from "@utils/Layout/User";
import Modal from "@components/Modal";
import { useState } from "react";
import { useGetAddressesQuery } from "@utils/services/addressService";
import AddAddress from "@modules/AddAddress";
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
                ({
                  name,
                  address_id,
                  surname,
                  city,
                  phone,
                  street,
                  street_number,
                }) => (
                  <li
                    key={address_id}
                    className="grid grid-rows-2 grid-cols-2 sm:grid-rows-1 sm:grid-cols-5 gap-1 text-white font-medium mb-5 bg-gray-900 p-2 rounded"
                  >
                    <section className="flex flex-col">
                      <h2 className="text-xl mb-2">Name</h2>
                      <p className="text-gray-300">{name}</p>
                    </section>
                    <section className="flex flex-col">
                      <h2 className="text-xl mb-2">Surname</h2>
                      <p className="text-gray-300">{surname}</p>
                    </section>
                    <section className="flex flex-col">
                      <h2 className="text-xl mb-2">City</h2>
                      <p className="text-gray-300">{city}</p>
                    </section>
                    <section className="flex flex-col">
                      <h2 className="text-xl mb-2">Phone</h2>
                      <p className="text-gray-300">{phone}</p>
                    </section>

                    <section className="flex flex-col">
                      <h2 className="text-xl mb-2">Street</h2>
                      <p className="text-gray-300">
                        {street} {street_number}
                      </p>
                    </section>
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
