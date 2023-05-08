import { useState } from "react";
import "./style.css";
import { PlusOutlined } from "@ant-design/icons";
import CreateCategoryModal from "../modals/CreateCategoryModal";

const Categories = ({ categories }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <ul className="flex gap-4 md:flex-col text-lg ">
      {console.log("asdadsadsa", categories.getCategory)}
      {categories.map((item) => (
        <li className="category-item" key={item._id}>
          <span>{item.title}</span>
        </li>
      ))}
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
