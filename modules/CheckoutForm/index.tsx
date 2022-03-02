import checkoutSchema from "@utils/helpers/checkoutSchema";
import { useSelector } from "@utils/store/store";
import { P24BankElement } from "@stripe/react-stripe-js";
import { Stripe } from "@stripe/stripe-js";
import useCheckout from "@utils/hooks/useCheckout";
import Button from "@components/UI/Button/Button";

interface CheckoutFormProps {
  orderDetails: { name: string; surname: string; address: number };
}

export default function CheckoutForm({ orderDetails }: CheckoutFormProps) {
  const { details } = useSelector((state) => state.user);
  const { onSubmit, stripe } = useCheckout();

  return (
    <section className="flex flex-col items-center w-full">
      <h1 className="text-white text-2xl mb-4 w-full">Payment Method</h1>
      <div className="flex flex-col w-full text-white">
        <P24BankElement
          className="bg-gray-900 rounded border-2 border-zinc-600 py-1"
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
        <a
          href="https://www.przelewy24.pl/en/regulations"
          target={"_blank"}
          rel="noopener noreferrer"
          className="text-center pl-2 text-gray-400 text-xs mt-1 font-medium"
        >
          I declare that I have familiarized myself with the regulations and
          information obligation of the Przelewy24 service.
        </a>
      </div>
      <Button
        classes="w-96 m-0 mt-5"
        onClick={() =>
          onSubmit({
            name: orderDetails.name,
            surname: orderDetails.surname,
            address: orderDetails.address,
          })
        }
      >
        Confirm Order & Pay
      </Button>
    </section>
  );
}
