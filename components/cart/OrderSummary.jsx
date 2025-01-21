import NextButton from "./NextButton";

export default function OrderSummary({ handleNext = null, isLastStep = null }) {
  return (
    <div className="w-full bg-white rounded-2xl border border-[#EBECEF] p-8">
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-900 mb-[38px]">
        Order Summary
      </h2>

      {/* Items List */}
      <div className="space-y-2">
        <div className="flex justify-between text-gray-700">
          <span>2xBanana</span>
          <span>$04.00</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>2xStrawberry</span>
          <span>$06.00</span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-4"></div>

      {/* Subtotal, Discount, Delivery Fee */}
      <div className="space-y-2 text-gray-700">
        <div className="flex justify-between font-bold">
          <span>Sub Total</span>
          <span>$10.00</span>
        </div>
        <div className="flex justify-between text-gray-500">
          <span>Discount</span>
          <span>- $01.00</span>
        </div>
        <div className="flex justify-between text-gray-500">
          <span>Delivery Fee</span>
          <span>$01.99</span>
        </div>
      </div>

      {/* Promo Code Input */}
      <div className="flex items-center mt-4">
        <input
          type="text"
          placeholder="Promo Code"
          className="flex-1 h-10 px-3 text-sm border bg-white border-gray-300 rounded-l-[39px] focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
        />
        <button className="h-10 px-4 bg-primary text-white text-sm font-semibold rounded-r-[39px] hover:bg-orange-500">
          Apply
        </button>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-4"></div>

      {/* Total */}
      <div className="flex justify-between text-lg font-bold text-gray-900">
        <span>Total</span>
        <span>$10.99</span>
      </div>

      {/* Terms and Conditions */}
      <p className="text-xs text-gray-500 mt-2">
        By completing this order, I agree to all{" "}
        <span className="text-primary cursor-pointer hover:underline">
          terms and Conditions
        </span>
      </p>

      {/* Process to Pay Button */}
      <NextButton handleNext={handleNext} isLastStep={isLastStep} />
    </div>
  );
}
