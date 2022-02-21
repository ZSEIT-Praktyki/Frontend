import * as yup from "yup";

export default yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  condition: yup.string().required("Condition is required"),
  price: yup.number().positive().required("Price is required"),
  quantity: yup.number().positive().required("Quantity is required"),
  subcategory_id: yup.number().positive().required("Select valid Category"),
});
