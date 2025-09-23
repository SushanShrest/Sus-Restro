import React from "react";
import { Link } from "react-router-dom";

const Links: React.FC = () => (
  <nav className="hidden md:flex gap-8 font-medium">
    <Link
      to="/"
      className="hover:text-orange-400 text-neutral-400 dark:text-neutral-300"
    >
      Home
    </Link>
    <Link
      to="/menu"
      className="hover:text-orange-400 text-neutral-400 dark:text-neutral-300"
    >
      Menu
    </Link>
    <Link
      to="/aboutus"
      className="hover:text-orange-400 text-neutral-400 dark:text-neutral-300"
    >
      About Us
    </Link>
    <Link
      to="/admin"
      className="hover:text-orange-400 text-neutral-400 dark:text-neutral-300"
    >
      Admin Panel
    </Link>
  </nav>
);

export default Links;
