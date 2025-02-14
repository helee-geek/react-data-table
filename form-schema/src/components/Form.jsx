import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const GENDER_OPTION = [
  { text: "Male", value: "male" },
  { text: "feMale", value: "female" },
  { text: "Other", value: "other" },
];

var emailValidation =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const schema = yup
  .object({
    firstName: yup.string().required("First Name Must be required"),
    lastName: yup.string().required("Last Name Must be Required"),
    gender: yup.string().required("Gender Must be Required"),
    // email: yup.string().email().required("Email Must be required"),
    email: yup
      .string()
      .matches(emailValidation, "Email Must be like : example@gmail.com"),
    phone: yup
      .number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(8)
      .required("A phone number is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required")
      .oneOf([yup.ref("password")], "Your Password does not match"),
  })
  .required();

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h3>User Registration Form</h3>

      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" {...register("firstName")} />
          {errors.firstName && (
            <p className="error-msg">{errors.firstName.message}</p>
          )}
        </div>
        <br />

        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" {...register("lastName")} />
          {errors.lastName && (
            <p className="error-msg">{errors.lastName.message}</p>
          )}
        </div>
        <br />

        <div>
          <label htmlFor="gender">Gender:</label>
          <select {...register("gender")}>
            <option value="">Select Gender:</option>
            {GENDER_OPTION.map((option, index) => (
              <option key={index} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
          {errors.gender && (
            <p className="error-msg">{errors.gender.message}</p>
          )}
        </div>
        <br />

        <div>
          <label htmlFor="firstName">Email:</label>
          <input type="text" {...register("email")} />
        </div>
        {errors.email && <p className="error-msg">{errors.email.message}</p>}
        <br />

        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="number" {...register("phone")} />
        </div>
        {errors.phone && <p className="error-msg">{errors.phone.message}</p>}
        <br />

        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" {...register("password")} />
        </div>
        {errors.password && (
          <p className="error-msg">{errors.password.message}</p>
        )}
        <br />

        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="text" {...register("confirmPassword")} />
        </div>
        {errors.confirmPassword && (
          <p className="error-msg">{errors.confirmPassword.message}</p>
        )}
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
