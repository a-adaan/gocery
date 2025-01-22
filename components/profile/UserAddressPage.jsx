"use client";

import { useForm } from "react-hook-form";
import { FaHome, FaBriefcase } from "react-icons/fa";

export default function UserAddressPage() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  const onSubmitAddress = (data) => {
    console.log(data);
  };
  return (
    <div className="w-full border border-border rounded-2xl py-8 mt-8 px-5 lg:px-16">
      <p className="text-base text-center pb-5 lg:pb-0 lg:text-left text-text font-bold">
        Delivery Address
      </p>
      <form
        className="grid grid-cols-1 lg:grid-cols-2 gap-x-7 gap-y-4 mt-[21px]"
        onSubmit={handleSubmit(onSubmitAddress)}
      >
        <div>
          <label className="text-base text-text font-medium">Full Name</label>
          <input
            {...register("full-name")}
            className="w-full mt-2 h-[50px] bg-white placeholder-[#8C8E92] text-text text-sm text-center border-border border focus:ring-primary focus:ring-2 focus:outline-none rounded-[55px]"
            placeholder="Fifrst and Last Name"
          />
        </div>
        <div>
          <label className="text-base text-text font-medium">Region</label>
          <input
            {...register("full-name")}
            className="w-full mt-2 h-[50px] bg-white placeholder-[#8C8E92] text-text text-sm text-center border-border border focus:ring-primary focus:ring-2 focus:outline-none rounded-[55px]"
            placeholder="Fifrst and Last Name"
          />
        </div>
        <div>
          <label className="text-base text-text font-medium">Phone No</label>
          <input
            {...register("full-name")}
            className="w-full mt-2 h-[50px] bg-white placeholder-[#8C8E92] text-text text-sm text-center border-border border focus:ring-primary focus:ring-2 focus:outline-none rounded-[55px]"
            placeholder="Fifrst and Last Name"
          />
        </div>
        <div>
          <label className="text-base text-text font-medium">City</label>
          <input
            {...register("full-name")}
            className="w-full mt-2 h-[50px] bg-white placeholder-[#8C8E92] text-text text-sm text-center border-border border focus:ring-primary focus:ring-2 focus:outline-none rounded-[55px]"
            placeholder="Fifrst and Last Name"
          />
        </div>
        <div>
          <label className="text-base text-text font-medium">
            Building/House/Floor
          </label>
          <input
            {...register("full-name")}
            className="w-full mt-2 h-[50px] bg-white placeholder-[#8C8E92] text-text text-sm text-center border-border border focus:ring-primary focus:ring-2 focus:outline-none rounded-[55px]"
            placeholder="Fifrst and Last Name"
          />
        </div>
        <div>
          <label className="text-base text-text font-medium">Area</label>
          <input
            {...register("full-name")}
            className="w-full mt-2 h-[50px] bg-white placeholder-[#8C8E92] text-text text-sm text-center border-border border focus:ring-primary focus:ring-2 focus:outline-none rounded-[55px]"
            placeholder="Fifrst and Last Name"
          />
        </div>
        <div>
          <label className="text-base text-text font-medium">
            Colony/Locality/Landmark
          </label>
          <input
            {...register("full-name")}
            className="w-full mt-2 h-[50px] bg-white placeholder-[#8C8E92] text-text text-sm text-center border-border border focus:ring-primary focus:ring-2 focus:outline-none rounded-[55px]"
            placeholder="Fifrst and Last Name"
          />
        </div>
        <div>
          <label className="text-base text-text font-medium">Address</label>
          <input
            {...register("full-name")}
            className="w-full mt-2 h-[50px] bg-white placeholder-[#8C8E92] text-text text-sm text-center border-border border focus:ring-primary focus:ring-2 focus:outline-none rounded-[55px]"
            placeholder="Fifrst and Last Name"
          />
        </div>
        <div>
          <h2 className="text-base text-text font-medium">Select a Label</h2>
          <div className="flex gap-4 mt-4">
            {/* Home Label */}
            <label className="flex items-center justify-center gap-2 w-[143px] h-[50px] rounded-full bg-green-50 border border-green-500 text-green-600 hover:bg-green-100 cursor-pointer">
              <FaHome className="w-6 h-6 text-text" />
              <span className="font-semibold text-text">Home</span>
              <input
                type="radio"
                value="home"
                {...register("label", { required: true })}
                className="hidden"
              />
            </label>

            {/* Work Label */}
            <label className="flex items-center justify-center gap-2 w-[143px] h-[50px] rounded-full bg-orange-50 border border-orange-500 text-orange-600 hover:bg-orange-100 cursor-pointer">
              <FaBriefcase className="w-6 h-6 text-text" />
              <span className="font-semibold text-text">Work</span>
              <input
                type="radio"
                value="work"
                {...register("label", { required: true })}
                className="hidden"
              />
            </label>
          </div>
        </div>
        {/* Submit Button */}
        <div className="w-full flex justify-end mt-[19px]">
          <button
            type="submit"
            className="w-1/2 h-[51px] mt-[18px] text-white font-bold text-lg bg-primary hover:bg-[#c08a2c] rounded-[39px] outline outline-2 outline-offset-4 outline-[#FE9F00]"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
