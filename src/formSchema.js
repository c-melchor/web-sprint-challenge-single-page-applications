import * as yup from "yup";

const formSchema = yup.object().shape({
  // .required() takes an error message
  name: yup
    .string()
    .min(2, "must be at least 2 characters")
    .required(),
  email: yup
    .string()
    .email()
    .required("Please enter an e-mail address"),
  phone: yup.string().required("Please enter a valid phone number"),
  sizes: yup
    .string()
    .min(2, "Select a size")
    .required(),
  special: yup.string(),
  extraCheese: yup.boolean(),
  mushrooms: yup.boolean(),
  sausage: yup.boolean(),
  pineapple: yup.boolean()
});

export default formSchema;
