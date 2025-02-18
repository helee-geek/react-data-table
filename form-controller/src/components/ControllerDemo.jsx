import Select from "react-select";
import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useForm, Controller } from "react-hook-form";

const options = [
  { value: "node", label: "Node" },
  { value: "react", label: "React" },
  { value: "next", label: "Next" },
];

const styles = {
    fontSize: 14,
    color: 'black',
  }

function ControllerDemo() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <Controller
        control={control}
        name="ReactDatepicker"
        defaultValue={null}
        rules={{ required: "Date is required" }}
        render={({ field }) => (
          <div>
            <ReactDatePicker
              {...field}
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              ref={(el) =>
                field.ref({ focus: () => el.setFocus && el.setFocus() })
              }
              dateFormat="dd/MM/yyyy"
              placeholderText="Select a date"
            />
            {errors.ReactDatepicker && (
              <p style={{ color: "red" }}>{errors.ReactDatepicker.message}</p>
            )}
          </div>
        )}
      />
      <Controller
        control={control}
        name="language"
        defaultValue={null}
        rules={{ required: "Please Select Any Language" }}
        render={({ field }) => <Select {...field} options={options}  style={styles.select}/>}
      />{" "}
      {errors.language && (
        <p style={{ color: "red" }}>{errors.language.message}</p>
      )}
      <button type="submit">Submit</button>
    </form>
  );
}
export default ControllerDemo;

