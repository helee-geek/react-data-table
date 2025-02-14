import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const GENDER_OPTION = [
  { text: "Male", value: "male" },
  { text: "Female", value: "female" },
  { text: "Other", value: "other" },
];

// Validation Schema
const schema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  phone: yup
    .number()
    .typeError("Phone must be a number")
    .integer("Phone number must be an integer")
    .positive("Phone number must be positive")
    .required("Phone is required"),
  gender: yup.string().required("Gender is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirm Password is required"),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div>
      <h3>User Registration Form</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* First Name */}
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" {...register("firstName")} />
          {errors.firstName && <p className="error-msg">{errors.firstName.message}</p>}
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" {...register("lastName")} />
          {errors.lastName && <p className="error-msg">{errors.lastName.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" {...register("email")} />
          {errors.email && <p className="error-msg">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="text" {...register("phone")} />
          {errors.phone && <p className="error-msg">{errors.phone.message}</p>}
        </div>

        {/* Gender */}
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
          {errors.gender && <p className="error-msg">{errors.gender.message}</p>}
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" {...register("password")} />
          {errors.password && <p className="error-msg">{errors.password.message}</p>}
        </div>

        {/* Confirm Password */}
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" {...register("confirmPassword")} />
          {errors.confirmPassword && (
            <p className="error-msg">{errors.confirmPassword.message}</p>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
