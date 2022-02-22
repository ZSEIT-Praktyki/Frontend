import { Formik } from "formik";
import addSchema from "@utils/helpers/addSchema";
import { Input, Button } from "@components/index";
import Label from "@components/UI/Label";
import Select from "@components/UI/Select";
import { useState, ChangeEvent } from "react";

interface AddFormProps {
  onSubmit: (arg: any) => Promise<void>;
}

export default function AddForm({ onSubmit }: AddFormProps) {
  const [files, setFiles] = useState<File[]>([]);

  function onFiles(event: ChangeEvent<HTMLInputElement>) {
    setFiles((p) => [...p, event.target.files![0]]);
  }

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
        files: [],
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
      }) => {
        return (
          <section className="w-full sm:w-3/5 md:w-2/4 lg:w-2/4 xl:w-2/5 flex flex-col text-white mt-5">
            <h1 className="text-white text-4xl text-center font-bold mb-5">
              Add listing
            </h1>

            <Input
              name="title"
              label="Title"
              classes="bg-gray-900 mt-0"
              placeholder="Title"
              error={!!errors.title}
              type={"text"}
              value={values.title}
              onChange={handleChange("title")}
              onBlur={handleBlur("title")}
            />
            <Label text="Description" error={!!errors.description} />
            <textarea
              value={values.description}
              onChange={handleChange("description")}
              onBlur={handleBlur("description")}
              name="description"
              className={`bg-gray-900 border-2 border-zinc-600 m-2 mt-0 rounded p-2 text-white focus:border-purple-600 ${
                !!errors.description && "border-rose-600"
              }`}
              placeholder="Description"
              rows={10}
            />

            <Input
              label="Quantity"
              value={values.quantity}
              onChange={handleChange("quantity")}
              onBlur={handleBlur("quantity")}
              name="quantity"
              error={!!errors.quantity}
              classes="bg-gray-900 mt-0"
              placeholder="Quantity"
              type={"number"}
            />

            <Input
              label="Price"
              value={values.price}
              onChange={handleChange("price")}
              onBlur={handleBlur("price")}
              name="price"
              error={!!errors.price}
              classes="bg-gray-900 mt-0"
              placeholder="Price"
              type={"number"}
            />

            <Select
              label="Condition"
              value={values.condition}
              onChange={handleChange("condition")}
              onBlur={handleBlur("condition")}
              name="condition"
              error={!!errors.condition}
              options={[
                { text: "Used", value: "USED" },
                { text: "New", value: "NEW" },
              ]}
            />

            <Select
              error={!!errors.subcategory_id}
              label="Category"
              name="category"
              value={values.subcategory_id}
              onChange={handleChange("subcategory_id")}
              onBlur={handleBlur("subcategory_id")}
              options={[
                { text: "Any", value: "1" },
                { text: "Any 2", value: "2" },
              ]}
            />

            <Input type={"file"} onChange={onFiles} />

            <Button
              disabled={!(isValid && dirty)}
              variants="fire"
              type="submit"
              classes="border-0 py-5 mt-5"
              onClick={() => handleSubmit()}
            >
              Submit
            </Button>
          </section>
        );
      }}
    </Formik>
  );
}
