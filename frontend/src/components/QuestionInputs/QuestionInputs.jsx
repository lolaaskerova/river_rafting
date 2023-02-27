import React, { useState } from "react";
import { FormScheme } from "../../scheme/FormScheme";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./questionInputs.scss";
const QuestionInputs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(FormScheme) });
  const formSubmit = (data) => {
    console.log(data);
  };
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
    <div className="container question-inputs-field">
      <form onSubmit={handleSubmit(formSubmit)} action="">
        <div id="error" className={blank ? "error-message " : ""}>
          There was a problem with your submission. Errors are marked below.
        </div>
        <div className="row question-inputs">
          <div className="question-col col-lg-3 col-md-4 col-sm-6">
            <input type="text" name="name" placeholder="Name" />
          </div>
          <div className="question-col col-lg-3 col-md-4  col-sm-6">
            {" "}
            <input
              className={blank ? "error-border" : ""}
              //   value={value}
              {...register("email")}
              type="email"
              name="email"
              placeholder="Email Address"
            />
            {errors.email ? (
              <span
                style={{
                  color: "#b94a48",
                  fontSize: "13px",
                  fontFamily: "Work Sans, sans-serif",
                }}
              >
                {errors.email.message}
              </span>
            ) : (
              <></>
            )}
          </div>
          <div className="question-col col-lg-3 col-md-4  col-sm-6">
            {" "}
            <input
              className={blank ? "error-border" : ""}
              //   value={value}
              {...register("comment")}
              type="text"
              name="comment"
              placeholder="Question / Comment"
            />
            {errors.comment ? (
              <span
                style={{
                  color: "#b94a48",
                  fontSize: "13px",
                  fontFamily: "Work Sans, sans-serif",
                }}
              >
                {errors.comment.message}
              </span>
            ) : (
              <></>
            )}
          </div>
          <div className="question-col col-lg-3 col-md-6  col-sm-6">
            <button
              onClick={(e) => errorMessage(e)}
              type="submit"
              className="question-button"
            >
              SEND
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default QuestionInputs;
