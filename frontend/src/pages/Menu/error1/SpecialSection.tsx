import React from "react";
import FoodCard from "../../components/card";

interface Props {
  menu: {
    id: number;
    image: string;
    title: string;
    category: string;
    price: number;
    rating: number;
    todaySpecial: boolean;
  }[];
}

const SpecialSection: React.FC<Props> = ({ menu }) => (
  <div className="bg-gradient-to-br from-orange-800 to-stone-900 text-white dark:text-gray-200">
    <h1 className="p-4 font-sans text-5xl font-bold leading-tight">Our Menu</h1>
    <h2 className="pl-5 font-sans text-base leading-tight">
      Our finest chefs provide the finest dishes.
    </h2>
    <h2 className="p-5 font-sans text-xl font-bold">Today's Special</h2>
    <div className="overflow-x-auto scrollbar-hide">
      {/* <div className="flex gap-4 px-4 py-2 w-max"> */}
        <div className="flex gap-4 px-4 py-2 w-max">
        {menu
          .filter((item) => item.todaySpecial === true)
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
  </div>
);

export default SpecialSection;
