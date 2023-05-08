import React from "react";
import axios from "axios";

import { Button, Form, Input, Modal } from "antd";
import { useForm } from "antd/es/form/Form";

const CreateCategoryModal = ({ ...other }, setCategories, categories) => {
  const [form] = useForm();
  const onFinish = async (values) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/categories/createCategory`,
        {
          ...values,
        }
      );
      form.resetFields();
      other.onCancel();
      setCategories([
        ...categories,
        {
          _id: Math.random(),
          title: values.title,
        },
      ]);
    } catch (err) {
      console.log(err);
      other.onCancel();
    }
  };

  return (
    <Modal title="Add a new category" footer={false} {...other}>
      <Form layout="vertical" onFinish={onFinish} form={form}>
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
  );
};

export default CreateCategoryModal;
