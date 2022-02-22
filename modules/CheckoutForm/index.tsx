import { Input, Button } from "@components/index";
import { Formik } from "formik";
import checkoutSchema from "@utils/helpers/checkoutSchema";
import { useSelector } from "@utils/store/store";
import { P24BankElement } from "@stripe/react-stripe-js";
import { Stripe } from "@stripe/stripe-js";

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
        }) => (
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
              containerStyle="mb-2"
              onChange={handleChange("address")}
              onBlur={handleBlur("address")}
              classes="bg-gray-900 mb-5 mt-0 mb-0"
              label="Address"
              placeholder="Address"
              error={!!errors.address}
              errorText={errors.address}
            />

            <P24BankElement
              className="mt-2 "
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
            <Button
              disabled={!(stripe && isValid && dirty)}
              onClick={() => handleSubmit()}
              variants="fire"
              classes="border-0 py-3"
              type="submit"
            >
              Submit Payment
            </Button>
          </>
        )}
      </Formik>
    </div>
  );
}
