"use client";
import { useForm } from "react-hook-form";
import { GoChevronLeft } from "react-icons/go";
export default function MEditPassword({ isOpen, onclose }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  async function onSubmitRegister(data) {
    console.log(data);
  }
  return (
    <div
      className={`fixed lg:hidden top-0 left-0 w-full h-screen bg-white z-50 transition-transform delay-100 duration-1000 shadow-md ${
        isOpen ? "" : "translate-x-[2000px]"
      }`}
    >
      <button
        onClick={onclose}
        className="absolute top-6 left-4 md:top-[26px] md:left-[33px] w-[38px] h-[38px] rounded-xl shadow-lg flex items-center justify-center"
      >
        <GoChevronLeft size={25} />
      </button>
      <form
        onSubmit={handleSubmit(onSubmitRegister)}
        className=" w-full mt-[80px] p-10"
      >
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-[44px]">
          Change Password
        </h2>

        {/* Password Input */}
        <div className="flex flex-col justify-center w-full gap-11">
          {/* old Password Input */}
          <div className="w-full mb-[10px]">
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
          <div className="w-full mb-[10px]">
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
          <div className="w-full mb-[10px]">
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
            className="w-[172px] mt-[70px] px-4 py-3 text-lg font-semibold text-gray-800 bg-primary outline outline-1 outline-primary outline-offset-2 rounded-full hover:bg-gray-300 "
          >
            {isSubmitting ? "Validating..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}
