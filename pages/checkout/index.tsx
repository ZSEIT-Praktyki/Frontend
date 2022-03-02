import CheckoutForm from "@modules/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import Head from "next/head";
import { loadStripe } from "@stripe/stripe-js";
import { API } from "@utils/assets/constants/routes";
import Button from "@components/UI/Button/Button";
import Input from "@components/UI/Input/Input";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useState } from "react";
import { Callback } from "yup/lib/types";

const stripePromise = loadStripe(
  "pk_test_51KHt5OJFFDDymwGwp9gsCogqhxvzYvyo2wJsIAwSrPflIZjFZn2OtUhBbQAwt9SNek6Ol2e7QZUSh86NJyNByl2m00scfwXXjW"
);

export default function Checkout() {
  const addresses = [
    {
      address_id: 1,
      name: "Domino",
      surname: "Jachaś",
      street: "Siedziba Gwiezdnej Floty",
      street_number: "1",
      apartment_number: "",
      postal_code: "21370",
      city: "Kujwdupie",
      phone: "+48123456789",
    },
    {
      address_id: 2,
      name: "Domino",
      surname: "Jachaś",
      street: "Galakpizza",
      street_number: "13a",
      apartment_number: "2",
      postal_code: "07000",
      city: "Kujwdupie",
      phone: "+48123456789",
    },
    {
      address_id: 3,
      name: "Domino",
      surname: "Jachaś",
      street: "Siedziba Gwiezdnej Floty",
      street_number: "1",
      apartment_number: "",
      postal_code: "21370",
      city: "Kujwdupie",
      phone: "+48123456789",
    },
    {
      address_id: 4,
      name: "Domino",
      surname: "Jachaś",
      street: "Siedziba Gwiezdnej Floty",
      street_number: "1",
      apartment_number: "",
      postal_code: "21370",
      city: "Kujwdupie",
      phone: "+48123456789",
    },
    {
      address_id: 5,
      name: "Domino",
      surname: "Jachaś",
      street: "Siedziba Gwiezdnej Floty",
      street_number: "1",
      apartment_number: "",
      postal_code: "21370",
      city: "Kujwdupie",
      phone: "+48123456789",
    },
  ];
  const [selectedAddress, setSelectedAddress] = useState(
    addresses[0].address_id
  );

  return (
    <Elements stripe={stripePromise}>
      <main className="w-full flex flex-col items-center bg-gray-900">
        <Head>
          <title>Checkout</title>
        </Head>
        <section className="w-full flex flex-col xl:w-2/4 sm:w-3/4">
          <h1 className="text-white text-4xl w-full mt-5 pl-2 sm:pl-0">
            Your Order
          </h1>
          <section className="flex flex-col md:flex-row-reverse my-5">
            <section className="flex-1 md:flex-3 p-5 rounded-lg bg-gray-800">
              <ListingDetails />
              <hr className="mx-4 border-top border-gray-700" />
              <ShippingDetails
                addresses={addresses}
                selectedAddress={selectedAddress}
                handleClick={setSelectedAddress}
              />
              <hr className="m-4 border-top border-gray-700" />
              <CheckoutForm address={selectedAddress} />
            </section>
          </section>
        </section>
      </main>
    </Elements>
  );
}

function ListingDetails() {
  return (
    <>
      <h1 className="text-white text-2xl">
        Seller: <span className="font-semibold">Domino Jachaś</span>
      </h1>
      <section className="flex w-full items-center justify-between my-4">
        <section className="flex">
          <img
            src={
              "https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png"
            }
            alt="listing thumbnail"
            className="h-24 w-36 object-contain bg-gray-700 rounded"
          />
          <article className="ml-2">
            <h1 className="text-white font-normal text-xl sm:text-2xl">
              Lorem Ipsum
            </h1>
            <p className="text-white font-semibold text-xl sm:text-2xl">
              &euro;21.37
            </p>
          </article>
        </section>
        <section className="flex flex-col-reverse sm:flex-row">
          <Button
            variants="outlinedPrimary"
            classes="w-10 h-10 m-0"
            // onClick={() => count > 1 && setCount((prev: number) => prev - 1)}
          >
            -
          </Button>
          <Input
            classes="!w-10 h-10 m-0 my-1 sm:my-0 sm:mx-2 text-center"
            value={1}
          />
          <Button
            variants="outlinedPrimary"
            classes="w-10 h-10 m-0"
            // onClick={() => setCount((prev: number) => prev + 1)}
          >
            +
          </Button>
        </section>
      </section>
    </>
  );
}

interface ShippingDetailsProps {
  addresses: Array<{
    address_id: number;
    name: string;
    surname: string;
    street: string;
    street_number: string;
    apartment_number: string;
    postal_code: string;
    city: string;
    phone: string;
  }>;
  selectedAddress: number;
  handleClick: SetStateAction<number>;
}

function ShippingDetails({
  addresses,
  selectedAddress,
  handleClick,
}: ShippingDetailsProps) {
  return (
    <>
      <h1 className="text-white text-2xl mt-4 mb-3">Shipping Address</h1>
      <section className="w-full flex flex-wrap">
        {addresses.map((address) => (
          <article
            key={address.address_id}
            onClick={() => handleClick(address.address_id)}
            className={`${
              selectedAddress === address.address_id
                ? "border-purple-500"
                : "border-zinc-600"
            }
              mt-1 border-2 mr-1 p-3 transition hover:border-purple-500 rounded bg-gray-900 text-zinc-200 cursor-pointer`}
          >
            <p>
              {address.name} {address.surname}
            </p>
            <p>
              {address.street} {address.street_number}
              {address.apartment_number !== "" &&
                `/${address.apartment_number}`}
            </p>
            <p>
              {`
              ${address.postal_code.substring(
                0,
                2
              )}-${address.postal_code.substring(2, 5)}`}{" "}
              {address.city}
            </p>
            <p>{address.phone}</p>
          </article>
        ))}

        <section className="mt-1 border-2 p-3 border-zinc-600 transition hover:border-purple-500 rounded bg-gray-900 text-zinc-200 cursor-pointer">
          <article className="flex flex-col items-center justify-center w-full h-full">
            <IoIosAddCircleOutline className="text-4xl" />
            <p>Add new address</p>
          </article>
        </section>
      </section>
    </>
  );
}
