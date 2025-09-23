import { useState } from "react";

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"create" | "edit" | "delete" | "view" | null>(null);

  const showModal = (mode: "create" | "edit" | "delete" | "view") => {
    setModalMode(mode);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setModalMode(null);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setModalMode(null);
  };

  return { isModalOpen, modalMode, showModal, handleOk, handleCancel };
};
