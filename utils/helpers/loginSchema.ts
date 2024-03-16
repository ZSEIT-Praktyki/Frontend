import * as yup from "yup";

export const forgotSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .trim()
    .required("Email is required"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .trim()
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .trim()
    .required("Password is required"),
});

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .trim()
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .trim()
    .required("Password is required"),
  name: yup
    .string()
    .min(1, "Please enter valid email")
    .trim()
    .required("Name is required"),
  surname: yup
    .string()
    .min(1, "Please enter valid email")
    .trim()
    .required("Surname is required"),
  phone: yup
    .string()
    .max(12, () => "Phone number should be max 12")
    .trim()
    .required("Phone is required"),
});
