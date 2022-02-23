import { Input, Button } from "@components/index";
import { Formik } from "formik";
import checkoutSchema from "@utils/helpers/checkoutSchema";
import { useSelector } from "@utils/store/store";
import { P24BankElement } from "@stripe/react-stripe-js";
import { Stripe } from "@stripe/stripe-js";
import Label from "@components/UI/Label";

interface CheckoutFormProps {
  onSubmit: (arg: any) => Promise<void>;
  stripe: Stripe | null;
}

export default function CheckoutForm({ onSubmit, stripe }: CheckoutFormProps) {
  const { details } = useSelector((state) => state.user);

  return (
    <div className="p-2 rounded flex flex-col w-full xl:w-2/4 text-white">
      <Formik
        onSubmit={onSubmit}
        validationSchema={checkoutSchema}
        initialValues={{
          name: details.name ?? "",
          surname: details.surname ?? "",
          address: details.address ?? "",
        }}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          errors,
          isValid,
          dirty,
          isSubmitting,
        }) => {
          return (
            <>
              <h1 className="text-white text-center text-4xl font-bold mb-5 ">
                Payment
              </h1>

              <Input
                containerStyle="mb-2"
                onChange={handleChange("name")}
                onBlur={handleBlur("name")}
                classes="bg-gray-900 mt-0 mb-0"
                label="Name"
                placeholder="Name"
                error={!!errors.name}
                errorText={errors.name}
              />

              <Input
                containerStyle="mb-2"
                onChange={handleChange("surname")}
                onBlur={handleBlur("surname")}
                classes="bg-gray-900 mt-0 mb-0"
                label="Surname"
                placeholder="Surname"
                error={!!errors.surname}
                errorText={errors.surname}
              />
              <Input
                containerStyle="mb-3"
                onChange={handleChange("address")}
                onBlur={handleBlur("address")}
                classes="bg-gray-900 mb-0 mt-0"
                label="Address"
                placeholder="Address"
                error={!!errors.address}
                errorText={errors.address}
              />

              <Label text="Select payment method" />
              <P24BankElement
                className="bg-gray-900 m-2 mt-0 rounded border-2 border-zinc-600 py-1 mb-0"
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
                className="text-center pl-2 text-gray-400 text-xs mt-1 font-medium"
              >
                I declare that I have familiarized myself with the regulations
                and information obligation of the Przelewy24 service.
              </a>
              <Button
                disabled={!(stripe && isValid && dirty) || isSubmitting}
                onClick={() => handleSubmit()}
                variants="fire"
                classes="border-0 py-3 mt-5"
                type="submit"
              >
                Submit Payment
              </Button>
            </>
          );
        }}
      </Formik>
    </div>
  );
}
