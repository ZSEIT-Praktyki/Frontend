import * as yup from "yup";

export default yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  condition: yup.string().required("Condition is required"),
  price: yup.string().required("Price is required"),
  quantity: yup.string().required("Quantity is required"),
  subcategory_id: yup.string().required("Select valid Category"),
});
