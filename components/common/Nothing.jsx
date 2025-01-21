import Image from "next/image";

export default function Nothing({ img, title }) {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <Image
        src={img}
        width={700}
        height={700}
        alt="No Rating"
        className="mt-[83px] w-[480px] h-[402px]"
      />
      <p className="text-2xl font-bold text-text mt-[45px]">{title}</p>
      <p className="text-center w-full lg:w-[480px] mt-[14px] text-sm font-normal text-[#76777D]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
        adipiscing commodo sit urna, curabitur. Placerat massa viverra{" "}
      </p>
    </div>
  );
}
