import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import Button from "@mui/material/Button";

const options = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
];

const SelectWithController = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="framework"
        control={control}
        defaultValue={null}
        rules={{ required: "Please select a framework" }}
        render={({ field }) => <Select {...field} options={options} />}
      />

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default SelectWithController;


// import React from "react";
// import ReactDatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { useForm, Controller } from "react-hook-form";

// function App() {
//   const {
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm();

//   return (
//     <form onSubmit={handleSubmit((data) => console.log(data))}>
//       <Controller
//         control={control}
//         name="ReactDatepicker"
//         defaultValue={null}
//         rules={{ required: "Date is required" }}
//         render={({ field }) => (
//           <>
//             <ReactDatePicker {...field} selected={field.value} />
//             {errors.ReactDatepicker && (
//               <p style={{ color: "red" }}>{errors.ReactDatepicker.message}</p>
//             )}
//           </>
//         )}
//       />

//       <input type="submit" />
//     </form>
//   );
// }

// export default App;
// import React from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css"; 
// import { useForm, Controller } from "react-hook-form";

// const ControllerDemo = () => {
//   const { handleSubmit, control } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} style={{ padding: "20px" }}>
//       <div style={{ marginBottom: "10px" }}> 
//         <Controller
//           control={control}
//           name="ReactDatePicker"
//           defaultValue={null} 
//           render={({ field }) => (
//             <DatePicker
//               {...field} 
//               selected={field.value}
//               onChange={(date) => field.onChange(date)} 
//               dateFormat="dd/MM/yyyy"
//               placeholderText="Select a date"
//               style={{ width: "100%", padding: "8px", borderRadius: "4px" }}
//             />
//           )}
//         />
//       </div>
//       <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>Submit</button>
//     </form>
//   );
// };

// export default ControllerDemo;
// import React from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { useForm, Controller } from "react-hook-form";

// const ControllerDemo = () => {
//   const { handleSubmit, control } = useForm({
//     defaultValues: { ReactDatePicker: null }, 
//   });

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} style={{ padding: "20px" }}>
//       <div style={{ marginBottom: "10px" }}> 
//         <Controller
//           control={control}
//           name="ReactDatePicker"
//           render={({ field }) => (
//             <DatePicker
//               {...field}
//               selected={field.value}
//               onChange={(date) => field.onChange(date)}
//               dateFormat="dd/MM/yyyy" 
//               placeholderText="Select a date"
//               style={{ width: "100%", padding: "8px", borderRadius: "4px" }}
//             />
//           )}
//         />
//       </div>
//       <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>
//         Submit
//       </button>
//     </form>
//   );
// };

// export default ControllerDemo;
