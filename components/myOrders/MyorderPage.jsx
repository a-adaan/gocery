import Link from "next/link";
import History from "./History";
import Upcoming from "./Upcoming";

export default function MyorderPage() {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-[735px_380px] gap-[90px] mt-[41px]">
      <div>
        <p className="border-b border-border w-full text-lg font-bold p-2">
          Upcoming
        </p>
        <Upcoming />
      </div>
      <div>
        <p className="border-b border-border w-full text-lg font-bold p-2">
          History
        </p>
        <div className="mt-[42px]">
          <p className="text-text text-base font-bold mb-3">January</p>
          <Link href={"/order-received"}>
            <History />
          </Link>
        </div>
      </div>
    </div>
  );
}
