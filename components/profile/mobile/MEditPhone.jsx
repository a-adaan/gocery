"use client";
import { useForm } from "react-hook-form";
import { GoChevronLeft } from "react-icons/go";
export default function MEditPhone({ isOpen, onclose }) {
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
        className=" w-full mt-[100px] p-10"
      >
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-[44px]">
          Edit Phone
        </h2>

        {/* Phone Input */}
        <div className="flex items-center w-full gap-11">
          <div className="w-full mb-[34px]">
            <label className="text-lg font-medium text-text pb-5">Phone</label>
            <input
              {...register("phone", {
                required: "Phone is Required",
                pattern: {
                  value: /^\+?[1-9]\d{8,14}$/,
                  message: "Enter a valid phone number (e.g., +1234567890)",
                },
              })}
              placeholder="Enter your Phone"
              className="w-full px-4 py-3 text-gray-700 text-center text-[12px] placeholder-[#8C8E92] bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.phone && (
              <p className="text-error text-xs m-1">{errors.phone.message}</p>
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
