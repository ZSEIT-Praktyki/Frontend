import CheckoutForm from "@modules/CheckoutForm";
import useCheckout from "@utils/hooks/useCheckout";
import Head from "next/head";
import Image from "next/image";

export default function Checkout() {
  const { onSubmit, stripe } = useCheckout();

  return (
    <main className="w-full flex items-center bg-gray-900 h-full">
      <Head>
        <title>Checkout</title>
      </Head>
      <article className="w-1/2 h-screen relative hidden sm:block">
        <Image src={"/card.svg"} layout="fill" priority={true} />
      </article>
      <article className="w-full sm:w-1/2 h-screen flex items-center p-5 bg-gray-800">
        <CheckoutForm onSubmit={onSubmit} stripe={stripe} />
      </article>
    </main>
  );
}
