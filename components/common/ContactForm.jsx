"use client";

import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  async function onSubmitRegister(data) {
    console.log(data);
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmitRegister)}
        className="flex flex-col items-center lg:items-start w-full lg:w-[833px] "
      >
        {/* Email Input */}
        <div className="w-full mb-[34px]">
          <input
            {...register("email", {
              required: "Email is Required",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Invalid email address",
              },
            })}
            placeholder="Enter your Email Address"
            className="w-full px-4 py-3 text-gray-700 text-center text-[12px] placeholder-[#8C8E92] bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.email && (
            <p className="text-error text-xs m-1">{errors.email.message}</p>
          )}
        </div>
        {/* Name Input */}
        <div className="w-full mb-[34px]">
          <input
            {...register("name", { required: "Enter you Full Name" })}
            placeholder="Enter your Full Name"
            className="w-full h-[278px]  px-4 py-3 text-gray-700 text-center text-[12px] placeholder-[#8C8E92] bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.name && (
            <p className="text-error text-xs m-1">{errors.name.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-4 py-3 text-lg font-semibold text-white bg-primary outline outline-1 outline-primary outline-offset-2 rounded-full hover:bg-gray-300 "
        >
          {isSubmitting ? "Validating..." : "Send"}
        </button>
      </form>
    </div>
  );
}
