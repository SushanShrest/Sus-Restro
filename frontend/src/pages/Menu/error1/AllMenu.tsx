import React from "react";
import Slider from "react-slick";
import FoodCard from "../../components/card";
import CategoryTabs from "./CategoryTabs";

interface MenuItem {
  id: number;
  title: string;
  price: number;
  rating: number;
  category: string;
  todaySpecial: boolean;
  image: string;
}

interface Props {
  menu: MenuItem[];
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
}

const AllMenu: React.FC<Props> = ({ menu, selectedCategory, setSelectedCategory }) => {
  const filteredMenu =
    selectedCategory === "All"
      ? menu
      : menu.filter(
          (item) =>
            item.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  const settings = {
    dots: false,
    infinite: filteredMenu.length > 5, // infinite only if enough slides
    speed: 500,
    slidesToShow: Math.min(filteredMenu.length, 5),
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1850, settings: { slidesToShow: Math.min(filteredMenu.length, 5) } },
      { breakpoint: 1550, settings: { slidesToShow: Math.min(filteredMenu.length, 4) } },
      { breakpoint: 1250, settings: { slidesToShow: Math.min(filteredMenu.length, 3) } },
      { breakpoint: 950, settings: { slidesToShow: Math.min(filteredMenu.length, 2) } },
      { breakpoint: 650, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-full px-4 py-5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold">All Time</h2>
        <CategoryTabs
          categories={["All", "Starter", "Veg", "Non-Veg", "Combos", "Drinks"]}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>

      {filteredMenu.length === 0 ? (
        <p className="text-center text-xl py-10">Not available at the moment</p>
      ) : (
        <Slider {...settings}>
          {filteredMenu.map((item) => (
            <div key={item.id} className="px-2">
              <FoodCard
                image={item.image}
                title={item.title}
                description={item.category}
                price={`$${item.price}`}
                rating={item.rating}
              />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default AllMenu;
