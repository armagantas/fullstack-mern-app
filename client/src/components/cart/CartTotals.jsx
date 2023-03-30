import { Button } from "antd";
import { ClearOutlined } from "@ant-design/icons";

const CartTotals = () => {
  return (
    <div className="cart h-full max-h-[calc(100vh_-_82px)] flex flex-col">
      <h2 className="bg-blue-600 text-center py-4 text-white font-bold tracking-wide">
        Basket
      </h2>
      <div className="cart-items">
        <div className="cart-item">Cart Item</div>
      </div>
      <div className="cart-totals mt-auto">
        <div className="border-t border-b">
          <div className="flex justify-between p-2">
            <b>Subtotal</b>
            <span>99TL</span>
          </div>
          <div className="flex justify-between p-2">
            <b>Tax 8%</b>
            <span className="text-red-700">+7.92TL</span>
          </div>
        </div>
        <div className="border-b mt-4">
          <div className="flex justify-between p-2">
            <b className="text-xl text-green-500">General Total</b>
            <span className="text-xl ">99TL</span>
          </div>
        </div>
        <div className="py-4 px-2">
          <Button type="primary" size="large" className="w-full ">
            Create Order
          </Button>
          <Button
            type="primary"
            size="large"
            className="w-full mt-2 flex items-center justify-center"
            icon={<ClearOutlined />}
            danger
          >
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
