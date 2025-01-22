import CopyButton from "./CopyButton";

export default function VoucherCard({ card, voucher }) {
  return (
    <div
      className="w-[472px] h-[149px] bg-no-repeat bg bg-contain rounded-xl grid grid-rows-[57px_92px] relative"
      style={{ backgroundImage: `url("${card.bgimg}")` }}
    >
      <div
        className="absolute left-6 top-[57px] mx-auto h-0.5 w-[424px] border-dashed border-t-2 "
        style={{ borderColor: `${card.color}` }}
      ></div>
      {/* 1st row */}
      <div className="flex items-center justify-between px-6">
        <div
          style={{ backgroundImage: `url("${card.ribon}")` }}
          className="flex justify-center items-center w-[144px] h-[31px] bg-contain bg-no-repeat "
        >
          <p className="text-white text-lg font-bold">{voucher.value}</p>
        </div>
        <div>
          <p
            className=" text-base font-semibold"
            style={{ color: `${card.color}` }}
          >
            Get {voucher.value} {voucher.taka} on any product
          </p>
        </div>
      </div>
      {/* 2nd row */}
      <div className="flex items-center justify-between px-[55px]">
        <div>
          <span
            className="text-lg font-bold mr-3"
            style={{ color: `${card.color}` }}
          >
            {voucher.taka}
          </span>
          <span
            className="text-[40px]  font-bold"
            style={{ color: `${card.color}` }}
          >
            {voucher.value}
          </span>
        </div>
        <div className="flex flex-col items-center gap-[11px]">
          <CopyButton code={voucher.code} color={card.color} />
          <p className="text-text text-xs font-medium">{voucher.expire}</p>
        </div>
      </div>
    </div>
  );
}
