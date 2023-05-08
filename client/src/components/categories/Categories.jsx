import { useState } from "react";
import "./style.css";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import CreateCategoryModal from "../modals/CreateCategoryModal";
import EditCategory from "../modals/EditCategory";

const Categories = ({ categories, setCategories }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

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
      <li
        className="category-item !bg-orange-800 hover:opacity-90"
        onClick={() => setIsEditModalOpen(true)}
      >
        <EditOutlined className="md:text-2xl" />
      </li>
      <CreateCategoryModal
        open={isAddModalOpen}
        onCancel={() => setIsAddModalOpen(false)}
      />
      <EditCategory
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        categories={categories}
        setCategories={setCategories}
      />
    </ul>
  );
};

export default Categories;
