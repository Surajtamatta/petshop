import React, { useContext } from "react";
import { Modal } from "antd";
import { ShowModal } from "../../utils/context/Modal";
import { ModalChildren } from "../../styles/components/Modal";

const StyledModal = ({ children, title, centered, width }) => {
  const { isModalOpen,setModalOpen } = useContext(ShowModal);
  
  const onCancel=()=>{
    setModalOpen(false)
  }

  return (
    <Modal
      title={title}
      centered={centered}
      open={isModalOpen}
      onCancel={onCancel}
      width={width}
      footer={null}
    >
      <ModalChildren>{children}</ModalChildren>
    </Modal>
  );
};

export default StyledModal;
