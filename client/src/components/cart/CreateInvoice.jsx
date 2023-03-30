import { Modal } from "antd";

const CreateInvoice = (props) => {
  const { isModalOpen, setIsModalOpen } = props;
  return (
    <Modal
      title="Create Invoice"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default CreateInvoice;
