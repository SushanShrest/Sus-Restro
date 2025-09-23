import React, { useEffect, useState } from "react";
import type MenuItem from "../../../types/menuItem";
import Hero from "./Hero";
import MenuList from "./MenuList";
import { Config } from "../../../Config";

const Menu: React.FC = () => {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${Config.BASE_URL}/menu`)
      .then((res) => res.json()) // ✅ call res.json()
      .then((data) => {
        setMenu(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching menu:", err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <p className="dark:bg-neutral-800 dark:text-white text-center text-5xl">
        loading.....
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
