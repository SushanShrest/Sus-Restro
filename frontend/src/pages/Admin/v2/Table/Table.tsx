import { DeleteFilled, EditFilled, EyeFilled } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import React from "react";
import type MenuItem from "../../../../types/menuItem";

interface Props {
  menu: MenuItem[];
  onAction: (mode: "view" | "edit" | "delete") => void;
}

const Table: React.FC<Props> = ({ menu, onAction }) => {
  return (
    <table className="min-w-full ">
      <thead className="bg-gray-100 border-b-2 border-gray-200 uppercase dark:text-black dark:bg-neutral-500">
        <tr>
          <th className="p-3 w-5 font-bold tracking-wide text-left">SN</th>
          <th className="p-3 w-25 font-bold tracking-wide text-left ">Title</th>
          <th className="p-3 w-20 font-bold tracking-wide text-left">
            Category
          </th>
          <th className="p-3 w-10 font-bold tracking-wide text-left ">Price</th>
          <th className="p-3 w-15 font-bold tracking-wide text-left ">
            Todayspecial
          </th>

          <th className="p-3 w-30 font-bold tracking-wide text-left ">
            Action
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {menu &&
          menu.map((item, index) => (
            <tr
              key={item.id}
              className="hover:bg-gray-50 dark:hover:bg-neutral-500"
            >
              <td className="px-4 py-2 font-semibold whitespace-nowrap">
                {index + 1}
              </td>
              <td className="px-4 py-2 font-semibold whitespace-nowrap">
                {item.title}
              </td>
              <td className="px-4 py-2 font-semibold uppercase whitespace-nowrap">
                {item.category}
              </td>
              <td className="px-4 py-2 font-semibold whitespace-nowrap">
                {item.price}
              </td>
              <td className="px-4 py-2">
                {item.todaySpecial ? (
                  <span className="text-green-600 font-semibold">Yay!</span>
                ) : (
                  <span className="text-red-600 font-semibold">Nah!</span>
                )}
              </td>
              <td className="px-4 py-2 space-x-2 whitespace-nowrap">
                <Tooltip placement="top" title="View Menu">
                  <Button
                    icon={<EyeFilled />}
                    variant="solid"
                    color="yellow"
                    onClick={() => onAction("view")}
                  ></Button>
                </Tooltip>
                <Tooltip placement="top" title="Edit Menu">
                  <Button
                    icon={<EditFilled />}
                    variant="solid"
                    color="purple"
                    onClick={() => onAction("edit")}
                  ></Button>
                </Tooltip>
                <Tooltip placement="top" title="Delete Menu">
                  <Button
                    icon={<DeleteFilled />}
                    variant="solid"
                    color="danger"
                    onClick={() => onAction("delete")}
                  ></Button>
                </Tooltip>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
