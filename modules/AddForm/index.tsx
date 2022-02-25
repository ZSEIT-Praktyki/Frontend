import { Formik } from "formik";
import addSchema from "@utils/helpers/addSchema";
import { Input, Button } from "@components/index";
import Label from "@components/UI/Label";
import Select from "@components/UI/Select";
import { useState } from "react";
import Condition from "./components/Condition";
import FileDrop from "@components/FileDrop";

interface AddFormProps {
  onSubmit: (arg: any) => Promise<void>;
}

export default function AddForm({ onSubmit }: AddFormProps) {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <Formik
      onSubmit={(v) => onSubmit({ ...v, files })}
      validationSchema={addSchema}
      validateOnChange
      initialValues={{
        title: "",
        description: "",
        quantity: 0,
        subcategory_id: 1,
        price: 0,
        condition: "",
      }}
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
          <article className="max-w-6xl flex flex-col items-center md:items-start lg:flex-row mt-5 mb-5">
            <section className="bg-gray-800 w-full sm:w-3/4 lg:w-full flex-1 mr-5 flex flex-col rounded-md p-4">
              <section className="w-full h-80 bg-gray-900 rounded-md mb-5">
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
                className={`bg-gray-900 text-white mb-4 resize-none m-2 mt-0 p-2 rounded  border-2 ${
                  !!errors.description && touched.description
                    ? "border-rose-600"
                    : "border-zinc-600"
                }`}
              />

              <Select
                onChange={handleChange("subcategory_id")}
                value={values.subcategory_id}
                onBlur={handleBlur("subcategory_id")}
                label="Category*"
                error={!!errors.subcategory_id && touched.subcategory_id}
                options={[{ value: "Home", text: "Home" }]}
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
              <div className="flex items-center ">
                <input type="checkbox" className="ml-2 " />
                <p className="text-white ml-2 font-medium">Negotiable</p>
              </div>

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

              <Input label="Location*" containerStyle="mt-4" />
            </section>
            <section className="bg-gray-800 flex-1 flex items-center flex-col justify-around rounded-md h-96   pb-5">
              <h1 className="text-white text-4xl font-bold text-center p-2">
                Add
              </h1>
              <p className="text-white p-2 w-3/4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                rem eos aliquam necessitatibus! Sit, cumque consectetur. Sunt
                blanditiis molestiae dolores ullam officia accusamus culpa
                officiis commodi voluptas consequatur, quisquam similique.
              </p>
              <Button
                onClick={() => handleSubmit()}
                disabled={!(isValid && dirty)}
                variants="fire"
                type="submit"
                classes="w-full !m-0 w-4/5 py-4 rounded-2xl font-medium"
              >
                ADD AS BUY NOW
              </Button>
            </section>
          </article>
        );
      }}
    </Formik>
  );
}
