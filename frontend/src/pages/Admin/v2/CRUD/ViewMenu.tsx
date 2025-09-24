import React from "react";
import type MenuItem from "../../../../types/menuItem";
import { CheckOutlined, StarTwoTone } from "@ant-design/icons";

interface ViewProps {
  item: MenuItem | null;
}

const ViewMenu: React.FC<ViewProps> = ({ item }) => {
  if (!item) return <div className="text-gray-500">No item selected</div>; // handle null

  return (
    <div className="p-4 border rounded-xl shadow-md space-y-3 dark:border-gray-600 dark:bg-neutral-700">
      {/* Image */}
      <div className="flex justify-center">
        <img
          src={item.image}
          alt="Menu Item"
          className="w-80 h-80 object-cover border-2 border-gray-300 rounded-lg shadow-sm"
        />
      </div>

      {/* Title + Rating */}
      <div className="flex items-center gap-2">
        <h3 className="text-xl font-bold">{item.title}</h3>
        <span className="text-xl items-center text-yellow-500 font-bold">
          {item.rating}
          <StarTwoTone twoToneColor="#ec9216ff" className="ml-1" />
        </span>
      </div>

      {/* Category */}
      <p className="text-gray-800 dark:text-gray-300 font-semibold">
        <span className="font-bold pr-2">Category:</span>
        {item.category.toUpperCase()}
      </p>

      {/* Price */}
      <p className="text-gray-800 dark:text-gray-300 font-semibold gap-2">
        <span className="font-bold pr-2">Price:</span> ${item.price}
      </p>

      {/* Today Special */}
      <div>
        {item.todaySpecial ? (
          <span className="px-3 py-1 text-sm rounded-lg bg-green-100 text-green-700 font-semibold">
            <CheckOutlined /> Today’s Special
          </span>
        ) : (
          <span className="px-3 py-1 text-sm rounded-lg bg-red-100 text-red-700 font-semibold">
            X Not Special
          </span>
        )}
      </div>
    </div>
  );
};

export default ViewMenu;
