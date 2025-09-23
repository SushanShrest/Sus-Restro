import React from "react";
import Slider from "./Slider";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import car1 from "../../../assets/car1.png";
import car2 from "../../../assets/car2.png";
import car3 from "../../../assets/car3.png";
import car4 from "../../../assets/car4.png";
import { useTheme } from "../../../providers/ThemeProvider";

const Hero: React.FC = () => {
  const { darkMode } = useTheme();

  console.log(darkMode, "darkmode");

  // const modeClassName = darkMode ? "bg-blue !important" : "bg-red";
  const modeClassName = darkMode
    ? "!bg-blue text-red text-3xl"
    : "!bg-red text-black text-5xl";

  <p className={`${modeClassName} bg-green text-3xl`}>hello world</p>;

  return (
    <section className="dark:bg-neutral-800 dark:text-white">
      {/* Top slider */}

      <p className={`${modeClassName} text-3xl`}>hello world</p>

      <div className="bg-gradient-to-br from-orange-800 to-stone-900">
        <Slider images={[car1, car2, car3, car4]} />
      </div>

      {/* Left & Right content */}
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center py-12">
        <HeroLeft />
        <HeroRight />
      </div>
    </section>
  );
};

export default Hero;
