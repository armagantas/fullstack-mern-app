import React, { useState } from "react";
import { Form, Modal, Table, Input, Button } from "antd";
import axios from "axios";

const EditCategory = ({ isEditModalOpen, setIsEditModalOpen, categories }) => {
  const [editingRow, setEditingRow] = useState({});
  const [inputData, setInputData] = useState("");

  console.log(editingRow._id);

  const onFinish = async () => {
    /*refactoring*/

    try {
      await axios.patch(
        `${process.env.REACT_APP_API_URL}/categories/updateCategory/${editingRow._id}`,
        {
          data: { title: inputData },
        }
      );
      setInputData("");
    } catch (error) {
      console.log(error);
    }
  };
  const columns = [
    {
      title: "Category Title",
      dataIndex: "title",
      render: (_, record) => {
        if (record._id === editingRow._id) {
          return (
            <Form.Item className="mb-0">
              <Input
                defaultValue={record.title}
                onChange={(e) => setInputData(e.target.value)}
              />
            </Form.Item>
          );
        } else {
          return <p>{record.title}</p>;
        }
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
        return (
          <>
            <Button type="link" onClick={() => setEditingRow(record)}>
              Edit
            </Button>
            <Button type="text" htmlType="submit">
              Save
            </Button>
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
      <Form onFinish={onFinish}>
        <Table
          bordered
          dataSource={categories}
          columns={columns}
          rowKey={"_id"}
        />
      </Form>
    </Modal>
  );
};

export default EditCategory;
