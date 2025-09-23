import React, { useState, type Dispatch, type SetStateAction } from "react";
import { Modal } from "antd";
import CreateMenu from "../CRUD/CreateMenu";
import EditMenu from "../CRUD/EditMenu";
import DeleteMenu from "../CRUD/DeleteMenu";
import ViewMenu from "../CRUD/ViewMenu";
import type { ErrorsType } from "../../../../types/formTypes";

interface FormDataProps {
  id: string;
  setId: (num: string) => void; //for useState we declare type like this option 1
  title: string;
  setTitle: Dispatch<SetStateAction<string>>; // option 2(any)
  price: number;
  setPrice: Dispatch<SetStateAction<number>>;
  rating: number;
  setRating: Dispatch<SetStateAction<number>>;
  category: string;
  setCategory: Dispatch<SetStateAction<any>>;
  todaySpecial: boolean;
  setTodaySpecial: Dispatch<SetStateAction<boolean>>;
  image: string;
  setImage: Dispatch<SetStateAction<string>>;
}

interface ModalMenuProps {
  formData: FormDataProps;
  loadMenu: () => void;
  modalProps: {
    isModalOpen: boolean;
    modalMode: string | null;
    handleOk: () => void;
    handleCancel: () => void;
  };
}

const MenuModal: React.FC<ModalMenuProps> = ({ formData, loadMenu, modalProps  }) => {
  const [errors, setErrors] = useState<ErrorsType>({});
  const { isModalOpen, modalMode, handleOk, handleCancel } = modalProps;
  const {
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
  } = formData;

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
    <div>
      <Modal
        title={`${modalMode?.toUpperCase()} Modal `}
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onCancel={resetFieldValue}
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
            loadMenu={loadMenu}
          />
        )}
        {modalMode === "view" && <ViewMenu />}
        {modalMode === "edit" && <EditMenu />}
        {modalMode === "delete" && <DeleteMenu />}
      </Modal>
    </div>
  );
};

export default MenuModal;
