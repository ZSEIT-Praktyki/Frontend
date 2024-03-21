import { Button } from "@components/index";
import { P24BankElement } from "@stripe/react-stripe-js";
import useCheckout from "@utils/hooks/useCheckout";
import { CgSpinner } from "react-icons/cg";
import { useState } from "react";
import SelectAddress from "@modules/CheckoutForm/components/SelectAddress";
import ProductPreview from "./components/ProductPreview";
import { H4 } from "@components/UI/Text";
import clsx from "clsx";

export default function CheckoutForm() {
  const [address, setAddress] = useState(0);
  const { onSubmit, stripe, loading, elements } = useCheckout(address);

  return (
    <div className="rounded-lg flex flex-col p-4 py-5 bg-zinc-900 w-full xl:w-3/5 text-white">
      <ProductPreview />

      <SelectAddress address={address} setAddress={setAddress} />

      <section className="mt-2">
        <H4>Select payment method</H4>

        <P24BankElement
          className="bg-zinc-950 mt-2 rounded-lg border-2 border-zinc-800 py-1 mb-0"
          options={{
            style: {
              base: {
                color: "#fff",
                fontSize: "16px",
                iconColor: "#fff",
                padding: "13px 13px",
                backgroundColor: "#09090b",
                "::placeholder": {
                  color: "#fff",
                },
              },
              invalid: {
                color: "#fff",
              },
            },
          }}
        />

        <div className="p-2">
          <a
            href="https://www.przelewy24.pl/en/regulations"
            target={"_blank"}
            className=" text-zinc-400 text-xs font-medium underline"
          >
            I declare that I have familiarized myself with the regulations and
            information obligation of the Przelewy24 service.
          </a>
        </div>

        <Button
          disabled={!address || !stripe || !elements || loading}
          onClick={onSubmit}
          variants={"fire"}
          classes={clsx("border-0 !m-0 !mt-3 !py-3 w-full", {
            "!opacity-50": !stripe && !!address,
          })}
          type="submit"
        >
          {loading && <CgSpinner size={28} className="animate-spin mr-2" />}
          Continue to payment
        </Button>
      </section>
    </div>
  );
}
