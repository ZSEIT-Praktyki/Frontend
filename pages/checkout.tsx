import { Button, Input } from "@components/index";
import { P24BankElement } from "@stripe/react-stripe-js";
import useCheckout from "@utils/hooks/useCheckout";
import Head from "next/head";

export default function Checkout() {
  const { onSubmit, stripe } = useCheckout();

  return (
    <main className="w-full flex flex-col items-center bg-gray-900 p-2">
      <Head>
        <title>Checkout</title>
      </Head>
      <form
        className="w-4/5 sm:w-1/2 bg-gray-800 mt-5 p-2 rounded flex flex-col xl:w-1/4 pb-5"
        onSubmit={onSubmit}
      >
        <h1 className="text-white text-center text-4xl font-bold mb-5 pb-5">
          Stripe
        </h1>

        <label htmlFor="" className="text-white ml-3">
          Name
        </label>
        <Input classes="bg-gray-900" />
        <label htmlFor="" className="text-white ml-3">
          Name
        </label>
        <Input classes="bg-gray-900 mb-5" />

        <P24BankElement
          options={{
            style: {
              base: {
                padding: "10px 12px",
                color: "#000",
                fontSize: "16px",
                "::placeholder": {
                  color: "#000",
                },
              },
            },
          }}
        />
        <Button disabled={!stripe}>Submit Payment</Button>
      </form>
    </main>
  );
}
