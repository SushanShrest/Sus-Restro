import React, { useEffect, useState } from "react";
import Hero1 from "./error2/Hero1";
import SpecialSection1 from "./SpecialSection1";
import type MenuItem from "./types"; // important modular programming - interface

const Menu1: React.FC = () => {
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

  if (loading)
    return (
      <p className="dark:bg-neutral-800 dark:text-white text-center mt-10">
        loading
      </p>
    );
  return (
    <section className="dark:bg-neutral-800 dark:text-white">
      <Hero1 />
      <SpecialSection1
        menu={menu}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </section>
  );
};

export default Menu1;
