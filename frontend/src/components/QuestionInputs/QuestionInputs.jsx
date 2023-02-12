import React from "react";
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
  return (
    <div className="container question-inputs-field">
      <form onSubmit={handleSubmit(formSubmit)} action="">
        <div className="row question-inputs">
          <div className="question-col col-lg-3 col-md-4 col-sm-6">
            <input type="text" name="name" placeholder="Name" />
          </div>
          <div className="question-col col-lg-3 col-md-4  col-sm-6">
            {" "}
            <input
              {...register("email")}
              type="email"
              name="email"
              placeholder="Email Address"
            />
            {errors.email ? (
              <span
                style={{ color: "red", fontFamily: "Work Sans sans-serif" }}
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
              {...register("comment")}
              type="text"
              name="comment"
              placeholder="Question / Comment"
            />
            {errors.comment ? (
              <span
                style={{ color: "red", fontFamily: "Work Sans sans-serif" }}
              >
                {errors.comment.message}
              </span>
            ) : (
              <></>
            )}
          </div>
          <div className="question-col col-lg-3 col-md-6  col-sm-6">
            <button type="submit" className="question-button">
              SEND
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default QuestionInputs;
