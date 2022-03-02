import * as yup from "yup";

export default yup.object().shape({
  name: yup.string().max(40, "Max 40 characters").required(),
  surname: yup.string().max(50, "Max 50 characters").required(),
  street: yup.string().max(60, "Max 60 characters").required(),
  street_number: yup.string().max(10, "Max 10 characters").required(),
  postal_code: yup.string().max(5, "Max 5 characters").required(),
  city: yup.string().max(60, "Max 60 characters").required(),
  phone: yup.string().max(12, "Max 12 characters").required(),
  state: yup.string().required(),
});
