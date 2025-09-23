import React, { useEffect, useState } from "react";
// import Hero from "../Menu/hero";
import SpecialSection from "../SpecialSection";
import AllMenu from "./AllMenu";
import Hero from "./Hero";

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
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching menu:", err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-lg dark:text-white animate-pulse">Loading menu...</p>
      </div>
    );

  return (
    <section className="dark:bg-neutral-800 dark:text-white">
      <Hero />
      <SpecialSection menu={menu} />
      <AllMenu
        menu={menu}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </section>
  );
};

export default Menu;
