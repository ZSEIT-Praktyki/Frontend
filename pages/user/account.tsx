import UserLayout from "@utils/Layout/User";
import { H1 } from "@components/UI/Text";
import { Button } from "@components/index";
import Modal from "@components/Modal";
import { useState } from "react";
import { useGetAddressesQuery } from "@utils/services/addressService";
import AddAddress from "@modules/AddAddress";

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

      <UserLayout>
        <section className="flex flex-col">
          <H1>Account</H1>
          <Button onClick={() => setShow(true)}>Add new address</Button>
        </section>
      </UserLayout>
    </>
  );
}
