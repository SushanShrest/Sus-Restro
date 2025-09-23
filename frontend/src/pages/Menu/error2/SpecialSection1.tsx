import React from "react";
import FoodCard from "../../../components/card";
import AllMenu1 from "./AllMenu1";
import type MenuItem from "../types";
import CategoryTabs from "./CategoryTabs1";

interface Props {
  menu: MenuItem[];
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
}

const SpecialSection1: React.FC<Props> = ({
  menu,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="bg-gradient-to-br from-orange-800 to-stone-900 text-white dark:text-gray-200">
      <h1 className=" p-4 font-sans text-5xl font-bold leading-tight">
        Our Menu
      </h1>
      <h2 className=" pl-5 font-sans text-base leading-tight">
        Our finest chefs provides finest dishes.
      </h2>
      <h2 className="p-5 font-sans text-xl font-bold">Today's Special</h2>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 py-2 w-max">
          {menu
            .filter((item) => item.todaySpecial)
            .map((item) => (
              <FoodCard
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.category}
                price={`$${item.price}`}
                rating={item.rating}
              />
            ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        {/* Left side heading */}
        <h2 className=" p-5 font-sans text-xl font-bold">All Time</h2>
        {/* Right side nav */}
        <CategoryTabs
          categories={["All", "Starter", "Veg", "Non-Veg", "Combos", "Drinks"]}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
        <AllMenu1
          menu={menu}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
    </div>
  );
};

export default SpecialSection1;
