"use client";

import { useForm } from "react-hook-form";

export default function AddCard({ handleBtn }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm();
  const isChecked = watch("saveCard", false);

  const onSubmitCards = (data) => {
    console.log(data);
    handleBtn();
  };
  return (
    <div className="w-full h-full lg:w-[1000px] lg:h-[571px]">
      <p className="text-base text-text font-bold">Add Card</p>
      <form
        className="lg:w-4/5 grid grid-cols-1 gap-x-6 gap-y-4 mt-[21px]"
        onSubmit={handleSubmit(onSubmitCards)}
      >
        <div>
          <input
            {...register("card-number")}
            className="w-full mt-2 h-[50px] bg-white placeholder-[#8C8E92] text-text text-sm text-center border-border border focus:ring-primary focus:ring-2 focus:outline-none rounded-[55px]"
            placeholder="Card Number"
          />
        </div>
        <div>
          <input
            {...register("date")}
            className="w-full mt-2 h-[50px] bg-white placeholder-[#8C8E92] text-text text-sm text-center border-border border focus:ring-primary focus:ring-2 focus:outline-none rounded-[55px]"
            placeholder="DD/MM/YY"
          />
        </div>
        <div>
          <input
            {...register("full-name")}
            className="w-full mt-2 h-[50px] bg-white placeholder-[#8C8E92] text-text text-sm text-center border-border border focus:ring-primary focus:ring-2 focus:outline-none rounded-[55px]"
            placeholder="Cardholder Name"
          />
        </div>
        <label className="flex items-center gap-2 text-gray-800">
          <input
            type="checkbox"
            {...register("saveCard")}
            className="appearance-none w-5 h-5 border border-gray-300 rounded focus:ring-primary focus:ring-2 checked:bg-primary"
          />
          <span className="text-sm font-medium">
            Save this card for Faster Checkout
          </span>
        </label>

        {/* Description */}
        <p className="text-sm text-gray-500">
          By saving your card you grant us your consent to store your payment
          method for future orders. You can withdraw consent at any time.
        </p>
        {/* Submit Button */}
        <div className="w-full flex justify-start mt-[19px]">
          <button
            type="submit"
            disabled={!isChecked}
            className={`w-full lg:w-1/2 h-[51px] mt-[18px] text-white font-bold text-lg ${
              isChecked
                ? "bg-primary outline-primary"
                : "bg-[#D7D9DF] outline-[#D7D9DF]"
            } hover:bg-[#c08a2c] rounded-[39px] outline outline-2 outline-offset-4 transition-all duration-150 `}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
