"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function RegisterForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const password = watch("password");

  async function onSubmitRegister(data) {
    console.log(data);
    router.push("/");
  }

  return (
    <div className="flex flex-col justify-center items-start mx-auto lg:px-[105px] order-2">
      <form
        onSubmit={handleSubmit(onSubmitRegister)}
        className="flex flex-col items-center lg:items-start w-full md:w-[500px] lg:w-[400px] "
      >
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-[44px]">
          Create Account
        </h2>

        {/* Name Input */}
        <div className="w-full mb-[34px]">
          <input
            {...register("name", { required: "Enter you Full Name" })}
            placeholder="Enter your Full Name"
            className="w-full px-4 py-3 text-gray-700 text-center text-[12px] placeholder-[#8C8E92] bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.name && (
            <p className="text-error text-xs m-1">{errors.name.message}</p>
          )}
        </div>
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
            className="w-full px-4 py-3 text-gray-700 text-center text-[12px] placeholder-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.password && (
            <p className="text-error text-xs m-1">{errors.password.message}</p>
          )}
        </div>
        {/* Confirm Password */}
        <div className="w-full mb-[49px]">
          <input
            {...register("confirmPassword", {
              required: "Confirm Password is Required",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 text-gray-700 text-center text-[12px] placeholder-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.confirmPassword && (
            <p className="text-error text-xs m-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Sign In Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-4 py-3 text-lg font-semibold text-gray-800 bg-primary outline outline-1 outline-primary outline-offset-2 rounded-full hover:bg-gray-300 "
        >
          {isSubmitting ? "Validating..." : "Continue"}
        </button>
      </form>
      <div className="w-full text-left my-11 ">
        Already Have an Account?
        <Link href="/" className="text-sm text-[#FE9F00] hover:underline m-1">
          Sign In
        </Link>
      </div>
    </div>
  );
}
