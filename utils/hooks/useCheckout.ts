import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import { axiosbase } from "@utils/helpers/axiosbase";
import { P24BankElement } from "@stripe/react-stripe-js";

export default function useCheckout() {
  const stripe = useStripe();
  const elements = useElements();

  const [secret, setSecret] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axiosbase.post("/orders/create-intent", {
          listing_id: 1,
        });

        setSecret(data.paymentIntent.client_secret);
      } catch (error) {}
    })();
  }, []);

  async function onSubmit(event: any) {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const p24Bank = elements.getElement(P24BankElement);

    const { error } = await stripe.confirmP24Payment(secret, {
      payment_method: {
        //@ts-ignore
        p24: p24Bank,
        billing_details: {
          name: "DMQ",
          email: "kozakdamian73@gmail.com",
        },
      },
      payment_method_options: {
        p24: {
          tos_shown_and_accepted: true,
        },
      },
      return_url: "https://example.com/checkout/complete",
    });

    if (error) {
      console.log(error.message);
    }
  }

  return { onSubmit, stripe, elements };
}
