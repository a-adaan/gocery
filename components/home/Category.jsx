import Image from "next/image";
import Link from "next/link";

function CategoryCards({ category }) {
  return (
    <div className="w-[100px] h-[100px] lg:w-[102.4px] lg:h-[136.4px] flex items-center justify-center flex-col gap-3 cursor-pointer">
      <div
        className=" w-[74px] h-[100px] lg:w-[102.4px] lg:h-[102.4px] rounded-[22px] flex items-center justify-center"
        style={{ backgroundColor: `${category.color}` }}
      >
        <Image src={category.img} width={52} height={52} alt={category.title} />
      </div>
      <p className="text-[#76777D] text-xs lg:text-lg font-normal">
        {category.title}
      </p>
    </div>
  );
}

export default function Category() {
  const categories = [
    { title: "fruits", img: "/image/category/01.svg", color: "#D2F0F2" },
    { title: "Vegitables", img: "/image/category/02.svg", color: "#F4DEDA" },
    { title: "Greens", img: "/image/category/03.svg", color: "#F1EAD1" },
    { title: "Dairy", img: "/image/category/04.svg", color: "#F3D9FB" },
    { title: "Meat", img: "/image/category/05.svg", color: "#EDF2CD" },
    { title: "Dairy", img: "/image/category/06.svg", color: "#F3D9FB" },
    { title: "Meat", img: "/image/category/07.svg", color: "#D9FBDB" },
  ];
  return (
    <div className="mt-12 ">
      <div className="flex mb-8 items-center justify-between">
        <p className="text-[30px] text-[#1A1D26] font-bold">Categories</p>
        <button className="text-base text-[#FE9F00] font-normal hover:text-[#1A1D26]">
          SEE ALL
        </button>
      </div>
      <div className="flex lg:grid lg:grid-cols-7 w-full overflow-x-auto gap-5 no-scrollbar lg:gap-[80px]">
        {categories.map((cat, index) => (
          <Link key={index} href={`/category/${cat.title}`}>
            <CategoryCards category={cat} />
          </Link>
        ))}
      </div>
    </div>
  );
}
