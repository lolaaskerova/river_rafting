import * as yup from "yup";
export const FormScheme = yup.object().shape({
  name: yup.string().required("This field cannot be blankю"),
  email: yup.string().email().required("This field cannot be blank."),
  comment: yup.string().required("This field cannot be blank."),
  subject: yup.string().required("This field cannot be blank."),
});
