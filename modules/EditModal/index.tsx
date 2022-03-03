import { Input, Button } from "@components/index";
import Modal from "@components/Modal";
import Label from "@components/UI/Label";
import editSchema from "@utils/helpers/editSchema";
import {
  useGetSingleListingQuery,
  useUpdateSingleListingMutation,
} from "@utils/services/accountService";
import { Formik } from "formik";

interface EditModalProps {
  onClose: () => void;
  clickAway?: boolean;
  title?: string;
  vissible: boolean;
  listing_id: number;
}

export default function EditModal({
  listing_id,
  onClose,
  ...rest
}: EditModalProps) {
  const { data = {} as ListingProps } = useGetSingleListingQuery(listing_id);
  const [onUpdate] = useUpdateSingleListingMutation();

  return (
    <Modal onClose={onClose} {...rest}>
      <Formik
        validationSchema={editSchema}
        enableReinitialize
        onSubmit={async (v) => {
          await onUpdate({ ...v, listing_id });

          onClose();
        }}
        initialValues={{
          title: data?.title || "",
          description: data?.description || "",
          price: data?.price / 100 || 0,
          quantity: data?.quantity || 0,
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          touched,
          errors,
        }) => {
          console.log(errors);
          return (
            <>
              <Input
                label="Title"
                value={values.title}
                placeholder="Title"
                error={!!errors.title && touched.title}
                onChange={handleChange("title")}
                onBlur={handleBlur("title")}
              />
              <div className="pr-4">
                <Label
                  text="Description"
                  error={!!errors.description && touched.description}
                />
                <textarea
                  onChange={handleChange("description")}
                  onBlur={handleBlur("description")}
                  rows={8}
                  value={values.description}
                  placeholder="description"
                  className="bg-gray-900 w-full text-white resize-none m-2 mt-0 p-2 rounded border-2 border-zinc-600"
                />
              </div>
              <Input
                label="Price"
                placeholder="Price"
                onChange={handleChange("price")}
                onBlur={handleBlur("price")}
                value={values.price}
                error={!!errors.price && touched.price}
              />
              <Input
                value={values.quantity}
                label="Quantity"
                placeholder="Quantity"
                onChange={handleChange("quantity")}
                onBlur={handleBlur("quantity")}
                error={!!errors.quantity && touched.quantity}
              />
              <section className="flex justify-center">
                <Button
                  onClick={onClose}
                  classes="mr-2 border-2 border-red-700 text-red-700 hover:bg-gray-900"
                  variants="text"
                >
                  Cancel Edition
                </Button>
                <Button
                  type="submit"
                  variants="ok"
                  onClick={() => handleSubmit()}
                >
                  Save edition
                </Button>
              </section>
            </>
          );
        }}
      </Formik>
    </Modal>
  );
}
