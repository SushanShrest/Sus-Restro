import React from "react";

interface Props {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
}
const Category: React.FC<Props> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="flex gap-4 pr-5 text-xl overflow-x-auto scrollbar-hide">
      {["All", "Starter", "Veg", "Non-Veg", "Combos", "Drinks"].map((cat) => (
        <span
          key={cat}
          className={`cursor-pointer hover:text-orange-500 ${
            selectedCategory === cat ? "text-orange-500 font-bold" : ""
          }`}
          onClick={() => setSelectedCategory(cat)}
        >
          {cat}
        </span>
      ))}
    </div>
  );
};

export default Category;
