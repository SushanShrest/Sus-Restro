import React, { useEffect, useState } from "react";
import type MenuItem from "../types";
import Hero from "./Hero";
import MenuList from "./MenuList";

const Menu: React.FC = () => {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

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
      <p className="dark:bg-neutral-800 dark:text-whitetext-center mt-10">
        loading
      </p>
    );

  return (
    <section className="dark:bg-neutral-800 dark:text-white">
      <Hero />
      <MenuList menu={menu} />
    </section>
  );
};

export default Menu;
