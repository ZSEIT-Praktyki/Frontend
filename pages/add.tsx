import { useSelector } from "@utils/store/store";
import { Formik } from "formik";
import addSchema from "@utils/helpers/addSchema";
import { Input, Button } from "@components/index";

export default function AddListing() {
  const { isLoggedIn } = useSelector((state) => state.user);

  return (
    <main className="flex h-full justify-center p-2">
      <Formik
        onSubmit={(v) => console.log(v)}
        validationSchema={addSchema}
        validateOnChange
        initialValues={{
          title: "",
          description: "",
          quantity: 0,
          subcategory_id: 0,
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
        }) => {
          console.log(errors);
          return (
            <>
              <section className="w-full sm:w-1/2 md:w-1/3 lg:w-2/4 flex flex-col text-white">
                <h1 className="text-white text-4xl text-center font-bold mb-5">
                  Add listing
                </h1>

                <label
                  htmlFor="title"
                  className={`pl-2 text-gray-300 font-medium ${
                    !!errors.title && "text-rose-600"
                  }`}
                >
                  Title
                </label>
                <Input
                  name="title"
                  classes="bg-gray-900 mt-0"
                  placeholder="Title"
                  error={!!errors.title}
                  type={"text"}
                  value={values.title}
                  onChange={handleChange("title")}
                  onBlur={handleBlur("title")}
                />
                <label
                  htmlFor="description"
                  className={`pl-2 text-gray-300 font-medium ${
                    !!errors.description && "text-rose-600"
                  }`}
                >
                  Description
                </label>
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
                <label
                  htmlFor="quantity"
                  className={`pl-2 text-gray-300 font-medium ${
                    !!errors.quantity && "text-rose-600"
                  }`}
                >
                  Quantity
                </label>
                <Input
                  value={values.quantity}
                  onChange={handleChange("quantity")}
                  onBlur={handleBlur("quantity")}
                  name="quantity"
                  error={!!errors.quantity}
                  classes="bg-gray-900 mt-0"
                  placeholder="Quantity"
                  type={"number"}
                />
                <label
                  htmlFor="price"
                  className={`pl-2 text-gray-300 font-medium ${
                    !!errors.price && "text-rose-600"
                  }`}
                >
                  Price
                </label>
                <Input
                  value={values.price}
                  onChange={handleChange("price")}
                  onBlur={handleBlur("price")}
                  name="price"
                  error={!!errors.price}
                  classes="bg-gray-900 mt-0"
                  placeholder="Price"
                  type={"number"}
                />
                <label
                  htmlFor="condition"
                  className={`pl-2 text-gray-300 font-medium ${
                    !!errors.condition && "text-rose-600"
                  }`}
                >
                  Condition
                </label>
                <select
                  value={values.condition}
                  onChange={handleChange("condition")}
                  onBlur={handleBlur("condition")}
                  name="condition"
                  className={`bg-gray-900 border-2 border-zinc-600 p-2 m-2 text-white rounded mt-0 ${
                    !!errors.condition && "border-rose-600"
                  }`}
                >
                  <option value="NEW">New</option>
                  <option value="USED">Used</option>
                </select>
                <label
                  htmlFor="category"
                  className={`pl-2 text-gray-300 font-medium ${
                    !!errors.subcategory_id && "text-rose-600"
                  }`}
                >
                  Condition
                </label>
                <select
                  name="category"
                  className={`bg-gray-900 border-2 border-zinc-600 p-2 m-2 text-white rounded mt-0 ${
                    !!errors.condition && "border-rose-600"
                  }`}
                  value={values.subcategory_id}
                  onChange={handleChange("subcategory_id")}
                  onBlur={handleBlur("subcategory_id")}
                ></select>
                <Button
                  disabled={!isValid && dirty}
                  variants="fire"
                  classes="border-0 py-3 mt-5"
                  onClick={() => handleSubmit()}
                >
                  Submit
                </Button>
              </section>
            </>
          );
        }}
      </Formik>
    </main>
  );
}
