import React, { useState } from "react";
import { Form, Modal, Table, Input, Button } from "antd";
import axios from "axios";

const EditCategory = ({
  isEditModalOpen,
  setIsEditModalOpen,
  categories,
  setCategories,
}) => {
  const [editingRow, setEditingRow] = useState({});
  const [inputData, setInputData] = useState("");

  console.log(editingRow._id);

  const onFinish = async () => {
    /*refactoring*/

    try {
      await axios.put(
        `${process.env.REACT_APP_API_URL}/categories/updateCategory/${editingRow._id}`,

        { title: inputData }
      );
      setInputData("");
      setCategories(
        categories.map((item) => {
          if (item._id === editingRow._id) {
            return { ...item, title: inputData };
          }
          return item;
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCategory = async (id) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/categories/deleteCategory/${id}`
      );
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const columns = [
    {
      title: "Category Title",
      dataIndex: "title",
      render: (_, record) => {
        if (record?._id === editingRow?._id) {
          return (
            <Form.Item className="mb-0">
              <Input
                defaultValue={record?.title}
                onChange={(e) => setInputData(e.target.value)}
              />
            </Form.Item>
          );
        } else {
          return <p>{record?.title}</p>;
        }
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
        return (
          <>
            <Button
              type="link"
              onClick={() => setEditingRow(record)}
              className="pl-0"
            >
              Edit
            </Button>
            <Button type="link" htmlType="submit" className="text-gray-500">
              Save
            </Button>
            <Button
              type="link"
              danger
              onClick={() => deleteCategory(record?._id)}
            >
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
