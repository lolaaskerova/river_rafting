import * as yup from "yup";
export const FormScheme = yup.object().shape({
  name: yup.string().required("This field cannot be blank."),
  email: yup.string().email().required("This field cannot be blank."),
  comment: yup.string().required("This field cannot be blank."),
  subject: yup.string().required("This field cannot be blank."),
  message: yup.string().required("This field cannot be blank."),
  price: yup.number().required("This field cannot be blank."),
  time: yup.number().required("This field cannot be blank."),
  title: yup.string().required("This field cannot be blank."),
  desc: yup.string().required("This field cannot be blank."),
  image: yup.string().required("This field cannot be blank."),
  category: yup.string().required("This field cannot be blank."),
});
