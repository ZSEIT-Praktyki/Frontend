import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import { axiosbase } from "@utils/helpers/axiosbase";
import { P24BankElement } from "@stripe/react-stripe-js";
import { useRouter } from "next/router";
import { useSelector } from "@utils/store/store";

export default function useCheckout(address_id: number) {
  const stripe = useStripe();
  const elements = useElements();
  const { email, user_id, details } = useSelector((state) => state.user);
  const [secret, setSecret] = useState("");
  const [orderId, setOrderId] = useState(0);

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (address_id) {
      (async () => {
        try {
          const { data } = await axiosbase.post("/orders/create-intent", {
            listing_id: router.query.id,
            address_id,
          });

          setOrderId(data.orderId);
          setSecret(data.paymentIntent);
        } catch (error) {
          alert("We encountered an error, please try again later.");
          router.back();
        }
      })();
    }
  }, [address_id]);

  async function onSubmit() {
    if (!stripe || !elements) {
      return;
    }

    const p24Bank = elements.getElement(P24BankElement);

    setLoading(true);
    try {
      const { error } = await stripe.confirmP24Payment(secret, {
        receipt_email: email,

        payment_method: {
          //@ts-ignore
          p24: p24Bank,

          metadata: {
            orderId,
          },
          billing_details: {
            address: {
              city: "",
            },
            phone: details.phone,
            email: "email@gmail.com",
          },
        },
        payment_method_options: {
          p24: {
            tos_shown_and_accepted: true,
          },
        },

        return_url:
          window.location.origin + "/checkout/success" + "?orderId=" + orderId,
      });
      if (error) {
        console.error(error);
      }
    } catch (error) {
      setLoading(false);
    }
  }

  return { onSubmit, stripe, elements, loading };
}
