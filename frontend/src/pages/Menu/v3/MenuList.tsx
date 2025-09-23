import React, { useState } from "react";
import type MenuItem from "../../../types/menuItem";
import SpecialMenu from "./SpecialMenu";
import Category from "./Category";
import AllMenu from "./AllMenu";

interface Props {
  menu: MenuItem[];
}
const MenuList: React.FC<Props> = ({ menu }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

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
        <SpecialMenu menu={menu} />
      </div>

      <div className="flex items-center justify-between">
        {/* Left side heading */}
        <h2 className="p-5 font-sans text-xl font-bold">All Time</h2>
        {/* Right side nav */}
        <Category
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      <AllMenu menu={menu} selectedCategory={selectedCategory} />
    </div>
  );
};

export default MenuList;
