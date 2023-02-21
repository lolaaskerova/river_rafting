import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./contactUsInputs.scss";
import { FormScheme } from "../../../scheme/FormScheme";
import { useState } from "react";
const ContactUsInputs = () => {
  //yup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(FormScheme) });
  const formSubmit = (data) => {};

  //error message
  const [value, setValue] = useState("");
  const [blank, setBlank] = useState(false);

  const errorMessage = (e) => {
    if (e.target.value === "") {
      setBlank(true);
    }
    setValue(e.target.value);
  };
  return (
    <div className="col-lg-6 col-md-12 input">
      <div className={blank ? "error-message " : ""}>
        There was a problem with your submission. Errors are marked below.
      </div>
      <form onSubmit={handleSubmit(formSubmit)} action="">
        <input
          className={blank ? "error-border" : ""}
          //   value={value}
          {...register("name")}
          type="text"
          name="name"
          placeholder="Name"
        />
        {errors.name ? <span>{errors.name.message}</span> : <></>}
        <input
          className={blank ? "error-border" : ""}
          //   value={value}
          {...register("email")}
          type="email"
          name="email"
          placeholder="Email"
        />
        {errors.email ? <span>{errors.email.message}</span> : <></>}
        <input type="number" name="phone" placeholder="Phone" />
        <input
          className={blank ? "error-border" : ""}
          //   value={value}
          {...register("subject")}
          type="text"
          name="subject"
          placeholder="Subject"
        />
        {errors.subject ? <span>{errors.subject.message}</span> : <></>}
        <textarea
          className={blank ? "error-border" : ""}
          //   value={value}
          {...register("message")}
          name="message"
          placeholder="Message"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        {errors.message ? <span>{errors.message.message}</span> : <></>}
        <button onClick={(e) => errorMessage(e)}>SEND</button>
      </form>
    </div>
  );
};

export default ContactUsInputs;
