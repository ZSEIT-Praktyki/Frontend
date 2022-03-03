import { Formik } from "formik";
import addressSchema from "@utils/helpers/addressSchema";
import { Input, Button } from "@components/index";
import {
  useGetStatesQuery,
  usePostAddressMutation,
} from "@utils/services/addressService";
import Select from "@components/UI/Select";

interface AddAddressProps {
  onClose: () => void;
}

export default function AddAddress({ onClose }: AddAddressProps) {
  const [onSubmit] = usePostAddressMutation();
  const { data = [] } = useGetStatesQuery({});

  return (
    <Formik
      onSubmit={async (v) => {
        await onSubmit(v as any);
        onClose();
      }}
      validationSchema={addressSchema}
      initialValues={{
        name: "",
        surname: "",
        street: "",
        street_number: "",
        apartment_number: "",
        postal_code: "",
        city: "",
        phone: "",
        state: "",
      }}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        isValid,
        handleSubmit,
        dirty,
      }) => {
        return (
          <>
            <Input
              value={values.name}
              label={!!errors.name && touched.name ? errors.name : "Name"}
              placeholder="Name"
              error={!!errors.name && touched.name}
              onChange={handleChange("name")}
              onBlur={handleBlur("name")}
            />
            <Input
              value={values.surname}
              label={
                !!errors.surname && touched.surname ? errors.surname : "Surname"
              }
              placeholder="Surname"
              error={!!errors.surname && touched.surname}
              onChange={handleChange("surname")}
              onBlur={handleBlur("surname")}
            />
            <div className="flex flex-col sm:flex-row">
              <Input
                value={values.street}
                placeholder="Street"
                label={
                  !!errors.street && touched.street ? errors.street : "Street"
                }
                error={!!errors.street && touched.street}
                onChange={handleChange("street")}
                onBlur={handleBlur("street")}
              />
              <Input
                value={values.street_number}
                placeholder="Street number"
                label={
                  !!errors.street_number && touched.street_number
                    ? errors.street_number
                    : "Street number"
                }
                error={!!errors.street_number && touched.street_number}
                onChange={handleChange("street_number")}
                onBlur={handleBlur("street_number")}
              />
            </div>

            <Select
              label="States"
              value={values.state}
              onChange={handleChange("state")}
              options={data.map(({ state }) => ({ text: state, value: state }))}
            />
            <div className="flex flex-col sm:flex-col">
              <Input
                value={values.apartment_number}
                label={
                  !!errors.apartment_number && touched.apartment_number
                    ? errors.apartment_number
                    : "Apartment number"
                }
                placeholder="Apartment number"
                error={!!errors.apartment_number && touched.apartment_number}
                onChange={handleChange("apartment_number")}
                onBlur={handleBlur("apartment_number")}
              />
              <Input
                label={
                  !!errors.postal_code && touched.postal_code
                    ? errors.postal_code
                    : "Postal code"
                }
                value={values.postal_code}
                placeholder="Postal code"
                error={!!errors.postal_code && touched.postal_code}
                onChange={handleChange("postal_code")}
                onBlur={handleBlur("postal_code")}
              />
            </div>
            <Input
              label={!!errors.city && touched.city ? errors.city : "City"}
              value={values.city}
              placeholder="City"
              error={!!errors.city && touched.city}
              onChange={handleChange("city")}
              onBlur={handleBlur("city")}
            />
            <Input
              value={values.phone}
              label={!!errors.phone && touched.phone ? errors.phone : "Phone"}
              placeholder="+48 213742069"
              error={!!errors.phone && touched.phone}
              onChange={handleChange("phone")}
              onBlur={handleBlur("phone")}
            />
            <Button
              type="submit"
              variants="fire"
              classes="w-full sm:w-1/2 py-3"
              onClick={() => handleSubmit()}
              disabled={!(isValid && dirty)}
            >
              Create new address
            </Button>
          </>
        );
      }}
    </Formik>
  );
}
