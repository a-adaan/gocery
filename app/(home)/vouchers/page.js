import VoucherCard from "@/components/voucher/VoucherCard";

export default function Vouchers() {
  const cardDesigns = [
    {
      bgimg: "/image/voucher/01.svg",
      ribon: "/image/voucher/ribon01.svg",
      color: "#1BBC9B",
    },
    {
      bgimg: "/image/voucher/02.svg",
      ribon: "/image/voucher/ribon02.svg",
      color: "#9E63DA",
    },
    {
      bgimg: "/image/voucher/03.svg",
      ribon: "/image/voucher/ribon03.svg",
      color: "#458DE3",
    },
    {
      bgimg: "/image/voucher/04.svg",
      ribon: "/image/voucher/ribon04.svg",
      color: "#FE9F00",
    },
  ];

  const vouchers = [
    {
      id: "01",
      taka: "off",
      value: "10%",
      code: "SAVE2025",
      expire: "07.11.2025 08:30 PM",
    },
    {
      id: "02",
      taka: "tk",
      value: "100",
      code: "DISC100",
      expire: "07.11.2025 08:30 PM",
    },
    {
      id: "03",
      taka: "tk",
      value: "80",
      code: "OFFER80",
      expire: "07.11.2025 08:30 PM",
    },
    {
      id: "04",
      taka: "off",
      value: "30%",
      code: "SAVE30",
      expire: "07.11.2025 08:30 PM",
    },
    {
      id: "05",
      taka: "tk",
      value: "50",
      code: "DISC50",
      expire: "08.12.2025 06:00 PM",
    },
  ];

  return (
    <div className="container border border-border mt-10 rounded-2xl">
      <p className="w-full text-center text-2xl font-bold my-8">
        List of Vouchers
      </p>
      <div className="grid gap-8 p-10 grid-cols-1 lg:grid-cols-2">
        {vouchers.map((voucher, index) => {
          const cardDesign = cardDesigns[index % cardDesigns.length]; // Repeat design logic
          return (
            <VoucherCard key={voucher.id} card={cardDesign} voucher={voucher} />
          );
        })}
      </div>
    </div>
  );
}
