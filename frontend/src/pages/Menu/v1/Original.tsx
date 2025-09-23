import React, { useEffect, useState } from "react";
import menuimg from "../../assets/menuimage.jpg";
import FoodCard from "../../../components/card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface MenuItem {
  id: number;
  title: string;
  price: number;
  rating: number;
  category: string;
  todaySpecial: boolean;
  image: string;
}
const Menu: React.FC = () => {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json()) // ✅ call res.json()
      .then((data) => {
        setMenu(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching menu:", err);
        setLoading(false);
      });
  }, []);

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

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 6, // this is for 2180+ screen size
  //   slidesToScroll: 4,
  //   responsive: [
  //     {
  //       breakpoint: 1850,
  //       settings: {
  //         slidesToShow: 5,
  //       },
  //     },
  //     {
  //       breakpoint: 1550,
  //       settings: {
  //         slidesToShow: 4,
  //       },
  //     },
  //     {
  //       breakpoint: 1250,
  //       settings: {
  //         slidesToShow: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 950,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 450,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // };
  const filteredMenu =
    selectedCategory === "All"
      ? menu
      : menu.filter(
          (item) =>
            item.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  if (loading)
    return (
      <p className="dark:bg-neutral-800 dark:text-whitetext-center mt-10">
        loading
      </p>
    );
  return (
    <section className="dark:bg-neutral-800 dark:text-white">
      {/* left-side */}
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center py-12 gap-8">
        <img src={menuimg} alt="menuimg" className="h-100 w-100" />
        {/* right Side */}
        <div>
          <h1 className="text-5xl font-bold leading-tight mt-4">Lorem Ipsum</h1>
          <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
            <br />
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
      </div>
      {/* card section */}
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
          <h2 className="p-5 font-sans text-xl font-bold">All Time</h2>

          {/* Right side nav */}
          <div className="flex gap-4 pr-5 text-xl overflow-x-auto scrollbar-hide">
            {["All", "Starter", "Veg", "Non-Veg", "Combos", "Drinks"].map(
              (cat) => (
                <span
                  key={cat}
                  className={`cursor-pointer hover:text-orange-500 ${
                    selectedCategory === cat ? "text-orange-500 font-bold" : ""
                  }`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </span>
              )
            )}
          </div>

          {/* <div className="flex gap-4 pr-5 text-xl">
            <span className="cursor-pointer hover:text-orange-500">All</span>
            <span className="cursor-pointer hover:text-orange-500">
              Starter
            </span>
            <span className="cursor-pointer hover:text-orange-500">Veg</span>
            <span className="cursor-pointer hover:text-orange-500">
              Non-Veg
            </span>
            <span className="cursor-pointer hover:text-orange-500">Combos</span>
            <span className="cursor-pointer hover:text-orange-500">Drinks</span>
          </div> */}
        </div>
        
        <div className="px-7 py-5">
          {filteredMenu.length === 0 ? (
            <p className="text-center text-xl py-10">
              Not available at the moment
            </p>
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

        {/* <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 px-4 py-2 w-max">
            <Slider {...settings}>
              {menu.map((item) => (
                <FoodCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  description={item.category}
                  price={`$${item.price}`}
                  rating={item.rating}
                />
              ))}
            </Slider>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Menu;
