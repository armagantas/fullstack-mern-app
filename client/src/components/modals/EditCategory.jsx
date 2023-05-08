import React from "react";
import { Form, Modal, Table, Input, Button } from "antd";

const EditCategory = ({ isEditModalOpen, setIsEditModalOpen, categories }) => {
  const columns = [
    {
      title: "Category Title",
      dataIndex: "title",
      render: () => {
        return (
          <Form.Item className="mb-0">
            <Input />
          </Form.Item>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => {
        return (
          <>
            <Button type="link">Edit</Button>
            <Button type="text">Save</Button>
            <Button type="text" danger>
              Delete
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <Modal
      open={isEditModalOpen}
      title="Category Operations"
      footer={false}
      onCancel={() => setIsEditModalOpen(false)}
    >
      <Form>
        <Table bordered dataSource={categories} columns={columns} />
      </Form>
    </Modal>
  );
};

export default EditCategory;
