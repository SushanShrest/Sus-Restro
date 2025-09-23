import React from "react";
import type MenuItem from "../../../types/menuItem";
import FoodCard from "../../../components/card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
  menu: MenuItem[];
  selectedCategory: string;
}

const AllMenu: React.FC<Props> = ({ menu, selectedCategory }) => {
  const getSlidesToShow = () => {
    const width = window.innerWidth;
    if (width < 650) return 1;
    if (width < 950) return 2;
    if (width < 1250) return 3;
    if (width < 1550) return 4;
    if (width < 1850) return 5;
    return 5;
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: getSlidesToShow(), // ✅ detect on load
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1850, settings: { slidesToShow: 5 } },
      { breakpoint: 1550, settings: { slidesToShow: 4 } },
      { breakpoint: 1250, settings: { slidesToShow: 3 } },
      { breakpoint: 950, settings: { slidesToShow: 2 } },
      { breakpoint: 650, settings: { slidesToShow: 1 } },
    ],
  };

  const filteredMenu =
    selectedCategory === "All"
      ? menu
      : menu.filter(
          (item) =>
            item.category.toLowerCase() === selectedCategory.toLowerCase()
        );
  return (
    <div className="px-7 py-5">
      {filteredMenu.length === 0 ? (
        <p className="text-center text-xl py-10">Not available at the moment</p>
      ) : (
        <Slider {...settings}>
          {filteredMenu.map((item) => (
            <div key={item.id} className="px-3">
              <div className="flex justify-center">
                <FoodCard
                  image={item.image}
                  title={item.title}
                  description={item.category}
                  price={`$${item.price}`}
                  rating={item.rating}
                />
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default AllMenu;
