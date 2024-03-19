import { Formik } from "formik";
import addSchema from "@utils/helpers/addSchema";
import { Input, Button } from "@components/index";
import Label from "@components/UI/Label";
import Select from "@components/UI/Select";
import { useState } from "react";
import Condition from "./components/Condition";
import FileDrop from "@components/FileDrop";
import { categories } from "@utils/assets/constants/categories";

interface AddFormProps {
  onSubmit: (arg: any) => Promise<void>;
}

const initialValues = {
  title: "",
  description: "",
  quantity: 0,
  subcategory_id: 1,
  price: 0,
  condition: "",
  city: "",
};

export default function AddForm({ onSubmit }: AddFormProps) {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <Formik
      onSubmit={(v) => onSubmit({ ...v, files })}
      validationSchema={addSchema}
      validateOnChange
      initialValues={initialValues}
    >
      {({
        handleChange,
        handleBlur,
        values,
        handleSubmit,
        errors,
        isValid,
        dirty,
        touched,
      }) => {
        return (
          <article className="w-3/4 flex flex-col items-center md:items-start lg:flex-row mt-5 mb-5">
            <section className="bg-zinc-900 w-full sm:w-3/4 lg:w-full flex-[2] m-2 flex flex-col rounded-md p-4">
              <section className="w-full h-80 bg-zinc-950 rounded-md mb-5">
                <FileDrop files={files} setState={setFiles} />
              </section>

              <Input
                containerStyle="mb-4"
                label={
                  !!errors.title && touched.title
                    ? errors.title
                    : "Name of the product*"
                }
                placeholder="Type what are you selling"
                onChange={handleChange("title")}
                value={values.title}
                error={!!errors.title && touched.title}
                onBlur={handleBlur("title")}
              />
              <Label
                error={!!errors.description && touched.description}
                text={
                  !!errors.description && touched.description
                    ? errors.description
                    : "Product's description*"
                }
              />
              <textarea
                value={values.description}
                onChange={handleChange("description")}
                onBlur={handleBlur("description")}
                placeholder="Say someting more to the customers about the product "
                rows={10}
                className={`bg-zinc-950 text-white mb-4 resize-none m-2 mt-2 p-2 rounded  border-2 ${
                  !!errors.description && touched.description
                    ? "border-rose-600"
                    : "border-zinc-800"
                }`}
              />

              <Select
                onChange={handleChange("subcategory_id")}
                value={values.subcategory_id}
                onBlur={handleBlur("subcategory_id")}
                label="Category*"
                error={!!errors.subcategory_id && touched.subcategory_id}
                options={categories.map(({ text }, index) => ({
                  text,
                  value: index + 1,
                }))}
              />

              <Condition
                onChange={handleChange("condition")}
                value={values.condition}
              />

              <Input
                label={
                  !!errors.price && touched.price
                    ? errors.price
                    : "Product's price"
                }
                placeholder="0,00"
                value={values.price}
                onChange={handleChange("price")}
                onBlur={handleBlur("price")}
                error={!!errors.price && touched.price}
              />

              <Input
                containerStyle="mt-4"
                label={
                  !!errors.quantity && touched.quantity
                    ? errors.quantity
                    : "Quantity*"
                }
                placeholder="How much products you have"
                value={values.quantity}
                onChange={handleChange("quantity")}
                onBlur={handleBlur("quantity")}
                error={!!errors.quantity && touched.quantity}
              />

              <Input
                label="City*"
                value={values.city}
                onChange={handleChange("city")}
                onBlur={handleBlur("city")}
                error={!!errors.city && touched.city}
                containerStyle="mt-4"
                placeholder="City"
              />
            </section>
            <section className="bg-zinc-900 flex-1 flex flex-col rounded-md mt-2 p-4">
              <h1 className="text-white text-3xl font-bold">
                Upload your product!
              </h1>
              <p className="text-zinc-300 mt-3 w-full ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                rem eos aliquam necessitatibus! Sit,
              </p>
              <Button
                onClick={() => handleSubmit()}
                disabled={!(isValid && dirty)}
                variants="fire"
                type="submit"
                classes="w-full py-4 mt-5"
              >
                Upload now!
              </Button>
            </section>
          </article>
        );
      }}
    </Formik>
  );
}
