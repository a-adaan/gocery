import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container bg-white text-black mt-[70px] mb-[100px] lg:mb-[170px] p-3 md:p-4 lg:p-0">
      <div className="divider mb-[42px]"></div>
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[auto_auto_270px_248px_182px] gap-6 text-sm">
        {/* <!-- Customer Service --> */}
        <div>
          <h3 className="font-bold text-base mb-6">CUSTOMER SERVICE</h3>
          <ul className="space-y-4 text-[/484A51] text-base">
            <li>
              <Link href="/" className="hover:text-gray-900 ">
                Refund and Return Policy
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-gray-900">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-gray-900">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-gray-900">
                Cookies Policy
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-gray-900">
                How to Place an Order
              </Link>
            </li>
          </ul>
        </div>

        {/* <!-- Information --> */}
        <div>
          <h3 className="font-bold text-base mb-6">INFORMATION</h3>
          <ul className="space-y-4 text-[/484A51] text-base">
            <li>
              <Link href="/" className="hover:text-gray-900">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-gray-900">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-gray-900">
                Store Locator
              </Link>
            </li>
          </ul>
        </div>

        {/* <!-- Grocery --> */}
        <div>
          <h3 className="font-bold text-base mb-6">GROCERY</h3>
          <address className="not-italic space-y-0 text-[/484A51] text-base">
            <p>7000 N Las Vegas Blvd</p>
            <p>Las Vegas</p>
            <p>North Carolina</p>
            <p>Postal Code 89115</p>
            <p>Phone Number (702) 599-5199</p>
            <p>Country United States</p>
          </address>
        </div>

        {/* <!-- Download Our App --> */}
        <div>
          <h3 className="font-bold text-text text-base mb-6">
            DOWNLOAD OUR APP
          </h3>
          <div className="space-y-4 flex flex-col">
            <Link href="/" className="block">
              <Image
                src="/image/footer/google.svg"
                width={176}
                height={53}
                alt="Google Play"
              />
            </Link>
            <Link href="/" className="block">
              <Image
                src="/image/footer/apple.svg"
                width={176}
                height={53}
                alt="App Store"
              />
            </Link>
          </div>
        </div>

        {/* <!-- Follow Us --> */}
        <div>
          <h3 className="font-bold text-base text-text mb-6">FOLLOW US</h3>
          <div className="flex items-center space-x-7">
            <Link href="/" className="block">
              <Image
                src="/image/footer/fb.svg"
                width={30}
                height={30}
                alt="Facebook"
              />
            </Link>
            <Link href="/" className="block">
              <Image
                src="/image/footer/insta.svg"
                width={30}
                height={30}
                alt="Instagram"
              />
            </Link>
            <Link href="/" className="block">
              <Image
                src="/image/footer/LinkedIn.svg"
                width={30}
                height={30}
                alt="LinkedIn"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
