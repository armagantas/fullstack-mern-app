import { useState } from "react";
import "./style.css";
import { PlusOutlined } from "@ant-design/icons";
import CreateCategoryModal from "../modals/CreateCategoryModal";

const Categories = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

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
      <CreateCategoryModal
        open={isAddModalOpen}
        onCancel={() => setIsAddModalOpen(false)}
      />
    </ul>
  );
};

export default Categories;
