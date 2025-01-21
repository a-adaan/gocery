import Image from "next/image";
import Nothing from "../common/Nothing";

function ReviewCard() {
  return (
    <div className="w-full max-w-md p-4 bg-white">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Image
          src={"/image/product/seller.jpg"}
          width={700}
          height={700}
          alt="seller"
          className="w-10 h-10 object-center rounded-full "
        />
        <div>
          <h3 className="text-base font-semibold text-gray-800">
            Courtney Henry
          </h3>

          <div className="rating rating-xs rating-half my-2">
            {[...Array(10)].map((_, index) => (
              <input
                key={index}
                type="checkbox"
                name="rating-10"
                className={`mask mask-star-2 ${
                  index % 2 === 0 ? "mask-half-1" : "mask-half-2 mr-1"
                } bg-rating`}
                disabled
                defaultChecked={index === 7} // Set the defaultChecked for the 8th star
              />
            ))}
          </div>
        </div>
      </div>

      {/* Review Content */}
      <p className="mt-3 text-sm text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras urna
        pulvinar imperdiet ridiculus. Ipsum in quis pulvinar tempus diam et, mi.
        Sed mauris sit nulla lacus. Faucibus morbi lectus et sed.
      </p>

      {/* Date */}
      <p className="mt-2 text-xs text-green-600 font-medium">Jan 6, 2022</p>
    </div>
  );
}

function Rating() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-auto ">
      <div className="flex w-full items-start mt-11 justify-between lg:justify-normal lg:gap-9">
        <div className="flex flex-col w-[60%] gap-2 lg:gap-4">
          {[5, 4, 3, 2, 1].map((value, index) => (
            <div key={index} className="flex items-center gap-2">
              <p className="text-sm lg:text-base text-text">{value}</p>
              <progress
                className="progress w-full lg:w-72 bg-[#EBECEF] text-rating"
                value={[30, 70, 40, 30, 10][index]}
                max="100"
              ></progress>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center mt-7">
          <p className="text-3xl lg:text-5xl font-bold text-text">4.8</p>

          <div className="rating rating-sm rating-half my-2">
            {[...Array(10)].map((_, index) => (
              <input
                key={index}
                type="checkbox"
                name="rating-10"
                className={`mask mask-star-2 ${
                  index % 2 === 0 ? "mask-half-1" : "mask-half-2 mr-1"
                } bg-rating`}
                disabled
                defaultChecked={index === 6}
              />
            ))}
          </div>

          <p className="text-base font-normal text-[#76777D]">3.8k+ reviewed</p>
        </div>
      </div>
      <div className="mt-[25px]">
        {Array(5)
          .fill("data")
          .map((_, index) => (
            <ReviewCard key={index} />
          ))}
        <button className="w-[139px] h-[28px] text-white font-semibold mt-[51px] text-base bg-primary hover:bg-[#c08a2c] rounded-[39px] outline outline-1 outline-offset-2 outline-[#FE9F00]">
          See More
        </button>
      </div>
    </div>
  );
}

export default function ReviewRating() {
  const review = [];
  return (
    <div className="container mb-[122px] mt-[57px]">
      <h3 className="border-b border-gray-200 font-semibold  text-text pb-3 text-base">
        Ratings and Review
      </h3>

      {review ? (
        <Rating />
      ) : (
        <Nothing img="/image/product/norating.svg" title="No Rating yet" />
      )}
    </div>
  );
}
