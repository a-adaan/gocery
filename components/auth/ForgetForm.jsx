"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function ForgetForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  async function onSubmitForm(data) {
    console.log(data);
    router.push("/verify");
  }
  return (
    <div className="flex flex-col justify-center items-start mx-auto lg:px-[105px] order-2">
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="flex flex-col items-center lg:items-start w-full md:w-[500px] lg:w-[400px] "
      >
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Forgot Password
        </h2>
        <p className="text-sm font-normal text-[#76777D] mb-11">
          Enter Your Phone Number to Continue
        </p>

        {/* Contact info */}
        <div className="w-full mb-4">
          <input
            {...register("number", {
              required: "Phone Number is Required",
              pattern: {
                value: /^\+?[1-9]\d{8,14}$/,
                message: "Enter a valid phone number (e.g., +1234567890)",
              },
            })}
            placeholder="Enter your Phone No"
            className="w-full px-4 py-3 text-gray-700 text-center text-[12px] placeholder-[#8C8E92] bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.number && (
            <p className="text-error text-xs m-1">{errors.number.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-4 py-3 text-lg font-semibold text-gray-800 bg-primary outline outline-1 outline-primary outline-offset-2 rounded-full hover:bg-gray-300 "
        >
          {isSubmitting ? "Validating..." : "Continue"}
        </button>
      </form>
    </div>
  );
}
