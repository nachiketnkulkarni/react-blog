import * as yup from "yup";

export let signInSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter correct email address.")
    .required("Enter email address."),
  password: yup
    .string()
    // .min(8, "Password needs to be 8 charachters long.")
    .required("Enter password."),
});
