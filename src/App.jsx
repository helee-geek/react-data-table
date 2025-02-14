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
          <input
            className={errors.middleName ? "input-error" : ""}
            {...register("middleName", { required: true })}
          />
        </div>
        {errors.firstName && (
          <p className="error-msg">{errors.middleName.message}</p>
        )}
        <br />
        <div>
          <label> Last Name: </label>
          <input
            className={errors.lastName ? "input-error" : ""}
            {...register("lastName", {
              required: true,
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
        <div>
          <label>Age:</label>
          <input
            type="number"
            className={errors.age ? "input-error" : ""}
            {...register("age", {
              required: true,
              min: { value: 18, message: "Age must Greater than 18." },
              max: { value: 99, message: "Age must be Less than 99" },
            })}
          />
          {errors.age && <p className="error-msg">{errors.age.message}</p>}
        </div>
        <br />
        <div>
          <label>Email:</label>
          <input
            type="email"
            className={errors.email ? "input-error" : ""}
            {...register("email", {
              required: true,
              pattern: {
                value:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Give a Proper Email Id EX: example@gmail.com",
              },
            })}
          />
          {errors.email && <p className="error-msg">{errors.email.message}</p>}
        </div>
        <br />

        <div>
          <label>Password:</label>
          <input
            type="password"
            className={errors.password ? "input-error" : ""}
            {...register("password", {
              required: true,
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character",
              },
            })}
          />
          {errors.password && (
            <p className="error-msg">{errors.password.message}</p>
          )}
        </div>

        <div>
          <label>Mobile Number:</label>
          <input
            type="tel"
            className={errors.mNumber ? "input-error" : ""}
            {...register("mNumber", {
              required: true,
              minLength: {
                value: 10,
                message: "Mobile number must be 10 digits",
              },
              maxLength: {
                value: 10,
                message: "Mobile number must be 10 digits",
              },
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Invalid mobile number",
              },
            })}
          />
          {errors.mNumber && (
            <p className="error-msg">{errors.mNumber.message}</p>
          )}
        </div>

        {/* <div>
          <label>Title</label>
          <select name="Title" {...register({ required: true })}>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Dr">Dr</option>
          </select>
        </div> */}

        <div>
          <label>Title</label>
          <select
            name="title"
            id=""
            className={errors.title ? "input-error" : ""}
            {...register("title", { required: true })}
            defaultValue=""
          >
            <option value="" disabled hidden>
              Select Title
            </option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Dr">Dr</option>
          </select>

          {errors.title && <p className="error-msg">{errors.title.message}</p>}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default App;
