"use client";
import { useState } from "react";
import OrderSummary from "../cart/OrderSummary";
import Address from "./Address";
import PaymentMethod from "./PaymentMethod";
import CardDetails from "./CardDetails";

export default function CheckoutPage() {
  const stepsArray = ["address", "method", "addCard"];
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const handleNext = () => {
    if (currentStepIndex < stepsArray.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const currentStep = stepsArray[currentStepIndex];
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-[689px_482px] gap-[30px] mt-8">
      <div>
        {currentStep === "address" && <Address />}
        {currentStep === "method" && <PaymentMethod />}
        {currentStep === "addCard" && <CardDetails />}
      </div>
      <div>
        <OrderSummary
          handleNext={handleNext}
          isLastStep={currentStepIndex === stepsArray.length - 1}
        />
      </div>
    </div>
  );
}
