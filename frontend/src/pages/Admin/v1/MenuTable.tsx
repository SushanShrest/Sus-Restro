import {
  DeleteFilled,
  EditFilled,
  EyeFilled,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Modal, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import { Config } from "../../../Config";
import type MenuItem from "../../../types/menuItem";
import CreateMenu from "./CRUD/CreateMenu";
import EditMenu from "./CRUD/EditMenu";
import DeleteMenu from "./CRUD/DeleteMenu";
import { useModal } from "../../../hooks/useModal";

type ErrorsType = {
  title?: string | null;
  price?: string | null;
  category?: string | null;
  rating?: string | null;
  image?: string | null;
};

const MenuTable: React.FC = () => {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [rating, setRating] = useState<number>(0);
  const [category, setCategory] = useState<any>(null);
  const [image, setImage] = useState<string>("");
  const [todaySpecial, setTodaySpecial] = useState<boolean>(false);
  const [errors, setErrors] = useState<ErrorsType>({});
  const { isModalOpen, modalMode, showModal, handleOk, handleCancel } =
    useModal();

  const fetchMenu = () => {
    fetch(`${Config.BASE_URL}/menu`)
      .then((res) => res.json())
      .then((data) => setMenu(data))
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  const resetFieldValue = () => {
    setId("");
    setTitle("");
    setPrice(0);
    setRating(0);
    setCategory(null);
    setImage("");
    setTodaySpecial(false);
    setErrors({});
    handleCancel();
  };

  return (
    <section className="dark:bg-neutral-800 dark:text-white">
      <h2 className="text-2xl font-bold p-4 ">Menu List</h2>
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
      <div className="overflow-auto rounded-ld shadow w">
        <table className="min-w-full ">
          <thead className="bg-gray-100 border-b-2 border-gray-200 uppercase dark:text-black dark:bg-neutral-500">
            <tr>
              <th className="p-3 w-5 font-bold tracking-wide text-left">SN</th>
              <th className="p-3 w-25 font-bold tracking-wide text-left ">
                Title
              </th>
              <th className="p-3 w-20 font-bold tracking-wide text-left">
                Category
              </th>
              <th className="p-3 w-10 font-bold tracking-wide text-left ">
                Price
              </th>
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
                        onClick={() => showModal("view")}
                      ></Button>
                    </Tooltip>
                    <Tooltip placement="top" title="Edit Menu">
                      <Button
                        icon={<EditFilled />}
                        variant="solid"
                        color="purple"
                        onClick={() => showModal("edit")}
                      ></Button>
                    </Tooltip>
                    <Tooltip placement="top" title="Delete Menu">
                      <Button
                        icon={<DeleteFilled />}
                        variant="solid"
                        color="danger"
                        onClick={() => showModal("delete")}
                      ></Button>
                    </Tooltip>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <Modal
          title={`${modalMode?.toUpperCase()} Modal `}
          closable={{ "aria-label": "Custom Close Button" }}
          open={isModalOpen}
          // onOk={handleOk}
          onCancel={resetFieldValue}
          // onCancel={() => {
          //   resetFieldValue();
          // }}
          footer={null}
        >
          {modalMode === "create" && (
            <CreateMenu
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
              errors={errors}
              setErrors={setErrors}
              handleOk={handleOk}
              fetchMenu={fetchMenu}
            />
          )}
          {modalMode === "edit" && <EditMenu />}
          {modalMode === "delete" && <DeleteMenu />}
        </Modal>
      </div>
    </section>
  );
};

export default MenuTable;
