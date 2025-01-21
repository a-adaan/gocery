import Image from "next/image";

export default function SearchBox() {
  return (
    <label className="input input-bordered rounded-[33px] w-full lg:w-[360px] h-[46px] bg-[#F5F5F7] flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-80"
      >
        <path
          fillRule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clipRule="evenodd"
        />
      </svg>
      <input type="text" className="grow" placeholder="Search" />
      <button>
        <Image
          src={"/image/navbar/filter.svg"}
          width={20}
          height={17}
          alt="icon"
        />
      </button>
    </label>
  );
}
