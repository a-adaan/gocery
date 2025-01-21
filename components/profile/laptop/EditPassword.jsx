"use client";
import { useForm } from "react-hook-form";

export default function EditPassword() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const password = watch("newPassword");
  async function onSubmitRegister(data) {
    console.log(data);
  }
  return (
    <div className="w-[1000px] h-[571px]">
      <form
        onSubmit={handleSubmit(onSubmitRegister)}
        className=" w-full lg:w-[845px] mt-[100px] ml-[95px]"
      >
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-[44px]">
          Change Password
        </h2>

        {/* Password Input */}
        <div className="flex flex-col justify-center w-full gap-11">
          {/* old Password Input */}
          <div className="w-full mb-[25px]">
            <label className="text-lg font-medium text-text pb-5">
              Old Password
            </label>
            <input
              {...register("oldPassword", {
                required: "Password is Required",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                  message:
                    "Password must contain at least 6 characters, one uppercase, one lowercase, one number, and one special character",
                },
              })}
              type="password"
              placeholder="Enter Your Old Password"
              className="w-full px-4 py-3 text-gray-700 text-center text-[12px] placeholder-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.oldPassword && (
              <p className="text-error text-xs m-1">
                {errors.oldPassword.message}
              </p>
            )}
          </div>

          {/* New Password Input */}
          <div className="w-full mb-[25px]">
            <label className="text-lg font-medium text-text pb-5">
              New Password
            </label>
            <input
              {...register("newPassword", {
                required: "Password is Required",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                  message:
                    "Password must contain at least 6 characters, one uppercase, one lowercase, one number, and one special character",
                },
              })}
              type="password"
              placeholder="Enter Your New Password"
              className="w-full px-4 py-3 text-gray-700 text-center text-[12px] placeholder-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.newPassword && (
              <p className="text-error text-xs m-1">
                {errors.newPassword.message}
              </p>
            )}
          </div>

          {/* Confirm New Password Input */}
          <div className="w-full mb-[25px]">
            <label className="text-lg font-medium text-text pb-5">
              {" "}
              Confirm Password
            </label>
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
        </div>
        <div className="w-full flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-[172px] mt-[40px] px-4 py-3 text-lg font-semibold text-gray-800 bg-primary outline outline-1 outline-primary outline-offset-2 rounded-full hover:bg-gray-300 "
          >
            {isSubmitting ? "Validating..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}
