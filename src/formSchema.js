import * as yup from "yup";

const formSchema = yup.object().shape({
  // .required() takes an error message
  name: yup.string().required("Name is a required field"),
  email: yup
    .string()
    .email()
    .required("Please enter an e-mail address"),
  phone: yup.string().required(),
  special: yup.string().required(),
  extraCheese: yup.boolean(),
  mushrooms: yup.boolean(),
  sausage: yup.boolean(),
  pineapple: yup.boolean()
});

export default formSchema;
