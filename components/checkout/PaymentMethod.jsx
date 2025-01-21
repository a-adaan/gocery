import Image from "next/image";

function PaymentCards({ payment }) {
  return (
    <div className="h-full w-[105px] flex items-center justify-between flex-col cursor-pointer">
      <div
        className=" w-[79px] h-[79px] rounded-[22px] flex items-center justify-center"
        style={{ backgroundColor: `${payment.color}` }}
      >
        <Image src={payment.img} width={52} height={52} alt={payment.title} />
      </div>
      <p className="text-text text-base text-center font-normal">
        {payment.title}
      </p>
    </div>
  );
}

export default function PaymentMethod() {
  const methods = [
    {
      title: "Credit/Debit Card",
      img: "/image/payment/01.svg",
      color: "#D2F0F2",
    },
    {
      title: "Connect Wallet",
      img: "/image/payment/02.svg",
      color: "#F4DEDA",
    },
    { title: "Cash", img: "/image/payment/03.svg", color: "#F1EAD1" },
    {
      title: "Mobile Banking",
      img: "/image/payment/04.svg",
      color: "#F3D9FB",
    },
  ];
  return (
    <div className="w-full border border-border rounded-2xl p-8">
      <p className="text-base text-text font-bold">Select Payment Method</p>
      <div className="flex items-center justify-evenly h-[150px] gap-10 lg:gap-[69px] mt-[58px] overflow-x-auto no-scrollbar">
        {methods.map((method, index) => (
          <PaymentCards payment={method} key={index} />
        ))}
      </div>
    </div>
  );
}
