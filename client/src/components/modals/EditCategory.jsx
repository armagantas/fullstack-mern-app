import React from "react";
import { Form, Modal, Table } from "antd";

const EditCategory = ({ isEditModalOpen, setIsEditModalOpen }) => {
  return (
    <Modal
      open={isEditModalOpen}
      title="Category Operations"
      footer={false}
      onCancel={() => setIsEditModalOpen(false)}
    >
      <Form>
        <Table bordered />
      </Form>
    </Modal>
  );
};

export default EditCategory;
