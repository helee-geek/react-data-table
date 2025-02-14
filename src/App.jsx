import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";
const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Submitting the form", data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label> First Name: </label>
          <input
            className={errors.firstName ? "input-error" : ""}
            {...register("firstName", {
              required: true,
              minLength: { value: 3, message: "Min Length atleast 3" },
              maxLength: { value: 6, message: "Max Length atmost 6" },
            })}
          />
          {errors.firstName && (
            <p className="error-msg">{errors.firstName.message}</p>
          )}
        </div>
        <br />
        <div>
          <label> Middle Name: </label>
          <input {...register("middleName", { required: true })} />
        </div>
        <br />
        <div>
          <label> Last Name: </label>
          <input
            className={errors.lastName ? "input-error" : ""}
            {...register("lastName", {
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Last name is not as per the rules",
              },
            })}
          />
          {errors.lastName && (
            <p className="error-msg">{errors.lastName.message}</p>
          )}
        </div>
        <br />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default App;
