import * as yup from "yup";
export const FormScheme = yup.object().shape({
  email: yup.string().email().required("This field cannot be blank."),
  comment: yup.string().required("This field cannot be blank."),
});
