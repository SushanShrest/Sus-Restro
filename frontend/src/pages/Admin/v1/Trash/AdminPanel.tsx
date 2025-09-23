import React, { useEffect, useState } from "react";
import { Button, Dropdown, Space, Table } from "antd";
import { DownOutlined, EditFilled, DeleteFilled } from "@ant-design/icons";
import type { TableProps } from "antd";
import type MenuItem from "../../../types/type";
import { Config } from "../../../Config";

// Table
const columns: TableProps<MenuItem>["columns"] = [
  {
    title: "Sn",
    dataIndex: "id",
    key: "id",
    fixed: "left",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    fixed: "left",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Today's Special",
    dataIndex: "todaySpecial",
    key: "todaySpecial",
    render: (value: boolean) => (value ? "✅ Yes" : "❌ No"),
  },
  {
    title: "Action",
    key: "price",
    render: (_, menu) => (
      <Space size="middle">
        <Button color="purple" variant="solid" icon={<EditFilled />}>
          Edit
        </Button>
        <Button color="danger" variant="solid" icon={<DeleteFilled />}>
          Delete
        </Button>
      </Space>
    ),
  },
];
const AdminPanel: React.FC = () => {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  // const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    fetch(`${Config.BASE_URL}/menu`)
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
    <section className="dark:bg-neutral-800 dark:text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Control Panel</h1>
      <div className="flex justify-between items-center gap-3">
        {/* Left side */}
        <Button type="primary">Add Menu</Button>

        {/* Right side */}
        <Dropdown>
          <Button>
            <Space>
              Filter Category
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>
      {/* Table Content */}
      <div className="pt-4 overflow-x-auto">
        <Table<MenuItem>
          columns={columns}
          dataSource={menu}
          scroll={{ x: "max-content" }}
        />
      </div>
    </section>
  );
};

export default AdminPanel;
