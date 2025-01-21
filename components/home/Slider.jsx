import Image from "next/image";

export default function Slider({ img }) {
  return (
    <>
      <Image
        src={img}
        alt="images"
        width={700}
        height={700}
        className="w-full h-[176px] md:h-[300px] lg:h-[556px] object-cover "
      />
    </>
  );
}
