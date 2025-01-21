"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";
import { useForm, Controller } from "react-hook-form";

export default function VerifyForm() {
  const router = useRouter();
  const inputsRef = useRef([]);
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  // Function to handle form submission
  const onSubmitOTP = (data) => {
    console.log("OTP Submitted:", data);
    router.push("/reset-password");
  };
  const handleOTPChange = (e, index) => {
    const value = e.target.value;
    if (value.length === 1 && index < 3) {
      inputsRef.current[index + 1].focus();
    }
  };

  return (
    <div className="flex flex-col justify-center items-start mx-auto lg:px-[105px] order-2">
      <form
        onSubmit={handleSubmit(onSubmitOTP)}
        className="flex flex-col items-center lg:items-start w-full md:w-[500px] lg:w-[400px] "
      >
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-3">
          Your Verification Code
        </h1>
        <p className="text-sm font-normal text-[#76777D] mb-11">
          Enter Your Verification Code to Continue
        </p>

        {/* OTP Input Boxes */}
        <div className="flex justify-center w-full space-x-[47px] mb-4">
          {[1, 2, 3, 4].map((_, index) => (
            <Controller
              key={index}
              name={`otp[${index}]`}
              control={control}
              defaultValue=""
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  maxLength="1"
                  ref={(el) => (inputsRef.current[index] = el)}
                  onChange={(e) => {
                    field.onChange(e);
                    handleOTPChange(e, index);
                  }}
                  className="w-12 h-12 text-center text-lg bg-white font-semibold border border-gray-300 rounded-[15px] focus:outline-none focus:ring-2 focus:ring-primary"
                />
              )}
            />
          ))}
        </div>
        {errors.otp && (
          <p className="text-error text-xs m-1">All fields are required</p>
        )}

        {/* Resend OTP */}
        <p className="flex justify-center w-full text-sm text-gray-500 mb-5">
          Didn’t you receive any OTP?
          <button
            type="button"
            className="text-orange-500 font-medium hover:underline ml-1"
          >
            Resend OTP
          </button>
        </p>

        {/* Continue Button */}
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
