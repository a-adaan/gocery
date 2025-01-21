"use client";
import { useForm } from "react-hook-form";
import { GoChevronLeft } from "react-icons/go";
export default function MEditName({ isOpen, onclose }) {
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
          Edit Name
        </h2>

        {/* Name Input */}
        <div className="flex flex-col items-center w-full gap-11">
          <div className="w-full mb-[34px]">
            <label className="text-lg font-medium text-text pb-2">
              First Name
            </label>
            <input
              {...register("first-name", { required: "First-Name required" })}
              placeholder="Enter your First Name"
              className="w-full px-4 py-3 text-gray-700 text-center text-[12px] placeholder-[#8C8E92] bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.name && (
              <p className="text-error text-xs m-1">{errors.name.message}</p>
            )}
          </div>
          {/* last Name */}
          <div className="w-full mb-[34px]">
            <label className="text-lg font-medium text-text pb-2">
              Last Name
            </label>
            <input
              {...register("last-name", { required: "Last-Name required" })}
              placeholder="Enter your Last Name"
              className="w-full px-4 py-3 text-gray-700 text-center text-[12px] placeholder-[#8C8E92] bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.name && (
              <p className="text-error text-xs m-1">{errors.name.message}</p>
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
