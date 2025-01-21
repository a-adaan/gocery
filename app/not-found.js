import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Link from "next/link";
import "./globals.css";
import Image from "next/image";
import { Pacifico } from "next/font/google";
const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export default function NotFound() {
  return (
    <html lang="en" className="bg-white">
      <body suppressHydrationWarning>
        <div className="w-full h-[140px] lg:h-[114px] bg-white flex items-center shadow-md">
          <Navbar />
        </div>
        <div className="container flex flex-col items-center lg:mt-[100px] mt-16 gap-5">
          <Image
            src={"/image/notfound/hey.svg"}
            width={700}
            height={700}
            alt="hey"
            className="w-[111px] h-[75px]"
          />

          <p className="text-primary text-base font-semibold">
            What are you doing here?!
          </p>
          <div className="flex h-[200px] lg:h-[350px]">
            <div className="h-full flex items-center">
              <p
                className={`text-primary text-[120px] lg:text-[256px] ${pacifico.className}`}
              >
                4
              </p>
            </div>
            <div className="h-full flex items-center">
              <Image
                src={"/image/notfound/Goodies.svg"}
                width={700}
                height={700}
                alt="hey"
                className="w-[120px] h-[120px] lg:w-[232px] lg:h-[166px] mt-8"
              />
            </div>
            <div className="h-full flex items-center">
              <p
                className={`text-primary text-[120px] lg:text-[256px] ${pacifico.className}`}
              >
                4
              </p>
            </div>
          </div>
          <button className="w-[150px] h-[51px] text-white font-bold text-lg bg-primary hover:bg-[#c08a2c] rounded-[39px] outline outline-2 outline-offset-4 outline-[#FE9F00]">
            <Link href="/home">Return Home</Link>
          </button>
        </div>
        <Footer />
      </body>
    </html>
  );
}
