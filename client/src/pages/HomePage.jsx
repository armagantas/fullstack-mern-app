import { useEffect, useState } from "react";
import CartTotals from "../components/cart/CartTotals";
import Categories from "../components/categories/Categories";
import Header from "../components/header/Header";
import Products from "../components/products/Products";
import axios from "axios";

const HomePage = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/categories/getCategories`
      );
      setCategories(data.getCategory);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <Header />
      <div className="home px-6 flex md:flex-row flex-col justify-between gap-10 md:pb-0 pb-24">
        <div className="categories  overflow-auto max-h-[calc(100vh-104px)] md:pb-10">
          <Categories categories={categories} setCategories={setCategories} />
        </div>
        <div className="products flex-[8] max-h-[calc(100vh-104px)] overflow-y-auto pb-10">
          <Products />
        </div>
        <div className="cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border ">
          <CartTotals />
        </div>
      </div>
    </>
  );
};

export default HomePage;
