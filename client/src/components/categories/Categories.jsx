import { useState } from "react";
import "./style.css";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal } from "antd";

const Categories = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const onFinish = async (values) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/categories/createCategory",
        {
          method: "POST",
          headers: { "Content-type": "application / json;" },
          body: JSON.stringify(values),
        }
      );
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ul className="flex gap-4 md:flex-col text-lg ">
      <li className="category-item">
        <span>All</span>
      </li>
      <li className="category-item">
        <span>Foods</span>
      </li>
      <li className="category-item">
        <span>Drinks</span>
      </li>
      <li className="category-item">
        <span>Fruits</span>
      </li>
      <li className="category-item">
        <span>Fruits</span>
      </li>
      <li className="category-item">
        <span>Fruits</span>
      </li>
      <li className="category-item">
        <span>Fruits</span>
      </li>
      <li className="category-item">
        <span>Fruits</span>
      </li>
      <li
        className="category-item !bg-purple-800 hover:opacity-90"
        onClick={() => setIsAddModalOpen(true)}
      >
        <PlusOutlined className="md:text-2xl" />
      </li>
      <Modal
        title="Add a new category"
        open={isAddModalOpen}
        onCancel={() => setIsAddModalOpen(false)}
        footer={false}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="title"
            label="Add Category"
            rules={[{ required: true, message: "Category name is required" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item className="flex justify-end mb-0">
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </ul>
  );
};

export default Categories;
