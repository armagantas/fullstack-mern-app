import { Modal } from "antd";

const PrintBill = (props) => {
  const { isModalOpen, setIsModalOpen } = props;

  return (
    <Modal
      title="Print Invoice"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
    >
      Invoice
    </Modal>
  );
};

export default PrintBill;
