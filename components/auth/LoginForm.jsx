"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmitForm = async (data) => {
    console.log(data);
    router.push("/home");
  };

  return (
    <div className="flex flex-col justify-center items-start mx-auto lg:px-[105px] order-2 mt-5">
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="flex flex-col items-center lg:items-start w-full md:w-[500px] lg:w-[400px] "
      >
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-[44px]">Sign In</h2>

        {/* Email Input */}
        <div className="w-full mb-4">
          <input
            placeholder="Enter your Email Address"
            {...register("email", {
              required: "Email is Required",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Invalid email address",
              },
            })}
            className="w-full px-4 py-3 text-gray-700 text-center text-[12px] placeholder-[#8C8E92] bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.email && (
            <p className="text-error text-xs m-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password Input */}
        <div className="w-full mb-2">
          <input
            placeholder="Enter Your Password"
            {...register("password", {
              required: "Password is Required",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                message:
                  "Password must contain at least 6 characters, one uppercase, one lowercase, one number, and one special character",
              },
            })}
            className="w-full px-4 py-3 text-gray-700 text-center text-[12px] placeholder-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.password && (
            <p className="text-error text-xs m-1">{errors.password.message}</p>
          )}
        </div>

        {/* Forgot Password */}
        <div className="w-full text-left mb-6">
          <Link
            href="/forget-password"
            className="text-sm text-[#FE9F00] hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Sign In Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-4 py-3 text-lg font-semibold text-gray-800 bg-primary outline outline-1 outline-primary outline-offset-4 rounded-full disabled::bg-gray-300 focus:outline"
        >
          {isSubmitting ? "Signing In..." : "Sign IN"}
        </button>
      </form>
      <div className="w-full text-center lg:text-left my-11 ">
        Don't Have an Account?
        <Link
          href="/register"
          className="text-sm text-[#FE9F00] hover:underline m-1"
        >
          Sign Up
        </Link>
      </div>
      <div className="flex flex-col w-full items-center space-y-4 mb-5">
        <div className="flex gap-2">
          <img src="/image/auth/left.svg" />
          <p className="text-[#1A1D26] text-xs">Continue With</p>
          <img src="/image/auth/right.svg" />
        </div>
        <div className="flex gap-4">
          {/* Google Button */}
          <button className="flex items-center justify-center gap-2 w-40 h-12 bg-gray-200 rounded-full shadow-lg hover:bg-gray-300">
            <img
              src="/image/auth/google.svg"
              alt="Google Logo"
              className="w-5 h-5"
            />
            <span className="text-gray-800 text-sm font-medium">Google</span>
          </button>

          {/* Facebook Button */}
          <button className="flex items-center justify-center gap-2 w-40 h-12 bg-gray-200 rounded-full shadow-lg hover:bg-gray-300">
            <img
              src="/image/auth/facebook.svg"
              alt="Facebook Logo"
              className="w-5 h-5"
            />
            <span className="text-gray-800 text-sm font-medium">Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
}
