import Image from "next/image";
import { FaStar, FaStarHalf } from "react-icons/fa";
import CardSlider from "../common/CardSlider";
import ProductCounter from "../common/ProductCounter";
import AddtoCart from "./AddtoCart";
import SellerCard from "./SellerCard";
import ReviewRating from "./ReviewRating";
import ProductImg from "./ProductImg";

export default async function ProductDetailsPage() {
  return (
    <>
      {/* Product Details Section */}
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6 mt-[37px]">
        {/* Product Images */}
        <ProductImg />

        {/* Product Information */}
        <div>
          <h2 className="text-4xl sm:text-3xl font-normal uppercase mb-2 text-text">
            product name
          </h2>
          <p className="text-sm font-normal text-gray-500 ">
            Fruits • By Weight/kg
          </p>
          <div className="flex mb-4 mt-4">
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
                  defaultChecked={index === 4}
                />
              ))}
            </div>

            <div className="text-sm font-semibold text-text ml-3">99+</div>
          </div>

          <div className=" mb-1 space-y-2 mt-4">
            <p className="text-[30px] sm:text-2xl text-[#67CB19] font-bold">
              product discount price
            </p>
            <div className="flex items-center">
              <p className=" text-base sm:text-lg text-[#A3A5A8] line-through">
                product price
              </p>
              <span className="text-sm m-2 font-semibold text-text">-50%</span>
            </div>
          </div>
          <div className="flex items-center mt-6 lg:gap-[17px] gap-4">
            <div className="h-[51px] w-1/2 md:w-1/3 lg:w-[143px]">
              <ProductCounter />
            </div>
            <AddtoCart />
          </div>
          <SellerCard />
        </div>
      </div>

      {/* Product Details Section */}
      <div className="container pb-16 mt-[57px]">
        <h3 className="border-b border-gray-200 font-semibold  text-text pb-3 text-base">
          Details
        </h3>

        <div className="text-gray-600 w-full mt-3 text-justify">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
            netus leo fermentum vitae eget. Velit egestas faucibus et odio
            dapibus in pharetra facilisis. Varius diam quis tincidunt etiam
            auctor malesuada donec sit. Blandit amet aliquam sagittis turpis
            lorem penatibus venenatis. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Pretium netus leo fermentum vitae eget. Velit
            egestas faucibus et odio dapibus in pharetra facilisis. Varius diam
            quis tincidunt etiam auctor malesuada donec sit. Blandit amet
            aliquam sagittis turpis lorem penatibus venenatis. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Pretium netus leo fermentum
            vitae eget. Velit egestas faucibus et odio dapibus in pharetra
            facilisis. Varius diam quis tincidunt etiam auctor malesuada donec
            sit. Blandit amet aliquam sagittis turpis lorem penatibus venenatis.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
            netus leo fermentum vitae eget. Velit egestas faucibus et odio
            dapibus in pharetra facilisis. Varius diam quis tincidunt etiam
            auctor malesuada donec sit. Blandit amet aliquam sagittis turpis
            lorem penatibus venenatis.
          </p>
        </div>
      </div>
      {/* review and rating */}
      <ReviewRating />

      <div className="w-full h-[14px] bg-[#EBECEF]"></div>

      {/* Related Products */}
      <div className="container mt-[50px]">
        <p className="text-[30px] text-[#1A1D26] font-bold">
          You Might Also Like
        </p>
        <CardSlider />
      </div>
    </>
  );
}
