import "../globals.css";
import { Montserrat } from "next/font/google";

export const metadata = {
  title: "Authentication - E-Commerce",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function AuthLayout({ children }) {
  return (
    <html lang="en" className="bg-white">
      <body
        className={`antialiased ${montserrat.className}`}
        suppressHydrationWarning
      >
        <div className="flex justify-center items-center bg-white lg:bg-[#f9fafe] md:h-screen pb-5 w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
