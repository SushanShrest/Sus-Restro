import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useEffect, useState } from "react";
import type MenuItem from "../../../types/menuItem";
import { useModal } from "../../../hooks/useModal";
import { fetchMenu } from "./MenuApi/fetch";
import Table from "./Table/Table";
import MenuModal from "./Modal/MenuModal";

const Admin: React.FC = () => {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [rating, setRating] = useState<number>(0);
  const [category, setCategory] = useState<any>(null);
  const [image, setImage] = useState<string>("");
  const [todaySpecial, setTodaySpecial] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem| null>(null);

  const { isModalOpen, modalMode, showModal, handleOk, handleCancel } =
    useModal();

  // Calls loadMenu on mount: fetches menu from API, sets state, handles errors;
  const loadMenu = async () => {
    try {
      const data = await fetchMenu();
      setMenu(data);
    } catch (err: any) {
      alert("could not load menu:" + err.message);
    }
  };

  // We wrap fetchMenu in an async function because useEffect cannot be async directly,
  // so we can’t just import and call fetchMenu() without a wrapper.
  useEffect(() => {
    loadMenu();
  }, []);

  return (
    <section className="dark:bg-neutral-800 dark:text-white">
      <h2 className="text-2xl font-bold px-4 py-2 ">Menu List</h2>
      <div className="justify-self-end p-3">
        <Button
          variant="solid"
          color="primary"
          icon={<PlusOutlined />}
          onClick={() => showModal("create")}
        >
          Add Button
        </Button>
      </div>
      <div className="overflow-auto">
        <Table
          menu={menu}
          //callback function
          onAction={(mode, item) => {
            showModal(mode);
            setSelectedItem(item);
          }}
        />

        <MenuModal
          formData={{
            id,
            setId,
            title,
            setTitle,
            price,
            setPrice,
            rating,
            setRating,
            category,
            setCategory,
            todaySpecial,
            setTodaySpecial,
            image,
            setImage,
          }}
          loadMenu={loadMenu}
          modalProps={{ isModalOpen, modalMode, handleOk, handleCancel }}
          selectedItem={selectedItem}
        />
      </div>
    </section>
  );
};

export default Admin;
