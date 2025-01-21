import AdsCard from "./AdsCard";
import Category from "./Category";
import Hero from "./Hero";
import JustForU from "./JustForU";
import NewIn from "./NewIn";
import Popular from "./Popular";
import Recommended from "./Recommended";

export default function HomePage() {
  return (
    <div className="container">
      <Hero />
      <Category />
      <Popular />
      <div className="flex flex-col lg:flex-row items-center mt-[72px] gap-5">
        <AdsCard />
        <AdsCard />
      </div>
      <NewIn />
      <div className="flex flex-col lg:flex-row items-center mt-[72px] gap-5">
        <AdsCard />
        <AdsCard />
      </div>
      <Recommended />
      <JustForU />
    </div>
  );
}
