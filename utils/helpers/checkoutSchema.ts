import * as yup from "yup";

export default yup.object().shape({
  name: yup.string().required("Name is required"),
  surname: yup.string().required("Surname is required"),
  address: yup.string().required("Address is required"),
});
