import CheckoutForm from "@modules/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import Head from "next/head";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";

const stripePromise = loadStripe(
  "pk_test_51KHt5OJFFDDymwGwp9gsCogqhxvzYvyo2wJsIAwSrPflIZjFZn2OtUhBbQAwt9SNek6Ol2e7QZUSh86NJyNByl2m00scfwXXjW"
);

export default function Checkout() {
  return (
    <Elements stripe={stripePromise}>
      <main className="w-full flex items-center bg-gray-900 h-full">
        <Head>
          <title>Checkout</title>
        </Head>
        <article className="w-1/2 h-screen relative hidden sm:block">
          <Image src={"/card.svg"} layout="fill" priority={true} alt="" />
        </article>
        <article className="w-full sm:w-1/2 h-screen flex items-center p-5 bg-gray-800">
          <CheckoutForm />
        </article>
      </main>
    </Elements>
  );
}
