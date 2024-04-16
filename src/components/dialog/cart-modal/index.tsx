import { Modal } from "antd";
const CartModal = ({ open, handleShop }: { open: any; handleShop: any }) => {
  return (
    <>
      <Modal title="Shop box" open={open} onCancel={handleShop} footer={false}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default CartModal;
