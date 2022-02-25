import * as yup from "yup";

export const forgotSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email is required"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  name: yup
    .string()
    .min(1, "Please enter valid email")
    .required("Name is required"),
  surname: yup
    .string()
    .min(1, "Please enter valid email")
    .required("Surname is required"),
  phone: yup.number().required("Phone is required"),
});
