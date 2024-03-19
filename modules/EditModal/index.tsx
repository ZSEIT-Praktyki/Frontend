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
                  className="bg-zinc-950 w-full outline-none focus:text-purple-700 focus:border-purple-700 text-white resize-none m-2 p-2 rounded border-2 border-zinc-600"
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
              <section className="flex justify-center mt-10 p-2">
                <Button
                  onClick={onClose}
                  variants="error"
                  classes="border-red-600 text-white bg-red-600 mr-5 rounded-md px-5"
                >
                  Cancel edit
                </Button>
                <Button
                  type="submit"
                  variants="ok"
                  classes="px-5 flex-1"
                  onClick={() => handleSubmit()}
                >
                  Save edited listing
                </Button>
              </section>
            </>
          );
        }}
      </Formik>
    </Modal>
  );
}
