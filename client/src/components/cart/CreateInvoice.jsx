import { Modal, Form, Input, Select, Card, Button } from "antd";

const CreateInvoice = (props) => {
  const { isModalOpen, setIsModalOpen } = props;

  const onFinish = (values) => {
    console.log("Received values on form: ", values);
  };

  return (
    <Modal
      title="Create Invoice"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
    >
      <Form layout={"vertical"} onFinish={onFinish}>
        <Form.Item
          label="Customer Name/Surname"
          name={"curtomerName"}
          rules={[
            {
              requried: true,
              message: "Please enter a valid name and surname!",
            },
          ]}
        >
          <Input placeholder="Enter a valid name and surname" />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name={"phoneNumber"}
          rules={[{ requried: true }]}
        >
          <Input
            placeholder="Please enter a valid phone number"
            maxLength={11}
          />
        </Form.Item>
        <Form.Item
          label="Payment Type"
          rules={[{ requried: true }]}
          name={"paymentMode"}
        >
          <Select placeholder="Please choose a payment method">
            <Select.Option value="Cash">Cash</Select.Option>
            <Select.Option value="Credit Card">Credit Card</Select.Option>
          </Select>
        </Form.Item>

        <Card>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>549.00</span>
          </div>
          <div className="flex justify-between my-2">
            <span>Tax 8%</span>
            <span className="text-red-600">43.92</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>632.92</span>
          </div>
          <div className="flex justify-end">
            <Button
              className="mt-4"
              type="primary"
              onClick={() => setIsModalOpen(true)}
              htmlType="submit"
            >
              Create Order
            </Button>
          </div>
        </Card>
      </Form>
    </Modal>
  );
};

export default CreateInvoice;
