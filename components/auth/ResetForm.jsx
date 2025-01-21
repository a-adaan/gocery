"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function ResetForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm();

  const password = watch("password");

  // Function to handle password reset
  async function onSubmitPassword(data) {
    console.log(data);

    router.push("/");
  }

  return (
    <div className="flex flex-col  justify-center items-start mx-auto lg:px-[105px] order-2">
      <form
        onSubmit={handleSubmit(onSubmitPassword)}
        className="flex flex-col items-center lg:items-start w-full md:w-[500px] lg:w-[400px]"
      >
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Reset Password
        </h2>
        <p className="text-sm font-normal text-[#76777D] mb-11">
          Set Your New Password
        </p>

        {/* Password Input */}
        <div className="w-full mb-[34px]">
          <input
            {...register("password", {
              required: "Password is Required",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                message:
                  "Password must contain at least 6 characters, one uppercase, one lowercase, one number, and one special character",
              },
            })}
            type="password"
            placeholder="Enter Your Password"
            className="w-full px-4 py-3 text-gray-700 text-center text-[12px] placeholder-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.password && (
            <p className="text-error text-xs m-1">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password Input */}
        <div className="w-full mb-[23px]">
          <input
            {...register("confirmPassword", {
              required: "Confirm Password is Required",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            type="password"
            placeholder="Confirm Your Password"
            className="w-full px-4 py-3 text-gray-700 text-center text-[12px] placeholder-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.confirmPassword && (
            <p className="text-error text-xs m-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-4 py-3 text-lg font-semibold text-gray-800 bg-primary outline outline-1 outline-primary outline-offset-2 rounded-full hover:bg-gray-300"
        >
          {isSubmitting ? "Resetting..." : "Continue"}
        </button>
      </form>
    </div>
  );
}
