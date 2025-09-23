import React from "react";
import { Link } from "react-router-dom";
import { ShopTwoTone } from "@ant-design/icons";

const Brand: React.FC = () => (
  <div className="flex items-center gap-2">
    <div className="text-3xl">
      <ShopTwoTone twoToneColor="#f48d20ff" />
    </div>
    <Link to="/">
      <h1 className="text-xl font-bold">Suspicious Restro</h1>
    </Link>
  </div>
);

export default Brand;
