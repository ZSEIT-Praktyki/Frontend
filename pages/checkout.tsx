import { Button, Input } from "@components/index";
import { P24BankElement } from "@stripe/react-stripe-js";
import useCheckout from "@utils/hooks/useCheckout";
import Head from "next/head";

export default function Checkout() {
  const { onSubmit, stripe } = useCheckout();

  return (
    <main className="w-full flex items-center bg-gray-900 h-full">
      <Head>
        <title>Checkout</title>
      </Head>
      <article className="w-1/2 h-screen">
        <p>left</p>
      </article>
      <article className="w-1/2 h-screen flex  p-5  bg-gray-800">
        <form
          className="p-2 rounded flex flex-col xl:w-2/4"
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
            Surname
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
      </article>
    </main>
  );
}
