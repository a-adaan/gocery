import Image from "next/image";
import Link from "next/link";

export default function SellerCard() {
  return (
    <div className="w-full lg:w-[377px] h-[145px] rounded-2xl border border-[#F8F8FA] mt-[52px]">
      {/* Header */}
      <div className="m-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={"/image/product/seller.jpg"}
            width={700}
            height={700}
            alt="seller"
            className="w-10 h-10 object-center rounded-full border border-primary"
          />
          <p className="text-base font-semibold text-text">Your Banana</p>
        </div>
        <Link
          href={"/seller/123?section=category"}
          className="text-sm font-medium no-underline text-primary hover:text-text"
        >
          Visit Store
        </Link>
      </div>

      {/* Stats */}
      <div className="stats bg-[#F8F8FA] rounded-2xl w-full h-auto grid grid-cols-3 divide-x divide-[#F8F8FA]">
        <div className="stat text-left space-y-2">
          <div className="stat-title text-xs font-normal text-[#76777D]">
            Positive Seller <br />
            Ratings
          </div>
          <div className="stat-value text-base font-medium text-text">93%</div>
        </div>

        <div className="stat text-left space-y-5">
          <div className="stat-title text-xs font-normal text-[#76777D]">
            Ship on Time
          </div>
          <div className="stat-value text-base font-medium text-text">71%</div>
        </div>

        <div className="stat text-left space-y-2">
          <div className="stat-title text-xs font-normal text-[#76777D]">
            Chat response
            <br /> Rate
          </div>
          <div className="stat-value text-base font-medium text-text">92%</div>
        </div>
      </div>
    </div>
  );
}
