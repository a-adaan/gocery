"use client";
import { useForm } from "react-hook-form";

export default function FeedBack() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const selectedRating = watch("rating", ""); // Watch the 'rating' field, default value set to an empty string

  const onSubmit = (data) => {
    console.log(data); // Log the form data on submit
  };

  return (
    <div className="w-full mx-auto bg-white rounded-2xl  p-6">
      <h2 className="text-center text-sm text-[#A3A5A8] font-normal mb-4">
        Tell us your feedback
      </h2>
      <p className="text-center text-text text-base mb-6">
        Let us know how you feel about our restaurant's food and service
      </p>
      {/* Feedback Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Star Rating */}
        <div className="rating rating-lg rating-half my-4 flex justify-center">
          {[...Array(10)].map((_, index) => {
            const value = ((index + 1) / 2).toString(); // Each star value as a string (e.g., "0.5", "1.0", etc.)
            return (
              <input
                key={index}
                type="radio"
                value={value}
                {...register("rating", { required: "Rating is required" })}
                className={`mask mask-star-2 ${
                  index % 2 === 0 ? "mask-half-1" : "mask-half-2 mr-2"
                } bg-rating`}
                onChange={() => setValue("rating", value)} // Update the rating value in the form state
                checked={selectedRating === value} // Dynamically set the checked state
              />
            );
          })}
        </div>
        {errors.rating && (
          <p className="text-red-500 text-sm text-center mt-1">
            {errors.rating.message}
          </p>
        )}

        {/* Feedback Textarea */}
        <div className="my-6">
          <textarea
            {...register("feedback", { required: "Feedback is required" })}
            placeholder="Your feedback here..."
            className="w-full h-[129px] border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
          {errors.feedback && (
            <p className="text-red-500 text-sm mt-1">
              {errors.feedback.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full h-[51px] text-white font-bold text-lg bg-primary hover:bg-[#c08a2c] rounded-[39px] outline outline-2 outline-offset-4 outline-[#FE9F00]"
        >
          Submit
        </button>
      </form>

      {/* Skip Button */}
      <button className="mt-4 text-center w-full text-primary hover:underline">
        Skip
      </button>
    </div>
  );
}
