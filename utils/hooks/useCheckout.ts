import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import { axiosbase } from "@utils/helpers/axiosbase";
import { P24BankElement } from "@stripe/react-stripe-js";
import { useRouter } from "next/router";
import { useSelector } from "@utils/store/store";

interface Props {
  name: string;
  surname: string;
  address: string;
}

export default function useCheckout() {
  const stripe = useStripe();
  const elements = useElements();
  const { email, user_id, details } = useSelector((state) => state.user);
  const [secret, setSecret] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (!router.query.id) router.back();

    (async () => {
      try {
        const { data } = await axiosbase.post("/orders/create-intent", {
          listing_id: router.query.id,
        });

        setSecret(data.paymentIntent.client_secret);
      } catch (error) {}
    })();
  }, []);

  async function onSubmit(props: Props) {
    if (!stripe || !elements) {
      return;
    }

    const p24Bank = elements.getElement(P24BankElement);

    const { error } = await stripe.confirmP24Payment(secret, {
      receipt_email: email,

      payment_method: {
        //@ts-ignore
        p24: p24Bank,

        metadata: {
          user_id: user_id,
          description: "Purchased product: " + router.query.id,
          listing_id: router.query.id as string,
        },
        billing_details: {
          name: props.name,
          address: {
            city: "",
          },
          phone: details.phone,
          email: email,
        },
      },
      payment_method_options: {
        p24: {
          tos_shown_and_accepted: true,
        },
      },
      return_url: "http://localhost:3000/checkout/success",
    });

    if (error) {
      console.log(error.message);
    }
  }

  return { onSubmit, stripe, elements };
}
