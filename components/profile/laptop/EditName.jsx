"use client";
import { useForm } from "react-hook-form";

export default function EditName() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  async function onSubmitRegister(data) {
    console.log(data);
  }
  return (
    <div className="w-[1000px] h-[509px]">
      <form
        onSubmit={handleSubmit(onSubmitRegister)}
        className=" w-full lg:w-[845px] mt-[107px] ml-[95px]"
      >
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-[44px]">
          Edit Name
        </h2>

        {/* Name Input */}
        <div className="flex items-center w-full gap-11">
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
            className="w-[172px] mt-[170px] px-4 py-3 text-lg font-semibold text-gray-800 bg-primary outline outline-1 outline-primary outline-offset-2 rounded-full hover:bg-gray-300 "
          >
            {isSubmitting ? "Validating..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}
