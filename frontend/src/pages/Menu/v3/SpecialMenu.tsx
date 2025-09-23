import React from "react";
import type MenuItem from "../../../types/menuItem";
import FoodCard from "../../../components/card";

interface Props {
  menu: MenuItem[];
}
const SpecialMenu: React.FC<Props> = ({ menu }) => {
  return (
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
  );
};

export default SpecialMenu;
