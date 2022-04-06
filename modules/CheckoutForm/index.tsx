import { Button } from "@components/index";
import { P24BankElement } from "@stripe/react-stripe-js";
import useCheckout from "@utils/hooks/useCheckout";
import { CgSpinner } from "react-icons/cg";
import { useState } from "react";
import SelectAddress from "@modules/CheckoutForm/components/SelectAddress";
import ProductPreview from "./components/ProductPreview";
import { H2 } from "@components/UI/Text";

export default function CheckoutForm() {
  const [address, setAddress] = useState(0);
  const { onSubmit, stripe, loading } = useCheckout(address);

  return (
    <div className="rounded flex flex-col p-4 py-5 bg-gray-800 w-full xl:w-3/5 text-white">
      <ProductPreview />

      <SelectAddress address={address} setAddress={setAddress} />

      <section className="mt-2 mb-2">
        <H2>Payment method</H2>

        <P24BankElement
          className="bg-gray-900  mt-2 rounded border-2 border-zinc-600 py-1 mb-0"
          options={{
            style: {
              base: {
                color: "black",
                fontWeight: 500,
                fontSize: "16px",
                padding: "10px 20px",
                "::placeholder": {
                  color: "red",
                },
              },
            },
          }}
        />

        <div className="p-2 text-center">
          <a
            href="https://www.przelewy24.pl/en/regulations"
            target={"_blank"}
            className=" pl-2 text-gray-400 text-xs mt-1 font-medium"
          >
            I declare that I have familiarized myself with the regulations and
            information obligation of the Przelewy24 service.
          </a>
        </div>

        <Button
          disabled={!stripe && !!address}
          onClick={onSubmit}
          variants={"fire"}
          classes="border-0 !m-0 !mt-3 !py-3 w-full"
          type="submit"
        >
          {loading && <CgSpinner size={30} className="animate-spin mr-2" />}
          Submit Payment
        </Button>
      </section>
    </div>
  );
}
