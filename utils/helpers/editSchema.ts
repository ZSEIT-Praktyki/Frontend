import * as yup from "yup";

export default yup.object().shape({
  title: yup.string().required(),
  desciprion: yup.string().required(),
  price: yup.number().positive().required(),
  quantity: yup.number().positive().required(),
});
