import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Field from "../common/Field";

export default function RegisterForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = async (formData) => {
    console.log(formData);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/register`,
        formData
      );
      if (response.status === 201) {
        navigate("/");
      }
    } catch (error) {
      setError("root.random", {
        type: "random",
        message: `Something went wrong: ${error.message}`,
      });
    }
  };
  return (
    <form onSubmit={handleSubmit(submitForm)} autocomplete="off">
      <Field label="First Name" className="block mb-2" error={errors.firstName}>
        <div className="mb-6">
          <input
            {...register("firstName", { required: "Fisrt Name is Required" })}
            className={`auth-input ${
              !!errors.firstName ? "border-red-500" : "border-gray-200"
            }`}
            type="firstName"
            id="firstName"
            name="firstName"
            className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>
      </Field>
      <Field label="Last Name" className="block mb-2" error={errors.lastName}>
        <div className="mb-6">
          <input
            {...register("lastName", { required: "Last Name is Required" })}
            className={`auth-input ${
              !!errors.lastName ? "border-red-500" : "border-gray-200"
            }`}
            type="lastName"
            id="lastName"
            name="lastName"
            className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>
      </Field>
      <Field label="Email" className="block mb-2" error={errors.email}>
        <div className="mb-6">
          <input
            {...register("email", { required: "Email ID is Required" })}
            className={`auth-input ${
              !!errors.email ? "border-red-500" : "border-gray-200"
            }`}
            type="email"
            id="email"
            name="email"
            className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>
      </Field>
      <Field label="Password" className="block mb-2" error={errors.password}>
        <div className="mb-6">
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Your password must be at least 8 characters",
              },
            })}
            className={`auth-input ${
              !!errors.password ? "border-red-500" : "border-gray-200"
            }`}
            type="password"
            id="password"
            name="password"
            className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>
      </Field>
      <p>{errors?.root?.random?.message}</p>
      <div className="mb-6">
        <button className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200">
          Create Account
        </button>
      </div>
      <p className="text-center">
        Already have account?{" "}
        <Link to="/login" className="text-indigo-600 hover:underline">
          Login
        </Link>
      </p>
    </form>
  );
}
