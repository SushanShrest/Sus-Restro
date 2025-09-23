import React from "react";

interface Props {
  categories: string[];
  selected: string;
  onSelect: (cat: string) => void;
}

const CategoryTabs: React.FC<Props> = ({ categories, selected, onSelect }) => (
  <div className="flex gap-4 pr-5 text-xl overflow-x-auto scrollbar-hide">
    {categories.map((cat) => (
      <span
        key={cat}
        className={`cursor-pointer hover:text-orange-500 ${
          selected === cat ? "text-orange-500 font-bold" : ""
        }`}
        onClick={() => onSelect(cat)}
      >
        {cat}
      </span>
    ))}
  </div>
);

export default CategoryTabs;
